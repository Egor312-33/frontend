import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { EventPageView } from '@/components/events/EventPageView'

import type { Epoch, StreamGrid, Streamer } from '@/payload-types'

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const payload = await getPayload({ config })

	const event = await payload.findByID({
		collection: 'events',
		id: Number(id),
		depth: 2
	})

	if (!event) return notFound()

	return (
		<div className='bg-background min-h-screen'>
			<div className='mx-auto max-w-4xl px-4 py-12 sm:px-6'>
				<EventPageView event={event} />
			</div>
		</div>
	)
}
