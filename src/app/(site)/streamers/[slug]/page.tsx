import { notFound } from 'next/navigation'

import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { EpochsSidebar } from '@/components/blocks/eposhs/EpochsSidebar'
import { StatsTabView } from '@/components/blocks/stats/StatsTabView'
import { FeedTab } from '@/components/blocks/tabs/FeedTab'
import { InfoTab } from '@/components/blocks/tabs/InfoTab'
import { PhotosTab } from '@/components/blocks/tabs/PhotosTab'

import { payloadQuery } from '@/libs/payload-graphql'
import { GetStreamerGridsDocument, GetStreamerPageDocument, GetStreamerStatsDocument } from '@/shared/gql/cms/graphql'

export default async function StreamerPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	const pageData = await payloadQuery(GetStreamerPageDocument, { slug })
	const streamer = pageData.Streamers?.docs[0]
	if (!streamer) return notFound()

	const id = streamer.id

	const [gridsData, statsData] = await Promise.all([
		payloadQuery(GetStreamerGridsDocument, { streamerId: id }),
		payloadQuery(GetStreamerStatsDocument, {
			streamerIdJson: id,
			streamerId: Number(id),
			recentLimit: 5
		})
	])

	const counts = {
		all: statsData.allEvents?.totalDocs ?? 0,
		events: statsData.soloEvents?.totalDocs ?? 0,
		...statsData.gridCounts
	}
	const recentEvents = statsData.recentEvents?.docs ?? []

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<BlockRenderer
				squadHistory={streamer.squads?.docs}
				streamerInfo={{
					name: streamer.name,
					realName: streamer.realName,
					nicknames: streamer.nicknames,
					avatar: streamer.avatar,
					banner: streamer.banner
				}}
				feedTab={
					<FeedTab
						blocks={streamer.blocks ?? []}
						streamGrids={gridsData.StreamGrids?.docs}
						counts={counts}
						epochsSidebar={<EpochsSidebar epochs={streamer.epochs?.docs} />}
					/>
				}
				photosTab={<PhotosTab />}
				infoTab={<InfoTab />}
				statsTab={<StatsTabView counts={counts} events={recentEvents} />}
			/>
		</div>
	)
}
