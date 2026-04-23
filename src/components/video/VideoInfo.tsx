'use client'

import { Bell, Calendar, Eye, MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

import type { GetPublicVideoBySlugQuery } from '@/shared/gql/graphql'
import { formatDate } from '@/utils/format-date'
import { formatDuration } from '@/utils/format-duration'

// --- Заглушка автора (в запросе нет user) ---
const STUB_AUTHOR = {
	displayName: 'Автор канала',
	avatar: null as string | null,
	subscribers: '12K'
}

interface VideoInfoProps {
	video: GetPublicVideoBySlugQuery['getPublicVideoBySlug']
}

export function VideoInfo({ video }: VideoInfoProps) {
	return (
		<div className='flex flex-col gap-3'>
			{/* Заголовок */}
			<h1 className='text-foreground m-0 text-xl leading-snug font-semibold'>{video.title}</h1>

			{/* Автор + действия */}
			<div className='border-border flex flex-wrap items-center justify-between gap-3 border-y py-3'>
				{/* Автор */}
				<div className='flex items-center gap-3'>
					<div className='bg-secondary ring-primary/30 relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2'>
						{STUB_AUTHOR.avatar ? (
							<Image
								src={STUB_AUTHOR.avatar}
								alt={STUB_AUTHOR.displayName}
								fill
								className='object-cover'
								width={40}
								height={40}
							/>
						) : (
							<div className='text-primary flex h-full w-full items-center justify-center text-base font-bold'>
								{STUB_AUTHOR.displayName[0]}
							</div>
						)}
					</div>
					<div className='flex flex-col'>
						<span className='text-foreground text-sm leading-tight font-semibold'>
							{STUB_AUTHOR.displayName}
						</span>
						<span className='text-muted-foreground text-xs'>{STUB_AUTHOR.subscribers} подписчиков</span>
					</div>

					{/* Подписка */}
					<button className='bg-primary text-primary-foreground ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:shadow-[0_4px_20px_rgba(200,255,0,0.4)] hover:brightness-110'>
						<Bell size={14} />
						Подписаться
					</button>
				</div>

				{/* Кнопки реакций */}
				<div className='flex flex-wrap items-center gap-2'>
					<div className='border-border bg-secondary flex items-center overflow-hidden rounded-full border'>
						<button className='text-secondary-foreground hover:bg-secondary-hover flex items-center gap-1.5 px-4 py-2 text-sm transition-colors duration-150'>
							<ThumbsUp size={15} />
							<span>0</span>
						</button>
						<div className='bg-border h-5 w-px' />
						<button className='text-secondary-foreground hover:bg-secondary-hover flex items-center gap-1.5 px-4 py-2 text-sm transition-colors duration-150'>
							<ThumbsDown size={15} />
						</button>
					</div>

					<button className='border-border bg-secondary text-secondary-foreground hover:bg-secondary-hover flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors duration-150'>
						<Share2 size={15} />
						Поделиться
					</button>

					<button className='border-border bg-secondary text-secondary-foreground hover:bg-secondary-hover flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-150'>
						<MoreHorizontal size={16} />
					</button>
				</div>
			</div>

			{/* Описание */}
			<div className='bg-secondary/50 border-border rounded-xl border p-4'>
				<div className='text-muted-foreground mb-3 flex flex-wrap items-center gap-3 text-sm font-medium'>
					<span className='flex items-center gap-1.5'>
						<Eye size={14} />0 просмотров
					</span>
					<span className='text-border-sub'>•</span>
					<span className='flex items-center gap-1.5'>
						<Calendar size={14} />
						{formatDate(video.createdAt)}
					</span>
					{video.durationSeconds && (
						<>
							<span className='text-border-sub'>•</span>
							<span className='text-accent font-mono text-xs'>
								{formatDuration(video.durationSeconds)}
							</span>
						</>
					)}
				</div>

				{video.description && (
					<p className='text-foreground m-0 text-sm leading-relaxed whitespace-pre-wrap'>
						{video.description}
					</p>
				)}
			</div>
		</div>
	)
}
