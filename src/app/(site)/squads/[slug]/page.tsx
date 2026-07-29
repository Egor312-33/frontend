// app/.../squads/[slug]/page.tsx
import { notFound } from 'next/navigation'

import { SquadMembersGrid } from '@/components/squads/squad/SquadMembersGrid'

import { type EventDoc, getSquadBySlug, getSquadEventsForSquad } from './_data'

export default async function SquadMembersPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	const currentMembers = squad.currentMembers?.docs ?? []
	const pastMembers = squad.pastMembers?.docs ?? []
	const events = await getSquadEventsForSquad(slug)

	const currentStreamerIds = new Set(currentMembers.map(m => m.streamer?.id).filter((id): id is number => id != null))
	const lastEventByStreamer = new Map<number, EventDoc>()
	for (const event of events) {
		for (const s of event.streamersPresent ?? []) {
			if (s && currentStreamerIds.has(s.id) && !lastEventByStreamer.has(s.id)) {
				lastEventByStreamer.set(s.id, event)
			}
		}
	}

	return (
		<SquadMembersGrid currentMembers={currentMembers} pastMembers={pastMembers} lastEvents={lastEventByStreamer} />
	)
}
