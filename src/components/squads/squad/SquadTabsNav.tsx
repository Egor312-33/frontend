// squad-tabs-nav.tsx
'use client'

import { BarChart3, BookOpen, Calendar, type LucideIcon, Radio, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

import { RouteTabsNav } from '@/components/ui/tabs/routeTabsNav'

type TabKey = 'members' | 'epochs' | 'events' | 'charts' | 'about'

const TAB_CONFIG: { key: TabKey; segment: string | null; icon: LucideIcon }[] = [
	{ key: 'members', segment: null, icon: Users },
	{ key: 'epochs', segment: 'epochs', icon: Calendar },
	{ key: 'events', segment: 'events', icon: Radio },
	{ key: 'charts', segment: 'charts', icon: BarChart3 },
	{ key: 'about', segment: 'about', icon: BookOpen }
] as const

export function SquadTabsNav() {
	const t = useTranslations('squadPage.tabs')
	const { slug } = useParams<{ slug: string }>()

	return <RouteTabsNav tabs={TAB_CONFIG} basePath={`/squads/${slug}`} getLabel={t} ariaLabel='Разделы сквада' />
}
