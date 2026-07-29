'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { Calendar, type LucideIcon, Radio, TrendingUp, UserCheck, UserMinus, Users } from 'lucide-react'
import { useEffect } from 'react'

import { cn } from '../lib/utils'

import { formatDate } from '@/utils/format-date'

export type SquadStatsData = {
	totalMembers: number
	currentMembers: number
	pastMembers: number
	totalEpochs: number
	totalEvents: number
	firstEventDate: string | null
	lastEventDate: string | null
}

const TONE_ICON = {
	primary: 'text-primary',
	accent: 'text-accent',
	foreground: 'text-foreground',
	destructive: 'text-destructive'
} as const

type StatItem = {
	label: string
	key: keyof SquadStatsData
	icon: LucideIcon
	tone: keyof typeof TONE_ICON
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

export function SquadStats({ stats }: { stats: SquadStatsData }) {
	return (
		<div className='flex flex-col gap-2 md:items-end'>
			<div className='flex flex-wrap items-end justify-start gap-x-4 gap-y-2 md:justify-end'>
				{STAT_ITEMS.map((item, i) => {
					const Icon = item.icon
					const value = stats[item.key]

					return (
						<motion.div
							key={item.key}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.05 * i, duration: 0.3 }}
							className='flex min-w-[42px] flex-col items-center gap-0.5'
						>
							<span className='text-muted-foreground text-[9px] font-semibold tracking-wider uppercase md:text-[10px]'>
								{item.label}
							</span>
							<div className='flex items-center gap-1'>
								<Icon className={cn('h-3.5 w-3.5', TONE_ICON[item.tone])} />
								<span className='text-card-foreground text-lg font-black tracking-tight tabular-nums drop-shadow md:text-xl'>
									<AnimatedNumber value={value} />
								</span>
							</div>
						</motion.div>
					)
				})}
			</div>

			{(stats.firstEventDate || stats.lastEventDate) && (
				<div className='text-muted-foreground flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-[11px] md:justify-end'>
					<span className='flex items-center gap-1.5'>
						<TrendingUp className='h-3.5 w-3.5' />
						<span className='font-bold tracking-wider uppercase'>Активность</span>
					</span>
					{stats.firstEventDate && (
						<span>
							первый —{' '}
							<span className='text-card-foreground font-semibold drop-shadow'>
								{formatDate(stats.firstEventDate)}
							</span>
						</span>
					)}
					{stats.lastEventDate && (
						<span>
							последний —{' '}
							<span className='text-card-foreground font-semibold drop-shadow'>
								{formatDate(stats.lastEventDate)}
							</span>
						</span>
					)}
				</div>
			)}
		</div>
	)
}
