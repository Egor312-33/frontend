'use client'

import { motion } from 'framer-motion'
import { Activity, BarChart3, Radar, TrendingUp } from 'lucide-react'
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	RadarChart,
	Radar as ReRadar,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import type { SquadEventForView } from '@/types/squad'

import { formatDate } from '@/utils/format-date'

type SquadChartsProps = {
	events: SquadEventForView[]
	epochsCount: number
	membersCount: number
	currentMembersCount: number
}

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } })
}

export function SquadCharts({ events, epochsCount, membersCount, currentMembersCount }: SquadChartsProps) {
	const timelineData = (() => {
		const map = new Map<string, number>()
		for (const e of events) {
			const month = e.date.slice(0, 7)
			map.set(month, (map.get(month) || 0) + 1)
		}
		const sorted = [...map.entries()].sort()
		return sorted.map(([month, count]) => ({
			month: formatDate(month),
			events: count
		}))
	})()

	// Event types
	const typeData = (() => {
		const counts: Record<string, number> = {}
		for (const e of events) {
			counts[e.type] = (counts[e.type] || 0) + 1
		}
		return Object.entries(counts).map(([type, count]) => ({
			type,
			count,
			label:
				type === 'stream'
					? 'Стримы'
					: type === 'trip'
						? 'Походы'
						: type === 'tournament'
							? 'Турниры'
							: type === 'collab'
								? 'Коллабы'
								: 'Анонсы'
		}))
	})()

	// Radar data
	const radarData = [
		{ metric: 'Активность', value: Math.min(events.length * 5, 100), fullMark: 100 },
		{ metric: 'Участники', value: Math.min(membersCount * 10, 100), fullMark: 100 },
		{ metric: 'Эпохи', value: Math.min(epochsCount * 20, 100), fullMark: 100 },
		{ metric: 'Текущие', value: Math.min(currentMembersCount * 15, 100), fullMark: 100 },
		{ metric: 'События', value: Math.min(events.length * 3, 100), fullMark: 100 }
	]

	const tooltipStyle = {
		backgroundColor: 'var(--card)',
		border: '1px solid var(--border)',
		borderRadius: 'var(--radius)',
		color: 'var(--card-foreground)',
		fontSize: '13px',
		boxShadow: 'var(--shadow-primary-sm)'
	}

	return (
		<div className='space-y-6'>
			<motion.header
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				className='flex items-center gap-3'
			>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<BarChart3 className='h-5 w-5' />
				</div>
				<div>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>Статистика сквада</h2>
					<span className='text-muted-foreground text-sm'>Аналитика активности</span>
				</div>
			</motion.header>

			<div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
				<motion.div
					custom={0}
					variants={cardVariants}
					initial='hidden'
					animate='visible'
					className='border-border/50 from-card/90 to-card/50 rounded-2xl border bg-linear-to-br p-5 backdrop-blur-sm lg:col-span-2'
				>
					<div className='mb-4 flex items-center gap-2'>
						<TrendingUp className='text-primary h-4 w-4' />
						<h3 className='text-foreground text-sm font-bold tracking-wide'>Активность по времени</h3>
					</div>
					<div className='h-64 w-full'>
						<ResponsiveContainer width='100%' height='100%'>
							<AreaChart data={timelineData}>
								<defs>
									<linearGradient id='eventsGradient' x1='0' y1='0' x2='0' y2='1'>
										<stop offset='5%' stopColor='var(--primary)' stopOpacity={0.3} />
										<stop offset='95%' stopColor='var(--primary)' stopOpacity={0} />
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray='3 3' stroke='var(--border)' opacity={0.5} />
								<XAxis
									dataKey='month'
									stroke='var(--muted-foreground)'
									fontSize={12}
									tickLine={false}
								/>
								<YAxis
									stroke='var(--muted-foreground)'
									fontSize={12}
									tickLine={false}
									allowDecimals={false}
								/>
								<Tooltip contentStyle={tooltipStyle} />
								<Area
									type='monotone'
									dataKey='events'
									stroke='var(--primary)'
									fill='url(#eventsGradient)'
									strokeWidth={2}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</motion.div>

				{/* Bar Chart */}
				<motion.div
					custom={1}
					variants={cardVariants}
					initial='hidden'
					animate='visible'
					className='border-border/50 from-card/90 to-card/50 rounded-2xl border bg-linear-to-br p-5 backdrop-blur-sm'
				>
					<div className='mb-4 flex items-center gap-2'>
						<Activity className='text-accent h-4 w-4' />
						<h3 className='text-foreground text-sm font-bold tracking-wide'>Типы событий</h3>
					</div>
					<div className='h-64 w-full'>
						<ResponsiveContainer width='100%' height='100%'>
							<BarChart data={typeData}>
								<CartesianGrid strokeDasharray='3 3' stroke='var(--border)' opacity={0.5} />
								<XAxis
									dataKey='label'
									stroke='var(--muted-foreground)'
									fontSize={11}
									tickLine={false}
								/>
								<YAxis
									stroke='var(--muted-foreground)'
									fontSize={12}
									tickLine={false}
									allowDecimals={false}
								/>
								<Tooltip contentStyle={tooltipStyle} />
								<Bar dataKey='count' fill='var(--accent)' radius={[6, 6, 0, 0]} />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</motion.div>

				{/* Radar Chart */}
				<motion.div
					custom={2}
					variants={cardVariants}
					initial='hidden'
					animate='visible'
					className='border-border/50 from-card/90 to-card/50 rounded-2xl border bg-linear-to-br p-5 backdrop-blur-sm'
				>
					<div className='mb-4 flex items-center gap-2'>
						<Radar className='text-primary h-4 w-4' />
						<h3 className='text-foreground text-sm font-bold tracking-wide'>Показатели сквада</h3>
					</div>
					<div className='h-64 w-full'>
						<ResponsiveContainer width='100%' height='100%'>
							<RadarChart data={radarData}>
								<PolarGrid stroke='var(--border)' />
								<PolarAngleAxis dataKey='metric' stroke='var(--muted-foreground)' fontSize={11} />
								<PolarRadiusAxis stroke='var(--border)' fontSize={10} />
								<ReRadar
									name='Сквад'
									dataKey='value'
									stroke='var(--primary)'
									fill='var(--primary)'
									fillOpacity={0.2}
									strokeWidth={2}
								/>
								<Tooltip contentStyle={tooltipStyle} />
							</RadarChart>
						</ResponsiveContainer>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
