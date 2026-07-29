import { Calendar, Megaphone, Radio, Sparkles, Swords, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'

import type { GetSquadEventsQuery } from '@/shared/gql/cms/graphql'
import { getMediaCMS } from '@/utils/get-media-source'

type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]
type EventType = NonNullable<EventDoc['type']>
type Participant = NonNullable<NonNullable<EventDoc['streamersPresent']>[number]>

const EVENT_TYPE_META: Record<
	EventType,
	{
		label: string
		icon: typeof Radio
		accent: string
		placeholder: string
		ghost: string
	}
> = {
	stream: {
		label: 'Стрим',
		icon: Radio,
		accent: 'text-primary',
		placeholder: 'from-primary/30 via-primary/5',
		ghost: 'text-primary/15'
	},
	trip: {
		label: 'Поход',
		icon: Sparkles,
		accent: 'text-accent',
		placeholder: 'from-accent/30 via-accent/5',
		ghost: 'text-accent/15'
	},
	tournament: {
		label: 'Турнир',
		icon: Swords,
		accent: 'text-destructive-light',
		placeholder: 'from-destructive/30 via-destructive/5',
		ghost: 'text-destructive/15'
	},
	collab: {
		label: 'Коллаб',
		icon: Users,
		accent: 'text-accent-2',
		placeholder: 'from-accent-2/30 via-accent-2/5',
		ghost: 'text-accent-2/15'
	},
	announcement: {
		label: 'Анонс',
		icon: Megaphone,
		accent: 'text-overlay-fg',
		placeholder: 'from-overlay-fg/15 via-overlay-fg/5',
		ghost: 'text-overlay-fg/10'
	}
}

function dateParts(dateStr: string) {
	const d = new Date(dateStr)
	return {
		day: d.toLocaleDateString('ru-RU', { day: 'numeric' }),
		monthYear: d.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
	}
}

export function SquadEventsTimeline({ events = [] }: { events?: EventDoc[] }) {
	if (events.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<Typography variant='body-3'>У сквада пока нет зафиксированных событий</Typography>
			</div>
		)
	}

	return (
		<div id='timeline' className='relative space-y-6 rounded-2xl p-2 md:p-4'>
			<header className='mb-2 flex items-center gap-3'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<Radio className='h-5 w-5' />
				</div>
				<div>
					<Typography tag='h2' variant='title-3'>
						События сквада
					</Typography>
					<Typography variant='body-3'>{events.length} записей</Typography>
				</div>
			</header>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{events.map(event => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	)
}

function EventCard({ event }: { event: EventDoc }) {
	const meta = EVENT_TYPE_META[event.type ?? 'stream']
	const Icon = meta.icon
	const { day, monthYear } = dateParts(event.date)
	const participants = (event.streamersPresent ?? []).filter((p): p is Participant => p != null)
	const shownAvatars = participants.slice(0, 4)
	const extra = participants.length - shownAvatars.length
	const coverUrl = event.coverImage?.url

	return (
		<article className='border-border/40 hover:border-primary/60 relative flex aspect-video flex-col overflow-hidden rounded-2xl border shadow-md transition-colors'>
			<div className='absolute inset-0'>
				{coverUrl ? (
					<Image
						src={getMediaCMS(coverUrl)}
						alt={event.title}
						fill
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
						className='object-cover'
					/>
				) : (
					<div
						className={`flex h-full w-full items-center justify-center bg-linear-to-br pb-24 ${meta.placeholder} to-overlay-bg/40`}
					>
						<Icon className={`h-24 w-24 ${meta.ghost}`} />
					</div>
				)}
			</div>
			<div className='from-overlay-bg/10 via-overlay-bg/10 to-overlay-bg/15 absolute inset-0 z-10 bg-linear-to-t' />

			<div className='relative z-20 flex flex-1 flex-col p-3'>
				<div className='border-primary/25 bg-overlay-bg/80 flex items-center gap-1.5 self-start rounded-lg border px-2.5 py-1 backdrop-blur-md'>
					<Icon className={`h-3.5 w-3.5 ${meta.accent}`} />
					<span className={`text-[10px] font-black tracking-[0.15em] uppercase ${meta.accent}`}>
						{meta.label}
					</span>
				</div>

				<div className='mt-auto space-y-1.5 pt-2'>
					<Typography
						tag='h3'
						variant='title-5'
						className='text-overlay-fg line-clamp-1 text-xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
					>
						{event.title}
					</Typography>

					<div className='flex items-center gap-1.5 text-xs'>
						<Calendar className={`h-3.5 w-3.5 ${meta.accent}`} />
						<span className={`font-black tabular-nums ${meta.accent}`}>{day}</span>
						<Typography variant='body-3' tag='span' className='text-overlay-fg/60 tracking-wide'>
							{monthYear}
						</Typography>
					</div>

					{event.description && (
						<Typography variant='body-3' className='text-overlay-fg/70 line-clamp-1'>
							{event.description}
						</Typography>
					)}

					{participants.length > 0 && (
						<div className='border-primary/25 bg-overlay-bg/80 flex items-center gap-2 rounded-lg border px-2.5 py-1.5 backdrop-blur-md'>
							<div className='flex shrink-0 -space-x-2'>
								{shownAvatars.map(p =>
									p.avatar?.url ? (
										<div
											key={p.id}
											title={p.name}
											className='ring-primary/40 relative h-6 w-6 overflow-hidden rounded-full ring-2'
										>
											<Image
												src={getMediaCMS(p.avatar.url)}
												alt={p.name}
												fill
												sizes='24px'
												className='object-cover'
											/>
										</div>
									) : (
										<div
											key={p.id}
											title={p.name}
											className='bg-primary/20 text-overlay-fg ring-primary/40 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold ring-2'
										>
											{p.name.charAt(0).toUpperCase()}
										</div>
									)
								)}
								{extra > 0 && (
									<div className='bg-primary/20 text-overlay-fg ring-primary/40 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ring-2'>
										+{extra}
									</div>
								)}
							</div>
							<span className='line-clamp-1 text-[11px]'>
								{participants.map((p, i) => (
									<span key={p.id}>
										<Link
											href={`/streamers/${p.slug}`}
											className='hover:text-primary text-overlay-fg/90 font-semibold transition-colors'
										>
											{p.name}
										</Link>
										{i < participants.length - 1 && <span className='text-overlay-fg/30'>, </span>}
									</span>
								))}
							</span>
						</div>
					)}
				</div>
			</div>
		</article>
	)
}
