import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { SquadTabsNav } from '@/components/squads/squad/SquadTabsNav'
import { SquadHero, SquadHeroSkeleton } from '@/components/squads/squad/squadHero/SquadHero'

import { computeStats, getSquadBySlug, getSquadEventsForSquad } from './_data'

export default async function SquadLayout({
	params,
	children
}: {
	params: Promise<{ slug: string }>
	children: React.ReactNode
}) {
	const { slug } = await params

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<Suspense fallback={<SquadHeroSkeleton />}>
				<SquadHeroSection slug={slug} />
			</Suspense>

			<div className='mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='pt-6'>
					<SquadTabsNav />
				</div>
				<div className='pt-6 pb-20'>{children}</div>
			</div>
		</div>
	)
}

async function SquadHeroSection({ slug }: { slug: string }) {
	const squad = await getSquadBySlug(slug)
	if (!squad) notFound()

	const events = await getSquadEventsForSquad(slug)
	const stats = computeStats(squad, events)

	return <SquadHero squad={squad} stats={stats} />
}
