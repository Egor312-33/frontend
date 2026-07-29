import { notFound } from 'next/navigation'

import { SquadEventsTimeline } from '@/components/squads/squad/events/SquadEventsTimeline'

import { getSquadBySlug, getSquadEventsForSquad } from '../_data'

export default async function SquadEventsPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	return <SquadEventsTimeline events={await getSquadEventsForSquad(slug)} />
}
