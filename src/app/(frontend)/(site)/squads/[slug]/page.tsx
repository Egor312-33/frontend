import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { SquadAbout } from '@/components/squads/SquadAbout'
import { SquadCharts } from '@/components/squads/SquadCharts'
import { SquadEpochsTimeline } from '@/components/squads/SquadEpochsTimeline'
import { SquadEventsTimeline } from '@/components/squads/SquadEventsTimeline'
import { SquadMembersGrid } from '@/components/squads/SquadMembersGrid'
import { SquadRenderer } from '@/components/squads/SquadRenderer'

import type { SquadEventForView, SquadMemberForView, SquadStatsForView } from '@/types/squad'

import type { Epoch, Event, SquadMember } from '@/payload-types'
import { Populated, toPopulated } from '@/utils/to-populated'

type SquadMemberPopulated = Populated<SquadMember, 2>
type EpochPopulated = Populated<Epoch, 2>
type EventPopulated = Populated<Event, 2>

export default async function SquadPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const payload = await getPayload({ config })

	const squadResult = await payload.find({
		collection: 'squads',
		where: { slug: { equals: slug } },
		depth: 2,
		limit: 1
	})

	const squad = squadResult.docs[0]
	if (!squad) return notFound()

	const [membersResult, epochsResult] = await Promise.all([
		payload.find({
			collection: 'squad-members',
			where: { squad: { equals: squad.id } },
			depth: 2,
			limit: 200
		}),
		payload.find({
			collection: 'epochs',
			where: { squad: { equals: squad.id } },
			sort: '-dateStart',
			depth: 2,
			limit: 50
		})
	])

	const memberDocs = membersResult.docs as SquadMemberPopulated[]
	const epochDocs = epochsResult.docs as EpochPopulated[]

	const eventDocs: EventPopulated[] = epochDocs
		.flatMap(epoch => {
			const joined = epoch.events
			if (!joined || !('docs' in joined)) return []
			return (joined.docs ?? []).filter((e): e is EventPopulated => e !== null)
		})
		.sort((a, b) => b.date.localeCompare(a.date))

	const currentMemberIds = new Set(
		memberDocs
			.filter(m => !m.leaveDate)
			.flatMap(m => {
				const id = m.streamer?.id
				return id ? [id] : []
			})
	)

	const lastEventByStreamer = new Map<number, EventPopulated>()
	for (const event of eventDocs) {
		const present = event.streamersPresent ?? []
		for (const s of present) {
			const id = typeof s === 'number' ? s : typeof s === 'object' && s !== null ? s.id : null
			if (id !== null && currentMemberIds.has(id) && !lastEventByStreamer.has(id)) {
				lastEventByStreamer.set(id, event)
			}
		}
	}

	const membersForView: SquadMemberForView[] = memberDocs
		.map(m => {
			const streamer = m.streamer
			if (!streamer) return null
			const last = lastEventByStreamer.get(streamer.id)
			return {
				id: m.id,
				streamer: {
					id: streamer.id,
					name: streamer.name,
					slug: streamer.slug,
					avatar: streamer.avatar
				},
				role: m.role ?? null,
				joinDate: m.joinDate ?? null,
				leaveDate: m.leaveDate ?? null,
				isCurrent: !m.leaveDate,
				lastEvent: last ? { id: last.id, title: last.title, date: last.date, type: last.type } : null
			}
		})
		.filter((m): m is SquadMemberForView => m !== null)
		.sort((a, b) => {
			if (a.isCurrent !== b.isCurrent) return a.isCurrent ? -1 : 1
			if (a.joinDate && b.joinDate) return b.joinDate.localeCompare(a.joinDate)
			return 0
		})

	let currentCount = 0
	let pastCount = 0
	for (const m of membersForView) {
		if (m.isCurrent) currentCount++
		else pastCount++
	}

	const eventsForView: SquadEventForView[] = eventDocs.map(e => {
		const participants = (e.streamersPresent ?? []).flatMap(s => {
			if (typeof s === 'object' && s !== null && 'name' in s) {
				return [{ id: s.id, name: s.name, slug: s.slug }]
			}
			return []
		})
		return {
			id: e.id,
			title: e.title,
			date: e.date,
			type: e.type,
			description: e.description ?? null,
			layoutTemplate: e.eventUiConfig?.layoutTemplate ?? 'clean-stream',
			eventVibe: e.eventUiConfig?.eventVibe ?? 'normal',
			participants
		}
	})

	const stats: SquadStatsForView = {
		totalMembers: membersForView.length,
		currentMembers: currentCount,
		pastMembers: pastCount,
		totalEpochs: epochDocs.length,
		totalEvents: eventsForView.length,
		firstEventDate: eventsForView.at(-1)?.date ?? null,
		lastEventDate: eventsForView[0]?.date ?? null
	}

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<SquadRenderer
				squad={{
					id: squad.id,
					name: squad.name,
					slug: squad.slug,
					logo: toPopulated(squad.logo),
					banner: toPopulated(squad.banner),
					history: squad.history
				}}
				stats={stats}
				membersTab={<SquadMembersGrid members={membersForView} />}
				epochsTab={<SquadEpochsTimeline epochs={epochDocs} />}
				eventsTab={<SquadEventsTimeline events={eventsForView} />}
				aboutTab={<SquadAbout history={squad.history} />}
				chartsTab={
					<SquadCharts
						events={eventsForView}
						epochsCount={epochDocs.length}
						membersCount={membersForView.length}
						currentMembersCount={membersForView.filter(m => m.isCurrent).length}
					/>
				}
			/>
		</div>
	)
}
