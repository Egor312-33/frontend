'use client'

import { MenuItem } from '@headlessui/react'

import { Button } from '../ui/button'

interface MenuItemButtonProps {
	icon: React.ReactNode
	label: string
	href?: string
	onClick?: () => void
	variant?: 'ghost' | 'destructive'
	endContent?: React.ReactNode
}

export function MenuItemButton({
	icon,
	label,
	href,
	onClick,
	variant = 'ghost',
	endContent
}: MenuItemButtonProps) {
	return (
		<MenuItem>
			<Button
				href={href}
				onClick={onClick}
				startIcon={icon}
				variant={variant}
				alignLeft
			>
				{label}
				{endContent}
			</Button>
		</MenuItem>
	)
}
