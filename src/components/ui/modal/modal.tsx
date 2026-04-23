'use client'

import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild
} from '@headlessui/react'
import { type VariantProps, cva } from 'class-variance-authority'
import { LucideX } from 'lucide-react'
import { Fragment, ReactNode } from 'react'

import { cn } from '@/components/lib/utils'

const modalVariants = cva(
	'relative w-full overflow-hidden rounded-2xl border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.5)]',
	{
		variants: {
			variant: {
				default: [
					'border-border/20',
					'[&_.modal-top-line]:via-primary/40',
					'[&_.modal-header]:border-border/30',
					'[&_.modal-title]:text-foreground',
					'[&_.modal-close]:text-muted-foreground [&_.modal-close]:hover:bg-primary/10 [&_.modal-close]:hover:text-primary'
				],
				danger: [
					'border-destructive/20',
					'[&_.modal-top-line]:via-destructive/50',
					'[&_.modal-header]:border-destructive/20',
					'[&_.modal-title]:text-destructive',
					'[&_.modal-close]:text-destructive [&_.modal-close]:hover:bg-destructive/10'
				],
				success: [
					'border-accent/20',
					'[&_.modal-top-line]:via-accent/50',
					'[&_.modal-header]:border-accent/20',
					'[&_.modal-title]:text-accent',
					'[&_.modal-close]:text-accent [&_.modal-close]:hover:bg-accent/10'
				]
			},
			size: {
				sm: 'max-w-[420px]',
				md: 'max-w-[580px]',
				lg: 'max-w-[780px]',
				xl: 'max-w-[980px]',
				full: 'max-w-[95vw] max-h-[95vh]'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	}
)

export interface ModalProps extends VariantProps<typeof modalVariants> {
	isOpen: boolean
	onClose: () => void
	title?: ReactNode
	children: ReactNode
	showCloseButton?: boolean
	closeOnBackdrop?: boolean
	footer?: ReactNode
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	size = 'md',
	variant = 'default',
	showCloseButton = true,
	closeOnBackdrop = true,
	footer
}: ModalProps) => {
	const handleBackdropClick = () => {
		if (closeOnBackdrop) onClose()
	}

	return (
		<Transition show={isOpen} as={Fragment} appear>
			<Dialog onClose={handleBackdropClick} className='relative z-2000'>
				<TransitionChild
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div
						className='bg-background/80 fixed inset-0 backdrop-blur-sm'
						aria-hidden='true'
					/>
				</TransitionChild>

				<div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4'>
					<div className='flex w-full items-center justify-center'>
						<TransitionChild
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<DialogPanel
								className={cn(modalVariants({ variant, size }))}
							>
								<div className='modal-top-line absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent' />

								{(title || showCloseButton) && (
									<div className='modal-header flex items-center justify-between gap-4 border-b px-6 py-5'>
										{title && (
											<DialogTitle className='modal-title flex-1 text-lg font-semibold'>
												{title}
											</DialogTitle>
										)}
										{showCloseButton && (
											<button
												onClick={onClose}
												type='button'
												aria-label='Close modal'
												className='modal-close focus-visible:ring-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95'
											>
												<LucideX className='h-4 w-4' />
											</button>
										)}
									</div>
								)}

								<div className='text-muted-foreground [&::-webkit-scrollbar-thumb]:bg-primary/30 [&::-webkit-scrollbar-thumb:hover]:bg-primary/50 [&::-webkit-scrollbar-track]:bg-secondary/20 max-h-[calc(90vh-140px)] overflow-y-auto px-6 py-5 text-[0.9375rem] leading-relaxed [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-track]:rounded-sm'>
									{children}
								</div>

								{footer && (
									<div className='border-border/20 bg-secondary-dark/30 flex items-center justify-end gap-3 border-t px-6 py-4'>
										{footer}
									</div>
								)}
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
