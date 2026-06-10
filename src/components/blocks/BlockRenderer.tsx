'use client'

import { BarChart3, Calendar, Image as ImageIcon, Info } from 'lucide-react'
import type { ReactNode } from 'react'

import { TabSwitcher } from '../ui/blocks/tab-switcher'

import { HeroBlock } from './universal/HeroBlock'
import type { Media, SquadMember, Streamer } from '@/payload-types'

const TABS = [
	{ key: 'feed', label: 'Лента', icon: Calendar },
	{ key: 'photos', label: 'Фото', icon: ImageIcon },
	{ key: 'info', label: 'Информация', icon: Info },
	{ key: 'stats', label: 'Статистика', icon: BarChart3 }
] as const

type Tab = (typeof TABS)[number]['key']

type BlockRendererProps = {
	theme?: Streamer['theme']
	visualConfig: NonNullable<Streamer['streamerVisualConfig']>
	squadHistory: SquadMember[]
	streamerInfo: {
		name: string
		realName?: string | null
		nicknames?: { nickname: string; id?: string | null }[] | null
		avatar?: Media | null
		banner?: Media | null
	}
	feedTab: ReactNode
	photosTab: ReactNode
	infoTab: ReactNode
	statsTab: ReactNode
}

export function BlockRenderer({
	theme = 'archive',
	visualConfig,
	squadHistory,
	streamerInfo,
	feedTab,
	photosTab,
	infoTab,
	statsTab
}: BlockRendererProps) {
	const tabsMap: Record<Tab, ReactNode> = {
		feed: feedTab,
		photos: photosTab,
		info: infoTab,
		stats: statsTab
	}

	return (
		<>
			<HeroBlock
				theme={theme}
				visualConfig={visualConfig}
				streamerInfo={streamerInfo}
				squadHistory={squadHistory}
			/>

			<div className='mx-auto max-w-7xl px-6 pt-6 pb-20'>
				<TabSwitcher tabs={TABS} defaultTab='feed' className='space-y-8'>
					{activeTab => tabsMap[activeTab]}
				</TabSwitcher>
			</div>
		</>
	)
}
