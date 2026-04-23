import { VariantProps, cva } from 'class-variance-authority'
import { AlertCircle } from 'lucide-react'

import { cn } from '../lib/utils'

const errorVariants = cva('flex items-center justify-center', {
	variants: {
		size: {
			sm: 'py-4 gap-2 text-xs',
			md: 'py-8 gap-3 text-sm',
			lg: 'py-16 gap-4 text-base'
		},
		layout: {
			row: 'flex-row',
			col: 'flex-col text-center'
		}
	},
	defaultVariants: {
		size: 'md',
		layout: 'row'
	}
})

const errorIconSizeMap = {
	sm: 14,
	md: 16,
	lg: 22
} as const

interface ErrorMessageProps extends VariantProps<typeof errorVariants> {
	text?: string
	message?: string
	className?: string
}

export const ErrorMessage = ({
	text = 'Что-то пошло не так',
	message,
	size = 'md',
	layout = 'row',
	className
}: ErrorMessageProps) => {
	const displayText = message ? `Ошибка: ${message}` : text

	return (
		<div className={cn(errorVariants({ size, layout }), className)}>
			<AlertCircle
				className='text-destructive shrink-0'
				size={errorIconSizeMap[size ?? 'md']}
			/>
			<span className='text-destructive'>{displayText}</span>
		</div>
	)
}
