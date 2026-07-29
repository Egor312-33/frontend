'use client'

import { type LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

import { Modal, type ModalProps } from './modal'

interface InfoModalProps extends Pick<ModalProps, 'variant' | 'size'> {
	isOpen: boolean
	onClose: () => void
	icon: LucideIcon
	title: string
	subtitle?: string
	children: ReactNode
}

export function InfoModal({
	isOpen,
	onClose,
	icon: Icon,
	title,
	subtitle,
	variant = 'default',
	size = 'lg',
	children
}: InfoModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={size}
			variant={variant}
			title={
				<div className='flex items-center gap-2.5'>
					<span className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
						<Icon className='h-4 w-4' />
					</span>
					<div className='flex flex-col leading-tight'>
						<span className='text-base font-bold'>{title}</span>
						{subtitle && <span className='text-muted-foreground text-xs font-normal'>{subtitle}</span>}
					</div>
				</div>
			}
		>
			{children}
		</Modal>
	)
}
