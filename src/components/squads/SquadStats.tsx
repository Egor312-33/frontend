'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { Calendar, type LucideIcon, Radio, TrendingUp, UserCheck, UserMinus, Users } from 'lucide-react'
import { useEffect } from 'react'

import type { SquadStatsForView } from '@/types/squad'

import { cn } from '../lib/utils'

import { formatDate } from '@/utils/format-date'

const TONE_STYLES = {
	primary: 'bg-primary/10 text-primary border-primary/20',
	accent: 'bg-accent/10 text-accent border-accent/20',
	foreground: 'bg-foreground/5 text-foreground border-foreground/20',
	destructive: 'bg-destructive/10 text-destructive border-destructive/20'
} as const

type StatItem = {
	label: string
	key: keyof SquadStatsForView
	icon: LucideIcon
	tone: keyof typeof TONE_STYLES
}

const STAT_ITEMS: StatItem[] = [
	{ label: 'Всего', key: 'totalMembers', icon: Users, tone: 'primary' },
	{ label: 'Действ.', key: 'currentMembers', icon: UserCheck, tone: 'accent' },
	{ label: 'Бывших', key: 'pastMembers', icon: UserMinus, tone: 'foreground' },
	{ label: 'Эпох', key: 'totalEpochs', icon: Calendar, tone: 'primary' },
	{ label: 'Событий', key: 'totalEvents', icon: Radio, tone: 'accent' }
]

function AnimatedNumber({ value }: { value: number }) {
	const spring = useSpring(0, { duration: 1500, bounce: 0 })
	const display = useTransform(spring, current => Math.round(current))

	useEffect(() => {
		spring.set(value)
	}, [spring, value])

	return <motion.span>{display}</motion.span>
}

export function SquadStats({ stats }: { stats: SquadStatsForView }) {
	return (
		<section className='mx-auto max-w-7xl px-6'>
			<div className='grid grid-cols-5 gap-2'>
				{STAT_ITEMS.map((item, i) => {
					const Icon = item.icon
					const value = stats[item.key] as number

					return (
						<motion.div
							key={item.key}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.05 * i, duration: 0.3 }}
							className={cn(
								'border-border/40 bg-card/40 flex flex-col items-center justify-center gap-1 rounded-lg border px-1 py-2',
								'md:flex-row md:items-center md:gap-3 md:p-3'
							)}
						>
							<div
								className={cn(
									'flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
									'md:h-8 md:w-8 md:rounded-lg',
									TONE_STYLES[item.tone]
								)}
							>
								<Icon className='h-3.5 w-3.5 md:h-4 md:w-4' />
							</div>

							<div className='flex flex-col items-center md:items-start'>
								<p className='text-muted-foreground text-[9px] font-semibold tracking-wider uppercase md:text-[10px]'>
									{item.label}
								</p>
								<p className='text-foreground text-lg font-black tracking-tight tabular-nums md:text-xl'>
									<AnimatedNumber value={value} />
								</p>
							</div>
						</motion.div>
					)
				})}
			</div>

			{(stats.firstEventDate || stats.lastEventDate) && (
				<div className='text-muted-foreground mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs'>
					<span className='flex items-center gap-1.5'>
						<TrendingUp className='h-3.5 w-3.5' />
						<span className='font-bold tracking-wider uppercase'>Активность</span>
					</span>
					{stats.firstEventDate && (
						<span>
							первый —{' '}
							<span className='text-foreground font-semibold'>{formatDate(stats.firstEventDate)}</span>
						</span>
					)}
					{stats.lastEventDate && (
						<span>
							последний —{' '}
							<span className='text-foreground font-semibold'>{formatDate(stats.lastEventDate)}</span>
						</span>
					)}
				</div>
			)}
		</section>
	)
}
