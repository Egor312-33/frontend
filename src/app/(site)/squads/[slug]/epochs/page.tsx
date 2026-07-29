import { notFound } from 'next/navigation'

import { SquadEpochsTimeline } from '@/components/squads/squad/epochs/SquadEpochsTimeline'

import { getSquadBySlug } from '../_data'

export default async function SquadEpochsPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	return <SquadEpochsTimeline epochs={squad.epochs?.docs ?? []} squadSlug={slug} />
}
