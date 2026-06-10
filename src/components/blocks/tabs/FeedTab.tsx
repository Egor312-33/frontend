'use client'

import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import type { CategoryKey, StreamGridForView } from '../../lib/eventLayouts'
import { CategoryStrip } from '../CategoryStrip'
import { EventTimelineBlock } from '../universal/EventTimelineBlock'
import { QuoteBlock } from '../universal/QuoteBlock'
import { YoutubeEmbedBlock } from '../universal/YoutubeEmbedBlock'

import type { Streamer } from '@/payload-types'

type FeedTabProps = {
	blocks?: Streamer['blocks']
	streamGrids: StreamGridForView[]
	counts: Record<CategoryKey, number>
	theme: string
	visualConfig: NonNullable<Streamer['streamerVisualConfig']>
	epochsSidebar: ReactNode
}

export function FeedTab({ blocks, streamGrids, counts, theme, visualConfig, epochsSidebar }: FeedTabProps) {
	const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

	const otherBlocks = blocks?.filter(b => b.blockType !== 'hero') ?? []

	const filteredGrids = useMemo(() => {
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
								events={grid.events}
								theme={theme}
								vibeAccent={visualConfig.vibeAccent}
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
												theme={theme}
											/>
										)
									case 'quote':
										return <QuoteBlock key={block.id} {...block} theme={theme} />
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
