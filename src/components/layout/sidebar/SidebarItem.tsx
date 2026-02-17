'use client'
import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/buttonIcon'

import { useSidebar } from '@/hooks/useSidebar'

import { Route } from './route.interface'

interface SidebarItemProps {
	route: Route
}

export function SidebarItem({ route }: SidebarItemProps) {
	const { isCollapsed } = useSidebar()

	if (isCollapsed) {
		return (
			<div>
				<ButtonIcon
					href={route.href}
					variant='ghost'
					aria-label={route.label}
				>
					<route.icon className='h-5 w-5' />
				</ButtonIcon>
			</div>
		)
	}

	return (
		<div>
			<Button
				href={route.href}
				variant='ghost'
				startIcon={<route.icon className='h-5 w-5' />}
				alignLeft
			>
				<span className='truncate text-sm font-medium'>
					{route.label}
				</span>
			</Button>
		</div>
	)
}
