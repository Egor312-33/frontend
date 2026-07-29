'use client'

import { Calendar, Layers, Megaphone, Mic2, Trophy, Users, Zap } from 'lucide-react'
import { useMemo, useState } from 'react'

import { cn } from '@/components/lib/utils'

import { EventCard } from './EventCard'
import type { Event } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

const EVENT_TYPES = [
	{ key: 'all', label: 'Все' },
	{ key: 'stream', label: 'Стримы' },
	{ key: 'trip', label: 'Поездки' },
	{ key: 'tournament', label: 'Турниры' },
	{ key: 'collab', label: 'Коллабы' },
	{ key: 'announcement', label: 'Анонсы' }
] as const

type FilterKey = (typeof EVENT_TYPES)[number]['key']

type EventsTabProps = {
	events: Event[]
}

export function EventsTab({ events }: EventsTabProps) {
	const [active, setActive] = useState<FilterKey>('all')

	const filtered = useMemo(() => {
		if (active === 'all') return events
		return events.filter(e => e.type === active)
	}, [events, active])

	const counts = useMemo(() => {
		const result: Record<string, number> = { all: events.length }
		for (const e of events) {
			result[e.type] = (result[e.type] ?? 0) + 1
		}
		return result
	}, [events])

	return (
		<div className='space-y-8'>
			{/* Фильтр */}
			<div className='flex flex-wrap gap-2'>
				{EVENT_TYPES.map(t => (
					<button
						key={t.key}
						onClick={() => setActive(t.key)}
						className={cn(
							'inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-200',
							active === t.key
								? 'border-primary/50 bg-primary/10 text-primary'
								: 'border-border/50 bg-card/50 text-muted-foreground hover:border-border hover:text-foreground'
						)}
					>
						{t.label}
						<span
							className={cn(
								'rounded-md px-1.5 py-0.5 text-[10px] font-bold',
								active === t.key ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
							)}
						>
							{counts[t.key] ?? 0}
						</span>
					</button>
				))}
			</div>

			{/* Грид */}
			{filtered.length === 0 ? (
				<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-16 text-center'>
					<p className='text-muted-foreground text-sm'>В этой категории пока нет событий</p>
				</div>
			) : (
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{filtered.map(event => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			)}
		</div>
	)
}
