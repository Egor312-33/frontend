import { Calendar, Youtube } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/components/lib/utils'

import type { Event } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

const EVENT_TYPE_LABELS: Record<string, string> = {
	stream: 'Стрим',
	trip: 'Поездка',
	tournament: 'Турнир',
	collab: 'Коллаб',
	announcement: 'Анонс'
}

const EVENT_TYPE_STYLES: Record<string, string> = {
	stream: 'bg-primary/10 text-primary border-primary/30',
	trip: 'bg-accent/10 text-accent border-accent/30',
	tournament: 'bg-primary/10 text-primary border-primary/30',
	collab: 'bg-foreground/10 text-foreground border-foreground/30',
	announcement: 'bg-destructive/10 text-destructive border-destructive/30'
}

type EventCardProps = {
	event: Event
}

function getFirstYoutubeId(event: Event) {
	const block = event.contentBlocks?.find(b => b.blockType === 'eventYoutube')
	if (!block || block.blockType !== 'eventYoutube') return null
	return block.url?.match(/(?:youtu\.be\/|watch\?v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? null
}

export function EventCard({ event }: EventCardProps) {
	const videoId = getFirstYoutubeId(event)

	return (
		<Link href={`/events/${event.id}`} className='group block'>
			<article
				className={cn(
					'relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300',
					'border-border/50 bg-card hover:border-primary/30 hover:shadow-[var(--shadow-primary-sm)]'
				)}
			>
				{/* Превью */}
				<div className='bg-muted/50 relative aspect-video w-full overflow-hidden'>
					{videoId ? (
						<>
							<img
								src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
								alt={event.title}
								className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								onError={e => {
									;(e.target as HTMLImageElement).src =
										`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
								}}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
							<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								<div className='bg-primary/90 flex h-12 w-12 items-center justify-center rounded-full shadow-lg'>
									<Youtube className='text-primary-foreground h-5 w-5' />
								</div>
							</div>
						</>
					) : (
						<div className='flex h-full items-center justify-center'>
							<span className='text-muted-foreground/20 text-5xl font-black tracking-tighter'>
								{EVENT_TYPE_LABELS[event.type]?.[0] ?? '?'}
							</span>
						</div>
					)}
				</div>

				{/* Контент */}
				<div className='flex flex-1 flex-col gap-3 p-4'>
					<div className='flex items-center justify-between gap-2'>
						<div className='text-muted-foreground flex items-center gap-1.5'>
							<Calendar className='h-3 w-3' />
							<time className='text-xs'>{formatDate(event.date)}</time>
						</div>
						<span
							className={cn(
								'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase',
								EVENT_TYPE_STYLES[event.type] ?? 'bg-muted text-muted-foreground border-border/50'
							)}
						>
							{EVENT_TYPE_LABELS[event.type] ?? event.type}
						</span>
					</div>

					<h3 className='text-sm leading-snug font-bold'>{event.title}</h3>

					{event.description && (
						<p className='text-muted-foreground line-clamp-2 text-xs leading-relaxed'>
							{event.description}
						</p>
					)}

					{videoId && (
						<div className='mt-auto flex items-center gap-1.5 pt-1'>
							<Youtube className='text-muted-foreground h-3 w-3' />
							<span className='text-muted-foreground text-[10px]'>Есть видео</span>
						</div>
					)}
				</div>
			</article>
		</Link>
	)
}
