'use client'

import { useQuery } from '@apollo/client/react'
import { Aperture, CameraOff, EllipsisVertical, Eye, Lock, Pencil, Play, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/components/lib/utils'
import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/buttonIcon'
import { ErrorMessage } from '@/components/ui/error'
import { Loading } from '@/components/ui/loading'
import Typography from '@/components/ui/typography'

import { VideoSettingsInfo } from './videoSettings/videoSettingsInfo'
import { Access, GetAllVideosOwnerDocument } from '@/shared/gql/graphql'

const TEMP_DURATION = '12:34'

function AccessBadge({ access }: { access: Access }) {
	return (
		<span
			className={cn(
				'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
				access === Access.Public
					? 'bg-accent/20 text-accent border-accent/30 border'
					: access === Access.Bylink
						? 'bg-primary/10 text-primary border-primary/30 border'
						: 'bg-muted text-muted-foreground border-border border'
			)}
		>
			{access === Access.Public ? (
				<>
					<Aperture className='h-3 w-3' /> Открытое
				</>
			) : access === Access.Bylink ? (
				<>
					<Eye className='h-3 w-3' /> По ссылке
				</>
			) : (
				<>
					<Lock className='h-3 w-3' /> Закрытое
				</>
			)}
		</span>
	)
}

export function ContentVideoList() {
	const { data, loading, error } = useQuery(GetAllVideosOwnerDocument)
	const [editSlug, setEditSlug] = useState<string | null>(null)

	if (loading) return <Loading />
	if (error) return <ErrorMessage message={error.message} />

	const videos = data?.getAllVideosOwner ?? []

	if (!videos.length) {
		return <p className='text-muted-foreground py-8 text-center text-sm'>Видео не найдены</p>
	}

	return (
		<>
			{editSlug && <VideoSettingsInfo slug={editSlug} isOpen={!!editSlug} onClose={() => setEditSlug(null)} />}

			<div className='divide-border divide-y'>
				{videos.map(video => {
					const likePercentage = 0 // TODO: добавить likes/dislikes в GraphQL

					return (
						<div
							key={video.slug}
							className='hover:bg-secondary/20 grid px-6 py-4 transition-colors duration-150 max-sm:grid-cols-[50%_1fr_auto] max-sm:grid-rows-[auto_auto_auto] max-sm:gap-x-3 max-sm:gap-y-2 max-sm:px-3 max-sm:py-3 sm:grid-cols-[4fr_1fr_1fr_1fr] sm:items-center'
						>
							<div className='max-sm:contents sm:flex sm:items-center sm:gap-4'>
								<div className='bg-secondary relative shrink-0 overflow-hidden rounded-lg max-sm:col-start-1 max-sm:row-span-3 max-sm:row-start-1 max-sm:aspect-video max-sm:w-full sm:h-17 sm:w-30'>
									{video.thumbnailUrl ? (
										<Image
											src={video.thumbnailUrl}
											alt={video.title}
											className='object-cover'
											width={320}
											height={180}
										/>
									) : (
										<div className='flex h-full w-full items-center justify-center'>
											<CameraOff className='text-primary h-6 w-6' />
										</div>
									)}
									<div className='absolute right-1 bottom-1 rounded bg-black/70 px-1 py-0.5'>
										<span className='text-[10px] leading-none font-medium text-white'>
											{TEMP_DURATION}
										</span>
									</div>
								</div>

								<div className='flex min-w-0 flex-col gap-2 max-sm:col-start-2 max-sm:row-start-1 max-sm:self-start max-sm:pt-0.5'>
									<Typography
										variant='body-2'
										tag='h4'
										className='text-foreground line-clamp-2 max-w-65 max-sm:max-w-none'
									>
										{video.title}
									</Typography>
									<div className='flex gap-1 max-sm:hidden'>
										<Button
											variant='outline'
											size='icon'
											onClick={() => setEditSlug(video.slug)}
											title='Редактировать'
										>
											<Pencil className='h-4 w-4' />
										</Button>
										<Button
											variant='default'
											size='icon'
											href={`/videos/${video.slug}`}
											title='Воспроизвести'
										>
											<Play className='h-4 w-4' />
										</Button>
									</div>
								</div>
							</div>

							<div className='max-sm:col-start-2 max-sm:row-start-2 max-sm:self-center sm:flex sm:justify-center'>
								<AccessBadge access={video.access} />
							</div>

							<div className='max-sm:col-start-2 max-sm:row-start-3 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:self-end max-sm:pb-0.5 sm:contents'>
								<div className='max-sm:flex max-sm:items-center max-sm:gap-1 sm:flex sm:items-center sm:justify-center sm:gap-1.5'>
									<Eye className='text-muted-foreground h-4 w-4' />
									<span className='text-foreground text-sm font-medium'>0</span>
								</div>
								<div className='flex items-center gap-1 sm:justify-center'>
									<ThumbsUp className='text-accent' size={14} />
									<span className='text-foreground text-sm font-medium'>{likePercentage}%</span>
								</div>
							</div>

							<div className='max-sm:col-start-3 max-sm:row-span-3 max-sm:row-start-1 max-sm:flex max-sm:items-center sm:hidden'>
								<ButtonIcon variant='ghost' size='sm' title='Ещё'>
									<EllipsisVertical className='h-4 w-4' />
								</ButtonIcon>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
