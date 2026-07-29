import { notFound } from 'next/navigation'

import { SquadAbout } from '@/components/squads/squad/SquadAbout'

import { getSquadBySlug } from '../_data'

export default async function SquadAboutPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	return <SquadAbout history={squad.history} />
}
