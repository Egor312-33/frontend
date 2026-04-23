'use server'
import { RecommendedVideos } from './RecommendedVideos'
import { VideoInfo } from './VideoInfo'
import { VideoView } from './VideoView'
import type { GetPublicVideoBySlugQuery } from '@/shared/gql/graphql'

interface VideoWatchProps {
	video: GetPublicVideoBySlugQuery['getPublicVideoBySlug']
}

export async function VideoWatch({ video }: VideoWatchProps) {
	return (
		<div className='bg-background min-h-screen px-4 py-6 md:px-6 md:py-8'>
			<div className='mx-auto grid max-w-450 grid-cols-1 gap-6 xl:grid-cols-[1fr_400px]'>
				<div className='flex flex-col gap-12'>
					<VideoView videoId={video.id} thumbnailUrl={video.thumbnailUrl ?? ''} src={video.path} />
					<VideoInfo video={video} />
				</div>

				<aside className='scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent xl:sticky xl:top-6 xl:max-h-[calc(100vh-3rem)] xl:overflow-y-auto xl:pr-1'>
					<RecommendedVideos />
				</aside>
			</div>
		</div>
	)
}
