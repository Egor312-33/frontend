// frontend/src/app/(frontend)/(site)/squads/page.tsx
import type { Metadata } from 'next'

import { SquadsGrid } from '@/components/squads/SquadsGrid'
import { SquadsPageHeader } from '@/components/squads/SquadsPageHeader'

import { payloadQuery } from '@/libs/payload-graphql'
import { GetSquadsPageDocument } from '@/shared/gql/cms/graphql'

export const metadata: Metadata = {
	title: 'Сквады',
	description: 'Все объединения стримеров: составы, эпохи и события'
}

export default async function SquadsPage() {
	const data = await payloadQuery(GetSquadsPageDocument)

	const stats = {
		totalSquads: data.Squads?.totalDocs ?? 0,
		totalStreamers: data.totalStreamers?.totalDocs ?? 0,
		totalEpochs: data.totalEpochs?.totalDocs ?? 0
	}

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<SquadsPageHeader stats={stats} />
			<div className='mx-auto max-w-7xl px-6 py-12'>
				<SquadsGrid squads={data.Squads?.docs} />
			</div>
		</div>
	)
}
