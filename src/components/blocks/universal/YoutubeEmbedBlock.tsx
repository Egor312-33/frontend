'use client'

import { Youtube } from 'lucide-react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { cn } from '@/components/lib/utils'

interface YoutubeEmbedBlockProps {
	url: string
	caption?: string | null
	className?: string
	compact?: boolean
}

function getYoutubeId(url: string) {
	return url.match(/(?:youtu\.be\/|watch\?v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? null
}

export function YoutubeEmbedBlock({ url, caption, className, compact = false }: YoutubeEmbedBlockProps) {
	if (!url) return null
	const id = getYoutubeId(url)
	if (!id) return null

	return (
		<div className={cn('mt-4', className)}>
			{/* Хедер */}
			<div className='mb-2 flex items-center gap-2'>
				<Youtube className='text-muted-foreground size-3.5' strokeWidth={2} />
				<span className='text-muted-foreground font-mono text-[0.6rem] tracking-[0.2em] uppercase'>Видео</span>
				<div className='bg-border/40 h-px flex-1' />
			</div>

			{/* Плеер */}
			<div
				className={cn(
					'border-border/50 bg-card overflow-hidden rounded-xl border',
					compact ? 'max-w-[260px]' : 'w-full'
				)}
			>
				<LiteYouTubeEmbed id={id} title={caption ?? 'Видео'} poster='maxresdefault' />

				{caption && (
					<div className='border-border/40 bg-muted/30 border-t px-3 py-2'>
						<p className='text-muted-foreground text-[0.7rem] italic'>{caption}</p>
					</div>
				)}
			</div>
		</div>
	)
}
