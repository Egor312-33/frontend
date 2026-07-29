// app/.../squads/[slug]/charts/page.tsx
import { notFound } from 'next/navigation'

import { SquadCharts } from '@/components/squads/squad/SquadCharts/SquadCharts'

import { getSquadBySlug, getSquadEventsForSquad } from '../_data'

export default async function SquadChartsPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	return (
		<SquadCharts
			events={await getSquadEventsForSquad(slug)}
			epochs={squad.epochs?.docs ?? []}
			currentMembers={squad.currentMembers?.docs ?? []}
			pastMembers={squad.pastMembers?.docs ?? []}
		/>
	)
}
