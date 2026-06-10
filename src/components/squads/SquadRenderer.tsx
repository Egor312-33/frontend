'use client'

import { BarChart3, BookOpen, Calendar, Radio, Users } from 'lucide-react'
import type { ReactNode } from 'react'

import type { SquadForView, SquadStatsForView } from '@/types/squad'

import { TabSwitcher } from '../ui/blocks/tab-switcher'

import { SquadHero } from './SquadHero'
import { SquadStats } from './SquadStats'

const TABS = [
	{ key: 'members', label: 'Участники', icon: Users },
	{ key: 'epochs', label: 'Эпохи', icon: Calendar },
	{ key: 'events', label: 'События', icon: Radio },
	{ key: 'charts', label: 'Статистика', icon: BarChart3 },
	{ key: 'about', label: 'История', icon: BookOpen }
] as const

type Tab = (typeof TABS)[number]['key']

export function SquadRenderer({
	squad,
	stats,
	membersTab,
	epochsTab,
	eventsTab,
	chartsTab,
	aboutTab
}: {
	squad: SquadForView
	stats: SquadStatsForView
	membersTab: ReactNode
	epochsTab: ReactNode
	eventsTab: ReactNode
	chartsTab: ReactNode
	aboutTab: ReactNode
}) {
	const tabsMap: Record<Tab, ReactNode> = {
		members: membersTab,
		epochs: epochsTab,
		events: eventsTab,
		charts: chartsTab,
		about: aboutTab
	}

	return (
		<>
			<SquadHero squad={squad} />
			<SquadStats stats={stats} />

			<div className='mx-auto max-w-7xl px-6 pt-6 pb-20'>
				<TabSwitcher tabs={TABS} defaultTab='members' className='space-y-8'>
					{activeTab => tabsMap[activeTab]}
				</TabSwitcher>
			</div>
		</>
	)
}
