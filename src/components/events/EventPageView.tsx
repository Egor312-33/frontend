import { AlertTriangle, ArrowLeft, Calendar, Clock, Users } from 'lucide-react'
import Link from 'next/link'

import { QuoteBlock } from '@/components/blocks/universal/QuoteBlock'
import { YoutubeEmbedBlock } from '@/components/blocks/universal/YoutubeEmbedBlock'
import { cn } from '@/components/lib/utils'

import type { Epoch, Event, StreamGrid, Streamer } from '@/payload-types'
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

function getFirstYoutubeId(event: Event) {
	const block = event.contentBlocks?.find(b => b.blockType === 'eventYoutube')
	if (!block || block.blockType !== 'eventYoutube') return null
	return block.url?.match(/(?:youtu\.be\/|watch\?v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? null
}

type EventPageViewProps = {
	event: Event
}

export function EventPageView({ event }: EventPageViewProps) {
	const epoch = typeof event.epoch === 'object' ? (event.epoch as Epoch) : null
	const grid = event.grid && typeof event.grid === 'object' ? (event.grid as StreamGrid) : null
	const streamers = (event.streamersPresent ?? []).filter((s): s is Streamer => typeof s === 'object')
	const videoId = getFirstYoutubeId(event)

	return (
		<div className='space-y-0'>
			{/* Герой */}
			<div className='relative overflow-hidden rounded-2xl'>
				{/* Фон — превью видео или градиент */}
				<div className='absolute inset-0'>
					{videoId ? (
						<>
							<img
								src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
								alt={event.title}
								className='h-full w-full object-cover'
								onError={e => {
									;(e.target as HTMLImageElement).src =
										`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
								}}
							/>
							<div className='from-background via-background/80 to-background/30 absolute inset-0 bg-gradient-to-t' />
						</>
					) : (
						<div className='from-primary/5 via-background to-accent/5 h-full w-full bg-gradient-to-br' />
					)}
				</div>

				{/* Контент поверх */}
				<div className='relative px-6 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-14'>
					{/* Назад */}
					<Link
						href='/events'
						className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm transition-colors'
					>
						<ArrowLeft className='h-4 w-4' />
						Все события
					</Link>

					{/* Мета */}
					<div className='mt-6 flex flex-wrap items-center gap-3'>
						<span
							className={cn(
								'inline-flex items-center rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase',
								EVENT_TYPE_STYLES[event.type] ?? 'bg-muted text-muted-foreground border-border/50'
							)}
						>
							{EVENT_TYPE_LABELS[event.type] ?? event.type}
						</span>

						<div className='text-muted-foreground flex items-center gap-1.5'>
							<Calendar className='h-3.5 w-3.5' />
							<time className='text-sm'>{formatDate(event.date)}</time>
						</div>

						{epoch && (
							<div className='text-muted-foreground flex items-center gap-1.5'>
								<Clock className='h-3.5 w-3.5' />
								<span className='text-sm'>Эпоха «{epoch.title}»</span>
							</div>
						)}
					</div>

					{/* Заголовок */}
					<h1 className='mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl'>{event.title}</h1>

					{event.description && (
						<p className='text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg'>
							{event.description}
						</p>
					)}

					{/* Участники */}
					{streamers.length > 0 && (
						<div className='mt-6 flex flex-wrap items-center gap-2'>
							<Users className='text-muted-foreground h-4 w-4' />
							{streamers.map(s => (
								<Link
									key={s.id}
									href={`/streamers/${s.slug}`}
									className='border-border/60 bg-card/60 hover:border-primary/40 hover:text-primary rounded-lg border px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-all'
								>
									{s.name}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Контент */}
			{event.contentBlocks && event.contentBlocks.length > 0 && (
				<div className='mt-8 space-y-6'>
					{/* Сетка если есть */}
					{grid && (
						<div className='border-border/50 bg-card/50 flex items-center justify-between rounded-xl border px-5 py-4'>
							<div>
								<p className='text-muted-foreground text-xs font-medium tracking-wider uppercase'>
									Часть сетки
								</p>
								<p className='mt-0.5 font-bold'>{grid.title}</p>
							</div>
							<span className='border-border/50 bg-muted text-muted-foreground rounded-lg border px-3 py-1 text-xs'>
								{grid.type}
							</span>
						</div>
					)}

					{event.contentBlocks.map((block, i) => {
						switch (block.blockType) {
							case 'eventYoutube':
								return <YoutubeEmbedBlock key={i} url={block.url} caption={block.caption} />

							case 'eventQuote':
								if (!block.text) return null
								return <QuoteBlock key={i} text={block.text} author={block.author} />

							case 'eventReport':
								return (
									<div
										key={i}
										className='border-destructive/20 bg-destructive/5 rounded-xl border p-5'
									>
										{block.title && (
											<p className='text-destructive flex items-center gap-2 text-xs font-bold tracking-wider uppercase'>
												<AlertTriangle className='h-3.5 w-3.5' />
												{block.title}
											</p>
										)}
									</div>
								)

							default:
								return null
						}
					})}
				</div>
			)}
		</div>
	)
}
