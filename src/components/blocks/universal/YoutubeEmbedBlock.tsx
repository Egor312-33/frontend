'use client'

import { Youtube } from 'lucide-react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { cn } from '@/components/lib/utils'

interface YoutubeEmbedBlockProps {
	url: string
	caption?: string | null
	className?: string
	theme?: string
}

function getYoutubeId(url: string) {
	return url.match(/(?:youtu\.be\/|watch\?v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? null
}

const THEME_STYLES = {
	archive: {
		section: '',
		icon: 'text-muted-foreground',
		label: 'text-muted-foreground',
		divider: 'bg-border',
		wrapper: 'rounded-lg border border-border bg-card',
		caption: 'text-sm italic text-muted-foreground',
		labelText: 'Видео',
		corners: false
	},

	creator: {
		section: '',
		icon: 'text-primary',
		label: 'text-primary font-bold',
		divider: 'bg-primary/30',
		wrapper: 'rounded-lg border-2 border-primary bg-card',
		caption: 'text-sm text-muted-foreground',
		labelText: 'Видео',
		corners: false
	},

	esports: {
		section: 'py-12',
		icon: 'text-primary',
		label: 'text-primary font-bold tracking-widest',
		divider: 'bg-primary/20',
		wrapper: 'border border-border-sub bg-card [clip-path:polygon(0_0,97%_0,100%_8%,100%_100%,3%_100%,0_92%)]',
		caption: 'font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground',
		labelText: 'ВИДЕО',
		corners: true
	},

	retro: {
		section: '',
		icon: 'text-foreground',
		label: 'text-foreground bg-secondary px-1 border border-border font-mono',
		divider: 'bg-transparent border-b border-dashed border-border h-0',
		wrapper: 'rounded-none border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--border)]',
		caption: 'font-mono text-[0.7rem] text-muted-foreground bg-secondary p-1 border border-dashed border-border',
		labelText: 'ЗАПИСЬ_ЭФИРА.AVI',
		corners: false
	},

	brutal: {
		section: 'border-b-4 border-foreground py-10',
		icon: 'text-foreground',
		label: 'text-foreground font-black text-xs uppercase tracking-widest',
		divider: 'h-1 bg-foreground',
		wrapper: 'rounded-none border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_var(--foreground)]',
		caption: 'font-black uppercase tracking-tight text-xs text-foreground mt-2',
		labelText: 'ВИДЕО',
		corners: false
	}
} as const

type ThemeKey = keyof typeof THEME_STYLES

export function YoutubeEmbedBlock({ url, caption, className, theme = 'archive' }: YoutubeEmbedBlockProps) {
	if (!url) return null
	const id = getYoutubeId(url)
	if (!id) return null

	const t = THEME_STYLES[theme as ThemeKey] ?? THEME_STYLES['archive']

	return (
		<section className={cn('bg-background relative overflow-hidden px-5 py-8 md:px-12', t.section, className)}>
			<div className='relative mx-auto max-w-3xl'>
				{/* Хедер */}
				<div className='mb-4 flex items-center gap-2'>
					<Youtube className={cn('size-4', t.icon)} strokeWidth={theme === 'brutal' ? 3 : 2.5} />
					<span className={cn('font-mono text-[0.65rem] tracking-[0.2em] uppercase', t.label)}>
						{t.labelText}
					</span>
					<div className={cn('h-px flex-1', t.divider)} />
				</div>

				{/* Плеер */}
				<div className={cn('relative overflow-hidden transition-all', t.wrapper)}>
					{t.corners && (
						<>
							<div className='border-primary pointer-events-none absolute top-2 left-2 z-10 size-5 border-t-2 border-l-2' />
							<div className='border-primary pointer-events-none absolute right-2 bottom-2 z-10 size-5 border-r-2 border-b-2' />
						</>
					)}
					<LiteYouTubeEmbed id={id} title={caption ?? 'Видео'} poster='maxresdefault' />
				</div>

				{/* Подпись */}
				{caption && <p className={cn('mt-3 text-[0.7rem]', t.caption)}>{caption}</p>}
			</div>
		</section>
	)
}
