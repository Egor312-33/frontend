'use client'
import { usePathname } from 'next/navigation'

import { cn } from '@/components/lib/utils'

import { useSidebar } from '@/hooks/useSidebar'

import { DashboardNav } from './DashboardNav'
import { UserNav } from './UserNav'
import { SidebarHeader } from './sidebarHeader'

export function Sidebar() {
	const { isCollapsed, close } = useSidebar()
	const pathname = usePathname()
	const isDashboardPage = pathname.includes('/dashboard')

	return (
		<>
			{!isCollapsed && (
				<div
					className='animate-in fade-in fixed inset-0 z-998 bg-black/50 duration-300 md:hidden'
					onClick={close}
					aria-hidden='true'
				/>
			)}
			<aside
				className={cn(
					'fixed top-0 left-0 z-999',
					'flex h-screen flex-col',
					'bg-background border-border border-r',
					'transition-all duration-300 ease-in-out',
					isCollapsed ? 'md:w-12' : 'md:w-64',
					isCollapsed
						? '-translate-x-full md:translate-x-0'
						: 'w-64 translate-x-0'
				)}
			>
				<div className='hidden shrink-0 md:block'>
					<SidebarHeader />
				</div>

				<nav
					className={cn(
						'flex-1 overflow-y-auto',
						'scrollbar-thin scrollbar-track-secondary scrollbar-thumb-border',
						'hover:scrollbar-thumb-muted-foreground',
						isCollapsed ? 'hidden md:block' : 'block',
						'mt-12 md:mt-0'
					)}
				>
					{isDashboardPage ? <DashboardNav /> : <UserNav />}
				</nav>
			</aside>
		</>
	)
}
