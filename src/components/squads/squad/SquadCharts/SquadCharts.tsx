'use client'

import { motion } from 'framer-motion'
import { Activity, BarChart3, Radar as RadarIcon, TrendingUp } from 'lucide-react'
import { type CSSProperties, useMemo } from 'react'
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import type { GetSquadEventsQuery, GetSquadPageQuery } from '@/shared/gql/cms/graphql'
import { formatDate } from '@/utils/format-date'

type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]
type EventType = NonNullable<EventDoc['type']>
type EpochDoc = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['epochs']>['docs'][number]
type CurrentMember = NonNullable<
	NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['currentMembers']
>['docs'][number]
type PastMember = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['pastMembers']>['docs'][number]

const TYPE_LABELS: Record<EventType, string> = {
	stream: 'Стримы',
	trip: 'Походы',
	tournament: 'Турниры',
	collab: 'Коллабы',
	announcement: 'Анонсы'
}

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } })
}

const tooltipStyle: CSSProperties = {
	backgroundColor: 'var(--card)',
	border: '1px solid var(--border)',
	borderRadius: 'var(--radius)',
	color: 'var(--card-foreground)',
	fontSize: '13px',
	boxShadow: 'var(--shadow-primary-sm)'
}

const axisProps = {
	stroke: 'var(--muted-foreground)',
	fontSize: 12,
	tickLine: false
}

const gridProps = {
	strokeDasharray: '3 3',
	stroke: 'var(--border)',
	opacity: 0.5
}

function toRadarScore(count: number, max: number) {
	return Math.min((count / max) * 100, 100)
}

export function SquadCharts({
	events = [],
	epochs = [],
	currentMembers = [],
	pastMembers = []
}: {
	events?: EventDoc[]
	epochs?: EpochDoc[]
	currentMembers?: CurrentMember[]
	pastMembers?: PastMember[]
}) {
	const epochsCount = epochs.length
	const currentMembersCount = currentMembers.length
	const membersCount = currentMembersCount + pastMembers.length

	const timelineData = useMemo(() => {
		const map = new Map<string, number>()
		for (const e of events) {
			const month = String(e.date).slice(0, 7)
			map.set(month, (map.get(month) ?? 0) + 1)
		}
		return [...map.entries()].sort().map(([month, count]) => ({ month: formatDate(month), events: count }))
	}, [events])

	const typeData = useMemo(() => {
		const counts: Partial<Record<EventType, number>> = {}
		for (const e of events) {
			const t = e.type ?? 'stream'
			counts[t] = (counts[t] ?? 0) + 1
		}
		return (Object.entries(counts) as [EventType, number][]).map(([type, count]) => ({
			type,
			count,
			label: TYPE_LABELS[type]
		}))
	}, [events])

	const radarData = useMemo(
		() => [
			{ metric: 'Активность', value: toRadarScore(events.length, 20), fullMark: 100 },
			{ metric: 'Участники', value: toRadarScore(membersCount, 10), fullMark: 100 },
			{ metric: 'Эпохи', value: toRadarScore(epochsCount, 5), fullMark: 100 },
			{ metric: 'Текущие', value: toRadarScore(currentMembersCount, 100 / 15), fullMark: 100 },
			{ metric: 'События', value: toRadarScore(events.length, 100 / 3), fullMark: 100 }
		],
		[events.length, membersCount, epochsCount, currentMembersCount]
	)

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
								<CartesianGrid {...gridProps} />
								<XAxis {...axisProps} dataKey='month' />
								<YAxis {...axisProps} allowDecimals={false} />
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
								<CartesianGrid {...gridProps} />
								<XAxis {...axisProps} dataKey='label' fontSize={11} />
								<YAxis {...axisProps} allowDecimals={false} />
								<Tooltip contentStyle={tooltipStyle} />
								<Bar dataKey='count' fill='var(--accent)' radius={[6, 6, 0, 0]} />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</motion.div>

				<motion.div
					custom={2}
					variants={cardVariants}
					initial='hidden'
					animate='visible'
					className='border-border/50 from-card/90 to-card/50 rounded-2xl border bg-linear-to-br p-5 backdrop-blur-sm'
				>
					<div className='mb-4 flex items-center gap-2'>
						<RadarIcon className='text-primary h-4 w-4' />
						<h3 className='text-foreground text-sm font-bold tracking-wide'>Показатели сквада</h3>
					</div>
					<div className='h-64 w-full'>
						<ResponsiveContainer width='100%' height='100%'>
							<RadarChart data={radarData}>
								<PolarGrid stroke='var(--border)' />
								<PolarAngleAxis dataKey='metric' stroke='var(--muted-foreground)' fontSize={11} />
								<PolarRadiusAxis stroke='var(--border)' fontSize={10} />
								<Radar
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
