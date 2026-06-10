import { Megaphone, Radio, Sparkles, Swords, Users } from 'lucide-react'
import Link from 'next/link'

import type { SquadEventForView } from '@/types/squad'

import { formatDate } from '@/utils/format-date'

const EVENT_TYPE_META: Record<
	SquadEventForView['type'],
	{
		label: string
		icon: typeof Radio
		border: string
		bg: string
		text: string
	}
> = {
	stream: {
		label: 'Стрим',
		icon: Radio,
		border: 'border-l-primary',
		bg: 'bg-primary/10',
		text: 'text-primary'
	},
	trip: {
		label: 'Поход',
		icon: Sparkles,
		border: 'border-l-accent',
		bg: 'bg-accent/10',
		text: 'text-accent'
	},
	tournament: {
		label: 'Турнир',
		icon: Swords,
		border: 'border-l-destructive',
		bg: 'bg-destructive/10',
		text: 'text-destructive'
	},
	collab: {
		label: 'Коллаб',
		icon: Users,
		border: 'border-l-accent',
		bg: 'bg-accent/10',
		text: 'text-accent'
	},
	announcement: {
		label: 'Анонс',
		icon: Megaphone,
		border: 'border-l-foreground',
		bg: 'bg-foreground/10',
		text: 'text-foreground'
	}
}

const VIBE_BADGE: Record<SquadEventForView['eventVibe'], string> = {
	normal: 'bg-muted/50 text-foreground border-border/30',
	highlight: 'bg-primary/20 text-primary border-primary/40',
	alert: 'bg-destructive/15 text-destructive border-destructive/30',
	muted: 'bg-muted/30 text-muted-foreground border-border/30'
}

export function SquadEventsTimeline({ events }: { events: SquadEventForView[] }) {
	if (events.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<p className='text-muted-foreground text-sm'>У сквада пока нет зафиксированных событий</p>
			</div>
		)
	}
	return (
		<div className='space-y-6'>
			<header className='mb-2 flex items-center gap-3'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<Radio className='h-5 w-5' />
				</div>
				<div>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>События сквада</h2>
					<span className='text-muted-foreground text-sm'>{events.length} записей</span>
				</div>
			</header>

			<ol className='relative space-y-4 pl-6 md:pl-8'>
				{/* Vertical timeline line */}
				<div className='bg-border/50 absolute top-4 bottom-4 left-2.75 w-px md:left-3.75' />

				{events.map(event => {
					const meta = EVENT_TYPE_META[event.type]
					const Icon = meta.icon

					return (
						<li key={event.id} className='relative'>
							{/* Timeline dot */}
							<span
								className={`border-background absolute top-5 -left-6 flex h-3 w-3 items-center justify-center rounded-full border-2 md:top-6 md:-left-8 md:h-3.5 md:w-3.5 ${meta.bg.replace('/10', '/40')}`}
							>
								<span className={`h-1.5 w-1.5 rounded-full ${meta.text.replace('text-', 'bg-')}`} />
							</span>

							<div
								className={`border-border/50 from-card/90 to-card/50 group relative overflow-hidden rounded-2xl border border-l-4 ${meta.border} hover:shadow-primary/5 bg-linear-to-br p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg`}
							>
								{/* Top row: type + date */}
								<div className='mb-3 flex flex-wrap items-center justify-between gap-2'>
									<div className='flex items-center gap-2'>
										<div
											className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-sm ${meta.bg} ${meta.text} border-current/20`}
										>
											<Icon className='h-4 w-4' />
										</div>
										<span className='bg-muted/60 text-muted-foreground border-border/40 rounded-md border px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase'>
											{meta.label}
										</span>
										{event.eventVibe !== 'normal' && (
											<span
												className={`rounded-md border px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase ${VIBE_BADGE[event.eventVibe]}`}
											>
												{event.eventVibe}
											</span>
										)}
									</div>
									<time className='text-muted-foreground/70 text-xs font-medium tracking-wide'>
										{formatDate(event.date)}
									</time>
								</div>

								<h3 className='group-hover:text-primary text-foreground mb-2 text-lg font-bold tracking-tight transition-colors'>
									{event.title}
								</h3>

								{event.description && (
									<p className='text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed'>
										{event.description}
									</p>
								)}

								{event.participants.length > 0 && (
									<div className='border-border/40 bg-muted/30 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border px-3 py-2 text-sm'>
										<span className='text-muted-foreground text-xs font-bold tracking-wider uppercase'>
											Участники
										</span>
										{event.participants.map((p, i) => (
											<span key={p.id} className='inline-flex items-center'>
												<Link
													href={`/streamers/${p.slug}`}
													className='hover:text-primary decoration-primary/30 text-foreground font-medium underline-offset-4 transition-colors hover:underline'
												>
													{p.name}
												</Link>
												{i < event.participants.length - 1 && (
													<span className='text-muted-foreground/30 ml-3'>·</span>
												)}
											</span>
										))}
									</div>
								)}
							</div>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
