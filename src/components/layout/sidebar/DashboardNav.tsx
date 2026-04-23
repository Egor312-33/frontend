import {
	Banknote,
	DollarSign,
	KeyRound,
	Medal,
	MessageSquare,
	Settings,
	Users,
	Video
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { SidebarItem } from './SidebarItem'
import type { Route } from './route.interface'

const routes: Route[] = [
	{
		label: 'settings',
		href: '/dashboard/settings',
		icon: Settings
	},
	{
		label: 'keys',
		href: '/dashboard/keys',
		icon: KeyRound
	},
	{
		label: 'content',
		href: '/dashboard/content',
		icon: Video
	},
	{
		label: 'followers',
		href: '/dashboard/followers',
		icon: Users
	},
	{
		label: 'sponsors',
		href: '/dashboard/sponsors',
		icon: Medal
	},
	{
		label: 'premium',
		href: '/dashboard/plans',
		icon: DollarSign
	},
	{
		label: 'transactions',
		href: '/dashboard/transactions',
		icon: Banknote
	}
]

export function DashboardNav() {
	const t = useTranslations('layout.sidebar.dashboardNav')

	return (
		<div className='space-y-2 px-2 pt-4 lg:pt-0'>
			{routes.map((route, index) => (
				<SidebarItem
					key={index}
					route={{ ...route, label: t(route.label) }}
				/>
			))}
		</div>
	)
}
