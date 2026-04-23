'use client'

import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

import { Modal, type ModalProps } from './modal'

interface ConfirmModalProps extends Pick<ModalProps, 'variant'> {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	title: string
	message: ReactNode
	confirmText?: string
	cancelText?: string
	isLoading?: boolean
}

export const ConfirmModal = ({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	isLoading = false,
	variant = 'default'
}: ConfirmModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			size='sm'
			variant={variant}
			closeOnBackdrop={!isLoading}
			footer={
				<>
					<Button onClick={onClose} disabled={isLoading} variant='secondary'>
						{cancelText}
					</Button>
					<Button onClick={onConfirm} disabled={isLoading} loading={isLoading} variant='destructive'>
						{confirmText}
					</Button>
				</>
			}
		>
			<p className='text-muted-foreground text-[0.9375rem] leading-relaxed'>{message}</p>
		</Modal>
	)
}
