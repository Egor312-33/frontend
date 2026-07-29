'use client'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider, useQuery } from '@apollo/client/react'
import { useField } from '@payloadcms/ui'
import { useMemo, useState } from 'react'

import { client } from '@/shared/apolo-client'
import { FindAllFilterVideosDocument } from '@/shared/gql/graphql'

type Video = {
	id: string
	slug: string
	title: string
	thumbnailUrl: string
}

function VideoPickerInner() {
	const { setValue: setSlug } = useField<string>({ path: 'videoSlug' })
	const { setValue: setId } = useField<string>({ path: 'videoId' })
	const { setValue: setTitle } = useField<string>({ path: 'videoTitle' })

	const [search, setSearch] = useState('')
	const [selected, setSelected] = useState<Video | null>(null)

	const { data, loading } = useQuery(FindAllFilterVideosDocument, {
		variables: {
			input: {
				searchTerm: search || null,
				skip: null,
				take: 20
			}
		}
	})

	const videos = data?.findAllFilterVideos ?? []

	function handleSelect(video: Video) {
		setSelected(video)
		setSlug(video.slug)
		setId(video.id)
		setTitle(video.title)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			{selected && (
				<div
					style={{
						padding: '8px 12px',
						background: 'var(--theme-elevation-100)',
						borderRadius: 6,
						fontSize: 13,
						display: 'flex',
						alignItems: 'center',
						gap: 10
					}}
				>
					{selected.thumbnailUrl && (
						<img
							src={selected.thumbnailUrl}
							alt=''
							style={{ width: 60, height: 34, objectFit: 'cover', borderRadius: 4 }}
						/>
					)}
					<div>
						<div style={{ fontWeight: 500 }}>{selected.title}</div>
						<div style={{ color: 'var(--theme-elevation-450)', fontSize: 12 }}>{selected.slug}</div>
					</div>
					<button
						type='button'
						onClick={() => setSelected(null)}
						style={{ marginLeft: 'auto', fontSize: 12, cursor: 'pointer' }}
					>
						✕ Сбросить
					</button>
				</div>
			)}

			<input
				type='text'
				placeholder='Поиск видео по названию...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				style={{
					padding: '8px 12px',
					borderRadius: 6,
					border: '1px solid var(--theme-elevation-200)',
					background: 'var(--theme-elevation-0)',
					color: 'var(--theme-text)',
					fontSize: 14
				}}
			/>

			{loading && <div style={{ fontSize: 13, color: 'var(--theme-elevation-450)' }}>Загрузка...</div>}

			{!loading && videos.length > 0 && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 4,
						maxHeight: 260,
						overflowY: 'auto',
						border: '1px solid var(--theme-elevation-200)',
						borderRadius: 6,
						padding: 4
					}}
				>
					{videos.map(video => (
						<button
							key={video.id}
							type='button'
							onClick={() => handleSelect(video as Video)}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 10,
								padding: '6px 8px',
								borderRadius: 4,
								border: 'none',
								background: selected?.id === video.id ? 'var(--theme-elevation-150)' : 'transparent',
								cursor: 'pointer',
								textAlign: 'left',
								color: 'var(--theme-text)'
							}}
						>
							{video.thumbnailUrl && (
								<img
									src={video.thumbnailUrl}
									alt=''
									style={{
										width: 60,
										height: 34,
										objectFit: 'cover',
										borderRadius: 4,
										flexShrink: 0
									}}
								/>
							)}
							<div>
								<div style={{ fontSize: 13, fontWeight: 500 }}>{video.title}</div>
								<div style={{ fontSize: 12, color: 'var(--theme-elevation-450)' }}>{video.slug}</div>
							</div>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default function VideoPickerField() {
	return (
		<ApolloProvider client={client}>
			<VideoPickerInner />
		</ApolloProvider>
	)
}
