import config from '@payload-config'
import { getPayload } from 'payload'

import { EventsTab } from '@/components/events/EventsTab'

export default async function EventsPage() {
	const payload = await getPayload({ config })

	const eventsResult = await payload.find({
		collection: 'events',
		select: {
			title: true,
			date: true,
			type: true,
			description: true,
			contentBlocks: true,
			epoch: true
		},
		depth: 1,
		sort: '-date',
		limit: 100
	})

	return (
		<div className='bg-background min-h-screen'>
			<div className='mx-auto max-w-6xl px-4 py-12 sm:px-6'>
				<div className='mb-10'>
					<h1 className='text-title text-4xl font-black tracking-tight sm:text-5xl'>События</h1>
					<p className='text-muted-foreground mt-2 text-sm'>{eventsResult.totalDocs} событий в архиве</p>
				</div>
				<EventsTab events={eventsResult.docs} />
			</div>
		</div>
	)
}
