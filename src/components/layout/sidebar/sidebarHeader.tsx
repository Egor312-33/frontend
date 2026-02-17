'use client'

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/buttonIcon'

import { useSidebar } from '@/hooks/useSidebar'

export function SidebarHeader() {
	const { isCollapsed, open, close } = useSidebar()

	return isCollapsed ? (
		<div className='border-border flex h-12 w-full items-center justify-center border-b'>
			<ButtonIcon
				onClick={open}
				variant='ghost'
				aria-label='Expand sidebar'
			>
				<ArrowRightFromLine className='h-4 w-4' />
			</ButtonIcon>
		</div>
	) : (
		<div className='border-border flex h-12 w-full items-center justify-between border-b px-4'>
			<h2 className='text-foreground text-base font-semibold'>
				Навигация
			</h2>
			<ButtonIcon
				onClick={close}
				variant='ghost'
				aria-label='Collapse sidebar'
			>
				<ArrowLeftFromLine className='h-4 w-4' />
			</ButtonIcon>
		</div>
	)
}
