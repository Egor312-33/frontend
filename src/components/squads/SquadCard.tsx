'use client'

import { type Variants, motion } from 'framer-motion'
import { ArrowUpRight, CalendarRange, Layers, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { SquadCardForView } from '@/types/squad'

import { pluralRu } from '@/utils/plural-ru'

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: 'easeOut' }
	}
}

function formatPeriod(squad: SquadCardForView): string | null {
	if (!squad.activeSince) return null
	const start = new Date(squad.activeSince).getFullYear()
	if (squad.isActive || !squad.activeUntil) return `с ${start} г.`
	const end = new Date(squad.activeUntil).getFullYear()
	return start === end ? `${start} г.` : `${start}–${end}`
}

export function SquadCard({ squad }: { squad: SquadCardForView }) {
	const period = formatPeriod(squad)
	const hiddenAvatars = squad.currentMembersCount - squad.memberAvatars.length

	return (
		<motion.div variants={cardVariants} className='h-full'>
			<Link
				href={`/squads/${squad.slug}`}
				className='group border-border bg-card hover:border-accent/60 relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
			>
				<div className='bg-secondary relative aspect-[21/9] overflow-hidden'>
					{squad.banner?.url ? (
						<Image
							src={squad.banner.url}
							alt={squad.banner.alt || squad.name}
							fill
							sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
							className='object-cover transition-transform duration-500 group-hover:scale-105'
						/>
					) : (
						<div className='from-primary/25 via-accent/10 absolute inset-0 bg-gradient-to-br to-transparent' />
					)}
					<div className='from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent' />

					{squad.isActive && (
						<span className='border-border/50 bg-card/80 absolute top-3 right-3 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur'>
							<span className='relative flex h-2 w-2'>
								<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60' />
								<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
							</span>
							Активен
						</span>
					)}
				</div>

				<div className='flex flex-1 flex-col px-5 pb-5'>
					<div className='-mt-9 mb-3 flex items-end justify-between'>
						{squad.logo?.url ? (
							<div className='ring-card bg-card relative h-18 w-18 overflow-hidden rounded-2xl shadow-lg ring-4'>
								<Image
									src={squad.logo.url}
									alt={squad.logo.alt || squad.name}
									fill
									sizes='72px'
									className='object-cover'
								/>
							</div>
						) : (
							<div className='ring-card from-primary to-accent text-primary-foreground flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-bold shadow-lg ring-4'>
								{squad.name.charAt(0).toUpperCase()}
							</div>
						)}
						<ArrowUpRight className='text-muted-foreground group-hover:text-accent mb-1 h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
					</div>

					<h2 className='text-xl font-semibold tracking-tight'>{squad.name}</h2>

					<div className='text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm'>
						<span className='flex items-center gap-1.5'>
							<Users className='h-4 w-4' />
							{squad.currentMembersCount}{' '}
							{pluralRu(squad.currentMembersCount, 'участник', 'участника', 'участников')}
						</span>
						<span className='flex items-center gap-1.5'>
							<Layers className='h-4 w-4' />
							{squad.epochsCount} {pluralRu(squad.epochsCount, 'эпоха', 'эпохи', 'эпох')}
						</span>
						{period && (
							<span className='flex items-center gap-1.5'>
								<CalendarRange className='h-4 w-4' />
								{period}
							</span>
						)}
					</div>

					{squad.memberAvatars.length > 0 && (
						<div className='mt-auto flex items-center pt-4'>
							<div className='flex -space-x-2'>
								{squad.memberAvatars.map(member =>
									member.avatar?.url ? (
										<div
											key={member.id}
											title={member.name}
											className='ring-card relative h-7 w-7 overflow-hidden rounded-full ring-2'
										>
											<Image
												src={member.avatar.url}
												alt={member.name}
												fill
												sizes='28px'
												className='object-cover'
											/>
										</div>
									) : (
										<div
											key={member.id}
											title={member.name}
											className='ring-card bg-secondary text-secondary-foreground flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ring-2'
										>
											{member.name.charAt(0).toUpperCase()}
										</div>
									)
								)}
							</div>
							{hiddenAvatars > 0 && (
								<span className='text-muted-foreground ml-2.5 text-xs font-medium'>
									+{hiddenAvatars}
								</span>
							)}
						</div>
					)}
				</div>
			</Link>
		</motion.div>
	)
}
