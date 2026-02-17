import { Tab, TabGroup, TabList } from '@headlessui/react'
import { Folder, Home, Radio } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { RecommededChannels } from './RecommededChannels'
import { SidebarItem } from './SidebarItem'
import type { Route } from './route.interface'

const routes: Route[] = [
	{
		label: 'home',
		href: '/',
		icon: Home
	},
	{
		label: 'categories',
		href: '/categories',
		icon: Folder
	},
	{
		label: 'streams',
		href: '/streams',
		icon: Radio
	}
]

export function UserNav() {
	const t = useTranslations('layout.sidebar.userNav')

	return (
		<div className='space-y-2 px-2 pt-4 lg:pt-0'>
			{routes.map((route, index) => (
				<SidebarItem key={index} route={route} />
			))}
			<RecommededChannels />
		</div>
	)
}
