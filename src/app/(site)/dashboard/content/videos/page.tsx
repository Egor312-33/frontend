import { type Metadata } from 'next'

import { ContentVideoChannel } from '@/components/user/dashboard/content/videos/сontentVideoChannel'

export const metadata: Metadata = {
	title: 'Видео канала'
}

export default async function ContentVideosPage() {
	return <ContentVideoChannel />
}
