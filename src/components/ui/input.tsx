import type { ComponentProps } from 'react'
import { cn } from '../lib/utils'

export function Input({ className, type, ...props }: ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot='input'
            className={cn(
                'w-full h-11 bg-secondary-dark border-2 border-border rounded-xl px-4 text-sm text-secondary-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-accent focus:bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
            {...props}
        />
    )
}

