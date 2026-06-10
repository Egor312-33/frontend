'use client'

import { cva } from 'class-variance-authority'
import { AlertTriangle, Calendar, Quote } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/components/lib/utils'

import { CATEGORIES, EVENT_LAYOUT_STYLES, type EventLayout } from '../../lib/eventLayouts'

import { getProfileTheme } from './getProfileTheme'
import type { Event, Media } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

type ContentBlock = NonNullable<Event['contentBlocks']>[number]

type EventTimelineProps = {
	title?: string | null
	type?: string | null
	cover?: Media | number | null
	events: Event[]
	theme?: string
	vibeAccent?: string | null
}

const typeBadge = cva(
	'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase',
	{
		variants: {
			tone: {
				primary: 'bg-primary/10 text-primary border-primary/30',
				accent: 'bg-accent/10 text-accent border-accent/30',
				destructive: 'bg-destructive/10 text-destructive border-destructive/30',
				foreground: 'bg-foreground/10 text-foreground border-foreground/30'
			} as const
		},
		defaultVariants: { tone: 'primary' }
	}
)

function TypeBadge({ type }: { type?: string | null }) {
	if (!type) return null
	const meta = CATEGORIES.find(c => c.key === type)
	if (!meta) return null
	if (meta.key === 'all' || meta.key === 'events') return null
	const Icon = meta.icon

	return (
		<span className={typeBadge({ tone: meta.tone })}>
			<Icon className='h-3 w-3' />
			{meta.label}
		</span>
	)
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
	switch (block.blockType) {
		case 'eventYoutube': {
			const videoId = block.url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1]
			if (!videoId) return null
			return (
				<div className='border-border/50 bg-card/50 mt-4 overflow-hidden rounded-xl border'>
					<div className='relative aspect-video'>
						<iframe
							src={`https://www.youtube.com/embed/${videoId}`}
							className='absolute inset-0 h-full w-full'
							allowFullScreen
						/>
					</div>
					{block.caption && (
						<div className='border-border/50 bg-muted/30 border-t px-4 py-3'>
							<p className='text-muted-foreground text-sm'>{block.caption}</p>
						</div>
					)}
				</div>
			)
		}

		case 'eventQuote':
			return (
				<blockquote className='relative mt-4 py-2 pl-5'>
					<div className='from-primary to-primary/40 absolute top-1 bottom-1 left-0 w-0.5 rounded-full bg-linear-to-b' />
					<Quote className='text-primary/50 absolute top-0 left-1 h-3.5 w-3.5' />
					<p className='text-foreground/90 pl-6 text-sm leading-relaxed italic'>{block.text}</p>
					{block.author && (
						<footer className='text-muted-foreground mt-1.5 pl-6 text-xs'>— {block.author}</footer>
					)}
				</blockquote>
			)

		case 'eventReport':
			return (
				<div className='bg-muted/50 border-border/30 mt-4 rounded-lg border p-3'>
					{block.title && (
						<p className='text-muted-foreground flex items-center gap-2 text-xs font-bold tracking-wider uppercase'>
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

export function EventTimelineBlock({ title, type, cover, events, theme = 'archive', vibeAccent }: EventTimelineProps) {
	if (!events.length) return null

	const ui = getProfileTheme(theme)

	const accentVars = React.useMemo<React.CSSProperties>(() => {
		if (!vibeAccent) return {}
		if (vibeAccent.startsWith('#')) {
			return { ['--vibe-accent' as any]: vibeAccent }
		}
		return { ['--vibe-accent' as any]: `hsl(${vibeAccent})` }
	}, [vibeAccent])

	return (
		<section style={accentVars} className='w-full'>
			{cover && (
				<div className='border-border/50 relative mb-5 aspect-21/9 w-full overflow-hidden rounded-2xl border'>
					<Image
						src={cover.url ?? ''}
						alt={cover.alt || title || 'cover'}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 800px'
					/>
					<div
						className='pointer-events-none absolute inset-0'
						style={{
							background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)'
						}}
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
				<div
					className={cn('absolute top-0 bottom-0 left-1.75 w-px rounded-full sm:left-2.25', ui.timeline.line)}
				/>
				<div className='space-y-6 pl-8 sm:space-y-8 sm:pl-10'>
					{events.map(event => {
						const layout = (event.eventUiConfig?.layoutTemplate ?? 'clean-stream') as EventLayout
						const ls = EVENT_LAYOUT_STYLES[layout] ?? EVENT_LAYOUT_STYLES['clean-stream']

						return (
							<div key={event.id} className='group relative'>
								<div
									className={cn(
										'border-background absolute top-6 -left-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-linear-to-br transition-all duration-300 group-hover:scale-125 sm:-left-10 sm:h-4 sm:w-4',
										ls.dot
									)}
									style={vibeAccent ? { boxShadow: `0 0 0 2px var(--vibe-accent)` } : undefined}
								>
									<div className='bg-background h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2' />
								</div>

								<div className={cn('relative overflow-hidden p-4 sm:p-5', ls.card, ui.timeline.card)}>
									<div
										className={cn(
											'pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-linear-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60',
											ls.accent
										)}
									/>

									<div className='relative mb-3 flex flex-wrap items-center justify-between gap-3'>
										<div className='text-muted-foreground flex items-center gap-2'>
											<Calendar className='h-3.5 w-3.5' />
											<time className='text-xs'>{formatDate(event.date)}</time>
										</div>

										<span
											className={cn(
												'font-bold tracking-wider uppercase',
												ls.badge,
												layout === 'retro-marathon'
													? 'border-border/60 text-foreground/80'
													: 'bg-primary/10 text-primary border-primary/30 border'
											)}
										>
											{event.type}
										</span>
									</div>

									<h3 className='relative mb-3 text-base leading-snug font-bold sm:text-lg'>
										{event.title}
									</h3>

									{event.contentBlocks && event.contentBlocks.length > 0 && (
										<div className='relative mt-4 space-y-4'>
											{event.contentBlocks.map((block, i) => (
												<ContentBlockRenderer key={i} block={block} />
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
