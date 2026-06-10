import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { EpochsSidebar } from '@/components/blocks/EpochsSidebar'
import { StatsTabView } from '@/components/blocks/StatsTabView'
import { FeedTab } from '@/components/blocks/tabs/FeedTab'
import { InfoTab } from '@/components/blocks/tabs/InfoTab'
import { PhotosTab } from '@/components/blocks/tabs/PhotosTab'
import { CATEGORIES, type CategoryKey, type StreamGridForView } from '@/components/lib/eventLayouts'

import type { EpochForView } from '@/types/epoch'

import type { EpochParticipant, Event, Squad } from '@/payload-types'
import { toPopulated } from '@/utils/to-populated'

function buildEpochsForView(participants: EpochParticipant[]): EpochForView[] {
	return participants.flatMap(ep => {
		const epoch = toPopulated(ep.epoch)

		const squad = epoch && toPopulated(epoch.squad)

		if (!epoch || !squad) return []

		return [
			{
				id: epoch.id,
				title: epoch.title,
				dateStart: epoch.dateStart,
				dateEnd: epoch.dateEnd ?? null,
				squad: squad as Squad,
				roleInEpoch: ep.roleInEpoch
			}
		]
	})
}

function computeCounts(streamGrids: StreamGridForView[], soloEvents: Event[]): Record<CategoryKey, number> {
	const counts = Object.fromEntries(CATEGORIES.map(c => [c.key, 0])) as Record<CategoryKey, number>

	for (const grid of streamGrids) {
		counts[grid.type] += grid.events.length
	}

	counts.events = soloEvents.length
	counts.all = streamGrids.reduce((sum, g) => sum + g.events.length, 0) + soloEvents.length

	return counts
}

export default async function StreamerPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	const payload = await getPayload({ config })

	const streamerResult = await payload.find({
		collection: 'streamers',
		where: { slug: { equals: slug } },
		depth: 1,
		limit: 1
	})

	const streamer = streamerResult.docs[0]

	if (!streamer) return notFound()

	const [squadMembersResult, epochParticipantsResult, gridsResult, soloEventsResult] = await Promise.all([
		payload.find({
			collection: 'squad-members',
			where: { streamer: { equals: streamer.id } },
			depth: 2,
			limit: 100
		}),

		payload.find({
			collection: 'epoch-participants',
			where: { streamer: { equals: streamer.id } },
			depth: 2,
			limit: 100
		}),

		payload.find({
			collection: 'stream-grids',
			where: { 'participants.streamer': { equals: streamer.id } },
			select: { title: true, type: true, cover: true, events: true },
			joins: { events: { limit: 100, sort: '-date' } },
			depth: 2,
			sort: '-dateStart',
			limit: 50
		}),

		payload.find({
			collection: 'events',
			where: { streamersPresent: { equals: streamer.id } },
			select: {
				title: true,
				date: true,
				type: true,
				description: true,
				eventUiConfig: true,
				epoch: true,
				updatedAt: true,
				createdAt: true
			},
			depth: 1,
			sort: '-date',
			limit: 200
		})
	])

	const streamGrids: StreamGridForView[] = gridsResult.docs.map(grid => ({
		id: grid.id,
		title: grid.title,
		type: grid.type,
		cover: toPopulated(grid.cover),
		events: (grid.events?.docs ?? []) as Event[]
	}))

	const allEvents = [...streamGrids.flatMap(g => g.events), ...soloEventsResult.docs]

	const lastEvents = [...allEvents].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5)

	const counts = computeCounts(streamGrids, soloEventsResult.docs)

	const epochsForView = buildEpochsForView(epochParticipantsResult.docs)

	const visualConfig = streamer.streamerVisualConfig || {}

	const theme = streamer.theme || 'archive'

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<BlockRenderer
				theme={theme}
				visualConfig={visualConfig}
				squadHistory={squadMembersResult.docs}
				streamerInfo={{
					name: streamer.name,
					realName: streamer.realName,
					nicknames: streamer.nicknames,
					avatar: streamer.avatar,
					banner: streamer.banner
				}}
				feedTab={
					<FeedTab
						blocks={streamer.blocks || []}
						streamGrids={streamGrids}
						counts={counts}
						theme={theme}
						visualConfig={visualConfig}
						epochsSidebar={<EpochsSidebar epochs={epochsForView} />}
					/>
				}
				photosTab={<PhotosTab />}
				infoTab={<InfoTab />}
				statsTab={<StatsTabView counts={counts} events={lastEvents} />}
			/>
		</div>
	)
}
