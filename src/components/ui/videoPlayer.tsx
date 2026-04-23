'use client'

import { PlayCircle } from 'lucide-react'
import Video from 'next-video'
import Image from 'next/image'

import { getMediaSource } from '@/utils/get-media-source'

interface VideoPlayerProps {
	thumbnailUrl: string
	src: string
}

export function VideoPlayer({ thumbnailUrl, src }: VideoPlayerProps) {
	return (
		<div className='ring-border relative mx-auto aspect-video w-full max-w-300 rounded-xl ring-1'>
			<Video
				src={getMediaSource(src)}
				controls
				className='absolute inset-0 h-full w-full rounded-xl'
			>
				<div
					slot='poster'
					className='bg-background relative h-full w-full'
				>
					{thumbnailUrl && (
						<Image
							src={thumbnailUrl}
							alt='Обложка видео'
							fill
							className='object-contain'
							sizes='(max-width: 768px) 100vw, 1200px'
							priority
						/>
					)}
					<div className='group absolute inset-0 z-10 flex cursor-pointer items-center justify-center'>
						<PlayCircle
							className='text-primary opacity-90 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100'
							style={{
								filter: 'drop-shadow(var(--shadow-primary-md))'
							}}
							size={80}
						/>
					</div>
				</div>
			</Video>
		</div>
	)
}
