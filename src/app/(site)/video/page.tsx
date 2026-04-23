import { print } from 'graphql'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { VideoWatch } from '@/components/video/VIdeoWatch'

import { SERVER_URL } from '@/libs/constants/url.constants'
import { GetPublicVideoBySlugDocument, type GetPublicVideoBySlugQuery } from '@/shared/gql/graphql'

type Props = {
	searchParams: Promise<{ [key: string]: string }>
}

async function getVideo(slug: string) {
	try {
		const query = print(GetPublicVideoBySlugDocument)

		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query,
				variables: { slug }
			}),
			next: {
				revalidate: 60,
				tags: [`video-${slug}`]
			}
		})

		const data = await response.json()

		const video = data.data?.publicVideoBySlug as GetPublicVideoBySlugQuery['getPublicVideoBySlug']

		return { video: video ?? null }
	} catch (error) {
		console.error('Ошибка получения видео:', error)
		return { video: null }
	}
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { v } = await searchParams

	if (!v) {
		return { title: 'Видео не найдено' }
	}

	const { video } = await getVideo(v)

	if (!video) {
		return { title: 'Видео не найдено' }
	}

	return {
		title: video.title ?? 'Видео',
		description: video.description ?? ''
	}
}

export default async function VideoWatchPage({ searchParams }: Props) {
	const { v } = await searchParams

	if (!v) {
		return notFound()
	}

	const { video } = await getVideo(v)

	if (!video) {
		return <div>Видео не найдено или удалено.</div>
	}

	return <VideoWatch video={video} />
}
