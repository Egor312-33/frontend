'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Image from 'next/image'

import { PageShell } from '@/components/ui/blocks/page-shell'

import { SquadStats, type SquadStatsData } from '../../SquadStats'

import type { GetSquadPageQuery } from '@/shared/gql/cms/graphql'
import { getMediaCMS } from '@/utils/get-media-source'

type SquadDoc = NonNullable<GetSquadPageQuery['Squads']>['docs'][number]

export function SquadHero({ squad, stats }: { squad: SquadDoc; stats: SquadStatsData }) {
	const bannerUrl = squad.banner?.url ?? null
	const logoUrl = squad.logo?.url ?? null

	return (
		<>
			<PageShell
				bannerUrl={bannerUrl}
				bannerAlt={squad.banner?.alt ?? squad.name}
				radius='xl'
				overlay='medium'
				bannerClassName='mx-auto max-w-6xl'
				bannerHeight='clamp(240px, 30vw, 380px)'
			>
				<div className='px-4 pb-4 sm:px-6 sm:pb-5'>
					<div className='mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between'>
						<div className='flex items-end gap-3 md:gap-4'>
							<motion.div
								initial={{ y: 20, scale: 0.9 }}
								animate={{ y: 0, scale: 1 }}
								transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
								className='border-border bg-card/90 ring-background flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 shadow-xl ring-4 backdrop-blur-sm sm:h-24 sm:w-24 md:h-32 md:w-32'
							>
								{logoUrl ? (
									<Image
										src={getMediaCMS(logoUrl)}
										alt={squad.logo?.alt ?? squad.name}
										width={128}
										height={128}
										priority
										className='h-full w-full object-cover'
									/>
								) : (
									<Shield className='text-muted-foreground h-10 w-10 md:h-14 md:w-14' />
								)}
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.35 }}
								className='pb-1 md:pb-2'
							>
								<div className='text-muted-foreground flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase'>
									<Shield className='h-3 w-3' />
									Сквад
								</div>
								<h1 className='text-card-foreground text-2xl font-black tracking-tight drop-shadow-lg sm:text-3xl md:text-4xl'>
									{squad.name}
								</h1>
								<p className='text-muted-foreground font-mono text-xs tracking-wide'>@{squad.slug}</p>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.45 }}
							className='md:pb-2'
						>
							<SquadStats stats={stats} />
						</motion.div>
					</div>
				</div>
			</PageShell>
		</>
	)
}

export function SquadHeroSkeleton() {
	return (
		<div className='bg-card animate-pulse rounded-xl' style={{ height: 'clamp(240px, 30vw, 380px)' }} aria-hidden>
			<div className='mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-4 sm:px-6 sm:pb-5'>
				<div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
					<div className='flex items-end gap-3 md:gap-4'>
						<div className='bg-muted h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24 md:h-32 md:w-32' />

						<div className='flex flex-col gap-2 pb-1 md:pb-2'>
							<div className='bg-muted h-2.5 w-16 rounded-full' />
							<div className='bg-muted h-8 w-48 rounded-md sm:h-9 sm:w-64 md:h-10' />
							<div className='bg-muted h-3 w-24 rounded-full' />
						</div>
					</div>

					<div className='flex gap-3 md:pb-2'>
						<div className='bg-muted h-12 w-16 rounded-lg' />
						<div className='bg-muted h-12 w-16 rounded-lg' />
						<div className='bg-muted h-12 w-16 rounded-lg' />
					</div>
				</div>
			</div>
		</div>
	)
}
