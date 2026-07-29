// src/components/blocks/universal/EventTimelineBlock.tsx
'use client'

import { AlertTriangle, Calendar, Quote } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/components/lib/utils'

import { CATEGORIES, EVENT_LAYOUT_STYLES, type EventLayout } from '../../lib/eventLayouts'
import { YoutubeEmbedBlock } from '../universal/YoutubeEmbedBlock'

import type { GetStreamerGridsQuery } from '@/shared/gql/cms/graphql'
import { formatDate } from '@/utils/format-date'

type StreamGridDoc = NonNullable<GetStreamerGridsQuery['StreamGrids']>['docs'][number]
type GridEvent = NonNullable<StreamGridDoc['events']>['docs'][number]
type ContentBlock = NonNullable<GridEvent['contentBlocks']>[number]

type EventTimelineProps = {
	title?: string | null
	type?: string | null
	cover?: StreamGridDoc['cover']
	events?: GridEvent[]
}

const TONE_CLASSES = {
	primary: 'bg-primary/10 text-primary border-primary/30',
	accent: 'bg-accent/10 text-accent border-accent/30',
	destructive: 'bg-destructive/10 text-destructive border-destructive/30',
	foreground: 'bg-foreground/10 text-foreground border-foreground/30'
} as const

const EVENT_TYPE_LABELS: Record<string, string> = {
	stream: 'Стрим',
	trip: 'Поездка',
	tournament: 'Турнир',
	collab: 'Коллаб',
	announcement: 'Анонс'
}

const BASE_BADGE =
	'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase'

function TypeBadge({ type }: { type?: string | null }) {
	if (!type) return null
	const meta = CATEGORIES.find(c => c.key === type)
	if (!meta || meta.key === 'all' || meta.key === 'events') return null
	const Icon = meta.icon

	return (
		<span className={cn(BASE_BADGE, TONE_CLASSES[meta.tone as keyof typeof TONE_CLASSES])}>
			<Icon className='h-3 w-3' />
			{meta.label}
		</span>
	)
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
	switch (block.blockType) {
		case 'eventYoutube':
			return <YoutubeEmbedBlock url={block.url ?? ''} caption={block.caption} compact />

		case 'eventQuote':
			return (
				<blockquote className='relative mt-4 py-2 pl-5'>
					<div className='from-primary to-primary/40 absolute top-1 bottom-1 left-0 w-0.5 rounded-full bg-gradient-to-b' />
					<Quote className='text-primary/50 absolute top-0 left-1 h-3.5 w-3.5' />
					<p className='text-foreground/90 pl-6 text-sm leading-relaxed italic'>{block.text}</p>
					{block.author && (
						<footer className='text-muted-foreground mt-1.5 pl-6 text-xs'>— {block.author}</footer>
					)}
				</blockquote>
			)

		case 'eventReport':
			return (
				<div className='border-destructive/20 bg-destructive/5 mt-4 rounded-lg border p-3'>
					{block.title && (
						<p className='text-destructive/80 flex items-center gap-2 text-xs font-bold tracking-wider uppercase'>
							<AlertTriangle className='h-3 w-3' />
							{block.title}
						</p>
					)}
				</div>
			)

		default:
			return null
	}
}

export function EventTimelineBlock({ title, type, cover, events }: EventTimelineProps) {
	if (!events?.length) return null

	return (
		<section className='w-full'>
			{cover?.url && (
				<div className='border-border/50 relative mb-5 aspect-[21/9] w-full overflow-hidden rounded-2xl border'>
					<Image
						src={cover.url}
						alt={cover.alt || title || 'cover'}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 800px'
					/>
					<div
						className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'
						aria-hidden
					/>
				</div>
			)}

			<div className='mb-6 flex flex-wrap items-center gap-3'>
				<TypeBadge type={type} />
				{title && <h2 className='text-2xl font-black tracking-tight sm:text-3xl'>{title}</h2>}
				<span className='text-muted-foreground text-xs'>
					{events.length} {events.length === 1 ? 'эфир' : 'эфиров'}
				</span>
			</div>

			<div className='relative'>
				<div className='from-border/80 via-border/40 absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b to-transparent sm:left-[9px]' />

				<div className='space-y-3 pl-8 sm:pl-10'>
					{events.map(event => {
						const layout = (event.eventUiConfig?.layoutTemplate ?? 'clean-stream') as EventLayout
						const ls = EVENT_LAYOUT_STYLES[layout] ?? EVENT_LAYOUT_STYLES['clean-stream']

						return (
							<div key={event.id} className='group relative'>
								<div
									className={cn(
										'timeline-dot border-background absolute top-5 -left-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-gradient-to-br transition-all duration-300 group-hover:scale-125 sm:-left-10 sm:h-4 sm:w-4',
										ls.dot
									)}
								>
									<div className='bg-background h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2' />
								</div>

								<div className={cn('relative overflow-hidden p-4 sm:p-5', ls.card)}>
									<div
										className={cn(
											'pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60',
											ls.accent
										)}
									/>

									<div className='relative mb-3 flex flex-wrap items-center justify-between gap-2'>
										<div className='text-muted-foreground flex items-center gap-2'>
											<Calendar className='h-3.5 w-3.5' />
											<time className='text-xs'>{formatDate(event.date)}</time>
										</div>

										<span
											className={cn(
												BASE_BADGE,
												ls.badge,
												layout === 'retro-marathon'
													? 'border-border/60 text-foreground/70'
													: layout === 'chaos-incident'
														? 'border-destructive/30 bg-destructive/10 text-destructive'
														: layout === 'brutal-alert'
															? 'border-foreground/60 text-foreground'
															: 'border-primary/30 bg-primary/10 text-primary'
											)}
										>
											{EVENT_TYPE_LABELS[event.type ?? ''] ?? event.type}
										</span>
									</div>

									<h3 className='relative text-base leading-snug font-bold sm:text-lg'>
										{event.title}
									</h3>

									{event.description && (
										<p className='text-muted-foreground relative mt-2 text-sm leading-relaxed'>
											{event.description}
										</p>
									)}

									{event.contentBlocks && event.contentBlocks.length > 0 && (
										<div className='relative mt-4 space-y-4'>
											{event.contentBlocks.map((block, i) => (
												<ContentBlockRenderer key={block.id ?? i} block={block} />
											))}
										</div>
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
