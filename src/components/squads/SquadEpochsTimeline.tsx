import { Calendar, Crown, Sparkles, Tag, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '../lib/utils'

import type { Epoch, Media, Event as PayloadEvent } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

type VibeConfig = {
	label: string
	border: string
	borderHover: string
	badge: string
	texture: string
	corner: string
	accentText: string
	accentIcon: string
	shadow: string
}
type EpochVibe = NonNullable<Epoch['accentColor']>
const EPOCH_VIBES = {
	default: {
		label: 'Классическая',
		border: 'border-primary/30',
		borderHover: 'group-hover:border-primary/50',
		badge: 'bg-primary/15 text-primary border-primary/30',
		texture: '/textures/epoch-default.webp',
		corner: 'border-primary/40',
		accentText: 'text-primary',
		accentIcon: 'text-primary',
		shadow: 'shadow-primary/10'
	},
	legendary: {
		label: 'Легендарная',
		border: 'border-amber-500/50',
		borderHover: 'group-hover:border-amber-400',
		badge: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
		texture: '/images/textures/epoch-legendary.webp',
		corner: 'border-amber-500/60',
		accentText: 'text-amber-300',
		accentIcon: 'text-amber-400',
		shadow: 'shadow-amber-500/30'
	},
	neon: {
		label: 'Активная',
		border: 'border-lime-400/50',
		borderHover: 'group-hover:border-lime-400',
		badge: 'bg-lime-400/20 text-lime-300 border-lime-400/50',
		texture: '/images/textures/epoch-neon.webp',
		corner: 'border-lime-400/60',
		accentText: 'text-lime-300',
		accentIcon: 'text-lime-400',
		shadow: 'shadow-lime-400/30'
	},
	crimson: {
		label: 'Драматичная',
		border: 'border-rose-500/50',
		borderHover: 'group-hover:border-rose-400',
		badge: 'bg-rose-500/20 text-rose-300 border-rose-500/50',
		texture: '/images/textures/epoch-crimson.webp',
		corner: 'border-rose-500/60',
		accentText: 'text-rose-300',
		accentIcon: 'text-rose-400',
		shadow: 'shadow-rose-500/30'
	}
} satisfies Record<EpochVibe, VibeConfig>

interface EpochCardData extends Omit<Epoch, 'coverImage' | 'highlightEvent' | 'participants' | 'events'> {
	coverImage?: Media | null
	highlightEvent?: PayloadEvent | null
	participants?: { totalDocs?: number }
	events?: { totalDocs?: number }
}

export function SquadEpochsTimeline({ epochs }: { epochs: EpochCardData[] }) {
	if (epochs.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<p className='text-muted-foreground text-sm'>У сквада пока нет эпох</p>
			</div>
		)
	}

	return (
		<div className='space-y-8'>
			<header className='flex items-center gap-3'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<Tag className='h-5 w-5' />
				</div>
				<div>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>Эпохи сквада</h2>
					<span className='text-muted-foreground text-sm'>{epochs.length} периодов</span>
				</div>
			</header>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{epochs.map(epoch => (
					<EpochCard key={epoch.id} epoch={epoch} />
				))}
			</div>
		</div>
	)
}

function EpochCard({ epoch }: { epoch: EpochCardData }) {
	const coverUrl = epoch.coverImage?.url
	const vibe = EPOCH_VIBES[epoch.accentColor]
	const eventCount = epoch.events?.totalDocs ?? 0
	const participantCount = epoch.participants?.totalDocs ?? 0

	return (
		<div
			className={cn(
				'group relative flex flex-col overflow-hidden rounded-2xl border',
				vibe.border,
				vibe.borderHover,
				vibe.shadow,
				'transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl'
			)}
			style={{ aspectRatio: '3/3.5' }}
		>
			{/* Верхняя часть: картинка эпохи — 55% высоты, чёткая граница */}
			<div className='relative z-[1] h-[55%] w-full overflow-hidden'>
				{coverUrl ? (
					<Image
						src={coverUrl}
						alt={epoch.title}
						fill
						className='object-cover transition-transform duration-1000 group-hover:scale-105'
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
					/>
				) : (
					<div className='flex h-full w-full items-center justify-center bg-black/40'>
						<span className='text-muted-foreground text-xs'>Нет обложки</span>
					</div>
				)}
			</div>

			{/* Чёткая граница между картинкой и контентом */}
			<div className={cn('h-px w-full', vibe.border.replace('/30', '/50').replace('/50', '/60'))} />

			{/* Нижняя часть: тёмный фон + текстура + контент */}
			<div className='relative z-0 flex flex-1 flex-col justify-end p-5'>
				{/* Фон текстуры за контентом */}
				<div className='absolute inset-0 z-[-1]'>
					<Image
						src={vibe.texture}
						alt=''
						fill
						className='object-cover opacity-60'
						priority={false}
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
					/>
				</div>

				{/* Тёмный оверлей для читаемости текста */}
				<div className='absolute inset-0 z-[-1] bg-black/70' />

				<div className='mb-3 flex flex-wrap items-center gap-2'>
					<span
						className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md ${vibe.badge}`}
					>
						{vibe.label}
					</span>

					{epoch.isFeatured && (
						<span className='inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-black/40 px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-md'>
							<Crown className='h-3 w-3' />
						</span>
					)}

					{eventCount > 0 && (
						<span className='text-foreground/70 border-border/30 inline-flex items-center gap-1 rounded-md border bg-black/40 px-2 py-0.5 text-[10px] font-bold backdrop-blur-md'>
							<Sparkles className='h-3 w-3' />
							{eventCount}
						</span>
					)}
				</div>

				<h3 className='text-foreground mb-1 text-xl font-bold tracking-tight'>{epoch.title}</h3>

				{epoch.summary && (
					<p className='text-muted-foreground mb-3 line-clamp-2 text-sm leading-relaxed'>{epoch.summary}</p>
				)}

				<div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-xs'>
					<span className='text-muted-foreground flex items-center gap-1.5'>
						<Calendar className={`h-3.5 w-3.5 ${vibe.accentIcon}`} />
						<span>
							{formatDate(epoch.dateStart)} —{' '}
							{epoch.dateEnd ? (
								formatDate(epoch.dateEnd)
							) : (
								<span className={`${vibe.accentText} font-semibold`}>по сей день</span>
							)}
						</span>
					</span>

					{participantCount > 0 && (
						<span className='text-muted-foreground flex items-center gap-1.5'>
							<Users className={`h-3.5 w-3.5 ${vibe.accentIcon}`} />
							<span>{participantCount}</span>
						</span>
					)}
				</div>

				{epoch.highlightEvent && (
					<Link
						href={`/events/${epoch.highlightEvent.id}`}
						className={`${vibe.accentText} mt-3 inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2 hover:brightness-125`}
					>
						Ключевое событие <span className='text-lg leading-none'>→</span>
					</Link>
				)}
			</div>

			{/* Угловые рамки — поверх всего */}
			<div className={cn('absolute top-3 left-3 z-20 h-6 w-6 border-t border-l', vibe.corner)} />
			<div className={cn('absolute top-3 right-3 z-20 h-6 w-6 border-t border-r', vibe.corner)} />
		</div>
	)
}
