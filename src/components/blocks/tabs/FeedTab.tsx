// src/components/blocks/tabs/FeedTab.tsx
'use client'

import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import type { CategoryKey } from '../../lib/eventLayouts'
import { CategoryStrip } from '../CategoryStrip'
import { GetStreamerPageType } from '../blocks.types'
import { EventTimelineBlock } from '../universal/EventTimelineBlock'
import { QuoteBlock } from '../universal/QuoteBlock'
import { YoutubeEmbedBlock } from '../universal/YoutubeEmbedBlock'

import type { GetStreamerGridsQuery, GetStreamerStatsQuery } from '@/shared/gql/cms/graphql'

type StreamGridDoc = NonNullable<GetStreamerGridsQuery['StreamGrids']>['docs'][number]
type CountsType = NonNullable<GetStreamerStatsQuery['StreamerStats']>['counts']
interface FeedTabProps {
	blocks?: GetStreamerPageType['blocks']
	streamGrids?: StreamGridDoc[]
	counts?: CountsType
	epochsSidebar: ReactNode
}

export function FeedTab({ blocks, streamGrids, counts, epochsSidebar }: FeedTabProps) {
	const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

	const otherBlocks = blocks?.filter(b => b.blockType !== 'hero') ?? []

	const filteredGrids = useMemo(() => {
		if (!streamGrids) return []
		if (activeCategory === 'all' || activeCategory === 'events') return streamGrids
		return streamGrids.filter(g => g.type === activeCategory)
	}, [streamGrids, activeCategory])

	return (
		<div>
			<CategoryStrip active={activeCategory} onSelect={setActiveCategory} counts={counts} />

			<div className='grid gap-8 lg:grid-cols-3'>
				<div className='space-y-10 lg:col-span-2'>
					{filteredGrids.length === 0 ? (
						<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-10 text-center'>
							<p className='text-muted-foreground text-sm'>В этой категории пока нет эфиров</p>
						</div>
					) : (
						filteredGrids.map(grid => (
							<EventTimelineBlock
								key={grid.id}
								title={grid.title}
								type={grid.type}
								cover={grid.cover}
								events={grid.events?.docs}
							/>
						))
					)}

					{otherBlocks.length > 0 && (
						<div className='space-y-6'>
							{otherBlocks.map(block => {
								switch (block.blockType) {
									case 'youtubeEmbed':
										return (
											<YoutubeEmbedBlock
												key={block.id}
												url={block.url ?? ''}
												caption={block.caption}
											/>
										)
									case 'quote':
										if (!block.text) return null
										return <QuoteBlock key={block.id} text={block.text} author={block.author} />
									default:
										return null
								}
							})}
						</div>
					)}
				</div>

				{epochsSidebar}
			</div>
		</div>
	)
}
