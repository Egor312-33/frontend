import { BarChart3, Sparkles } from 'lucide-react'

import type { CategoryKey } from '../lib/eventLayouts'

import { StatRow } from './StatRow'
import type { Event } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

export function StatsTabView({ counts, events }: { counts: Record<CategoryKey, number>; events: Event[] }) {
	return (
		<div className='space-y-6'>
			<div className='border-border/50 from-card/80 to-card/40 relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 backdrop-blur-sm'>
				<div className='bg-primary/20 pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl' />

				<div className='relative'>
					<div className='mb-4 flex items-center gap-2'>
						<div className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
							<BarChart3 className='h-4 w-4' />
						</div>

						<h3 className='text-lg font-bold'>Статистика</h3>
					</div>

					<div className='space-y-2.5'>
						<StatRow label='Всего эфиров' value={counts.all} highlight />

						<StatRow label='События' value={counts.events} />

						<StatRow label='Марафоны' value={counts.marathon} />

						<StatRow label='Турниры' value={counts.tournament} />

						<StatRow label='Серии' value={counts.series} />

						<StatRow label='Коллабы' value={counts.collab} />

						<StatRow label='Фестивали' value={counts.festival} />
					</div>
				</div>
			</div>

			<div className='border-border/50 bg-card/60 rounded-2xl border p-6 backdrop-blur-sm'>
				<div className='mb-4 flex items-center gap-2'>
					<div className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
						<Sparkles className='h-4 w-4' />
					</div>

					<h3 className='text-lg font-bold'>Последние эфиры</h3>
				</div>

				<div className='space-y-3'>
					{events.map(event => (
						<div
							key={event.id}
							className='group border-border/30 hover:border-primary/30 relative border-b pb-3 transition-colors last:border-0 last:pb-0'
						>
							<time className='text-muted-foreground/70 mb-1 block text-[10px] tracking-wider uppercase'>
								{formatDate(event.date)}
							</time>

							<p className='group-hover:text-primary line-clamp-2 text-sm leading-snug font-medium transition-colors'>
								{event.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
