'use client'

import { Clock, Eye } from 'lucide-react'
import Image from 'next/image'

// --- Заглушки (заменить на реальный запрос) ---
const STUB_VIDEOS = [
	{
		id: '1',
		title: 'Как создать крутой проект на Next.js за 30 минут',
		thumbnailUrl: null as string | null,
		duration: '28:14',
		views: '4.2K',
		author: 'Дев Канал',
		slug: '#'
	},
	{
		id: '2',
		title: 'TypeScript: продвинутые паттерны для больших проектов',
		thumbnailUrl: null as string | null,
		duration: '41:07',
		views: '11K',
		author: 'Code Pro',
		slug: '#'
	},
	{
		id: '3',
		title: 'GraphQL + Apollo: полный гайд с нуля',
		thumbnailUrl: null as string | null,
		duration: '1:02:33',
		views: '7.8K',
		author: 'Дев Канал',
		slug: '#'
	},
	{
		id: '4',
		title: 'Tailwind CSS 4.0 — всё что нужно знать',
		thumbnailUrl: null as string | null,
		duration: '19:55',
		views: '23K',
		author: 'UI Мастер',
		slug: '#'
	},
	{
		id: '5',
		title: 'Docker + CI/CD для фронтенд разработчиков',
		thumbnailUrl: null as string | null,
		duration: '35:20',
		views: '6.1K',
		author: 'DevOps Tips',
		slug: '#'
	}
]

export function RecommendedVideos() {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-foreground m-0 px-0 text-base font-semibold'>
				Рекомендуем
			</h2>

			<div className='flex flex-col gap-3'>
				{STUB_VIDEOS.map(video => (
					<a
						key={video.id}
						href={`/videos/${video.slug}`}
						className='hover:bg-secondary/50 group flex cursor-pointer gap-3 rounded-xl p-2 transition-colors duration-150'
					>
						{/* Превью */}
						<div className='bg-secondary relative h-23.5 w-42 shrink-0 overflow-hidden rounded-lg'>
							{video.thumbnailUrl ? (
								<Image
									src={video.thumbnailUrl}
									alt={video.title}
									fill
									className='object-cover'
									sizes='168px'
								/>
							) : (
								<div className='bg-secondary-dark flex h-full w-full items-center justify-center'>
									<div className='bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full'>
										<div className='border-l-primary ml-0.5 h-0 w-0 border-t-[6px] border-b-[6px] border-l-10 border-t-transparent border-b-transparent' />
									</div>
								</div>
							)}
							{/* Длительность */}
							<div className='absolute right-1.5 bottom-1.5 flex items-center gap-1 rounded bg-black/80 px-1.5 py-0.5'>
								<Clock size={10} className='text-white' />
								<span className='font-mono text-[10px] leading-none font-medium text-white'>
									{video.duration}
								</span>
							</div>
						</div>

						{/* Инфо */}
						<div className='flex min-w-0 flex-1 flex-col gap-1'>
							<p className='text-foreground group-hover:text-primary m-0 line-clamp-2 text-[13px] leading-snug font-semibold transition-colors duration-150'>
								{video.title}
							</p>
							<span className='text-muted-foreground text-xs'>
								{video.author}
							</span>
							<span className='text-muted-foreground flex items-center gap-1 text-xs'>
								<Eye size={11} />
								{video.views} просмотров
							</span>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}
