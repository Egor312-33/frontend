import { MessageCircleWarning } from 'lucide-react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef, useId } from 'react'

import { cn } from '../lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	icon?: ReactNode
	error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, type = 'text', icon, error, className, ...rest }, ref) => {
		const id = useId()
		return (
			<div className='flex w-full flex-col gap-1.5'>
				<label htmlFor={id} className='text-foreground text-left text-sm font-semibold'>
					{label}
				</label>

				<div className='relative'>
					{icon && (
						<div className='text-muted-foreground absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2'>
							{icon}
						</div>
					)}

					<input
						ref={ref}
						id={id}
						type={type}
						className={cn(
							'bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-11 w-full rounded-xl border-2 px-4 text-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50',
							icon ? 'pl-11' : 'pl-4',
							error ? 'border-destructive focus:border-destructive' : 'focus:border-accent',
							className
						)}
						{...rest}
					/>
				</div>

				{error && (
					<div className='text-destructive mt-1 flex items-center gap-1'>
						<MessageCircleWarning className='size-4 shrink-0' />
						<span className='text-xs font-medium'>{error}</span>
					</div>
				)}
			</div>
		)
	}
)

Input.displayName = 'Input'
