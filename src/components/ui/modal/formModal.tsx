'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes } from 'react'
import { type FieldValues, FormProvider, type UseFormProps, useForm } from 'react-hook-form'
import type { ZodType } from 'zod'

import { Button } from '../button'

import { Modal, type ModalProps } from './modal'

interface FormModalProps<TFormValues extends FieldValues> extends FormHTMLAttributes<HTMLFormElement> {
	isOpen: boolean
	onClose: () => void
	isLoading?: boolean
	confirmDisabled?: boolean
	formTitle: string
	confirmText?: string
	cancelText?: string
	variant?: ModalProps['variant']
	schema: ZodType<TFormValues, any, any>
	defaultValues: UseFormProps<TFormValues>['defaultValues']
	onFormSubmit: (data: TFormValues) => void
	children: React.ReactNode
}

export function FormModal<TFormValues extends FieldValues>({
	isOpen,
	onClose,
	variant,
	isLoading,
	confirmDisabled,
	formTitle,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	schema,
	defaultValues,
	onFormSubmit,
	children,
	...props
}: FormModalProps<TFormValues>) {
	const form = useForm<TFormValues>({
		resolver: zodResolver(schema),
		defaultValues,
		mode: 'onChange'
	})

	const onSubmitHandler = form.handleSubmit(onFormSubmit, errors =>
		console.error('[FormModal] validation errors:', errors)
	)

	const { isDirty } = form.formState

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={formTitle}
			variant={variant}
			size='md'
			closeOnBackdrop={!isLoading}
			showCloseButton={!isLoading}
			footer={
				<>
					<Button type='button' onClick={onClose} disabled={isLoading} variant='secondary'>
						{cancelText}
					</Button>

					<Button
						type='button'
						onClick={onSubmitHandler}
						disabled={isLoading || confirmDisabled || !isDirty}
						loading={isLoading}
					>
						{confirmText}
					</Button>
				</>
			}
		>
			<FormProvider {...form}>
				<form onSubmit={onSubmitHandler} className='flex flex-col gap-4' {...props}>
					{children}
				</form>
			</FormProvider>
		</Modal>
	)
}
