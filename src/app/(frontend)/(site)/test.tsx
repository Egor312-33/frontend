'use client'
import { ReactNode } from 'react'

import { Header } from '@/components/layout/header/header'
import { Sidebar } from '@/components/layout/sidebar/sidebar'
import { cn } from '@/components/lib/utils'

import { useSidebar } from '@/hooks/useSidebar'

interface TestProps {
	children: ReactNode
}
export default function Test({ children }: TestProps) {
	const { isCollapsed } = useSidebar()

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<Sidebar />
			<Header />
			<main
				className={cn(
					'mt-12 ml-0 min-h-[calc(100vh-3rem)] transition-all duration-300 ease-in-out',
					isCollapsed ? 'md:ml-12' : 'md:ml-64'
				)}
			>
				{children}
			</main>
		</div>
	)
}
