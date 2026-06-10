// components/squads/squad-hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Image from 'next/image'

import type { SquadForView } from '@/types/squad'

import { PageShell } from '../ui/blocks/page-shell'

export function SquadHero({ squad }: { squad: SquadForView }) {
	const bannerUrl = squad.banner?.url ?? null
	const logoUrl = squad.logo?.url ?? null

	return (
		<>
			<PageShell
				bannerUrl={bannerUrl}
				bannerAlt={squad.name}
				radius='xl'
				overlay='medium'
				bannerClassName='mx-auto max-w-6xl'
				bannerHeight='clamp(200px, 28vw, 360px)'
			>
				<div className='px-4 pb-4 sm:px-6 sm:pb-5'>
					<div className='mx-auto flex max-w-6xl items-end gap-3 md:gap-4'>
						<motion.div
							initial={{ y: 20, opacity: 0, scale: 0.9 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
							className='border-border bg-card/90 ring-background flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 shadow-xl ring-4 backdrop-blur-sm sm:h-24 sm:w-24 md:h-32 md:w-32'
						>
							{logoUrl ? (
								<Image
									src={logoUrl}
									alt={squad.name}
									width={128}
									height={128}
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
				</div>
			</PageShell>

			<div className='h-3 sm:h-4 md:h-6' />
		</>
	)
}
