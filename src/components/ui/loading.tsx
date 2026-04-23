import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

import { cn } from '../lib/utils'

const loadingVariants = cva(
	'flex items-center justify-center text-muted-foreground',
	{
		variants: {
			size: {
				sm: 'py-4 gap-2 text-xs',
				md: 'py-8 gap-3 text-sm',
				lg: 'py-16 gap-4 text-base'
			},
			layout: {
				row: 'flex-row',
				col: 'flex-col'
			}
		},
		defaultVariants: {
			size: 'md',
			layout: 'row'
		}
	}
)

const spinnerSizeMap = {
	sm: 14,
	md: 18,
	lg: 28
} as const

interface LoadingProps extends VariantProps<typeof loadingVariants> {
	text?: string
	className?: string
}

export const Loading = ({
	text = 'Загрузка...',
	size = 'md',
	layout = 'row',
	className
}: LoadingProps) => {
	return (
		<div className={cn(loadingVariants({ size, layout }), className)}>
			<Loader2
				className='text-primary shrink-0 animate-spin'
				size={spinnerSizeMap[size ?? 'md']}
			/>
			<span>{text}</span>
		</div>
	)
}
