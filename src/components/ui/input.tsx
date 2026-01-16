import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react' // Добавили useId
import { cn } from '../lib/utils'
import { LuMessageCircleWarning } from 'react-icons/lu'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: ReactNode
    error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, type = 'text', icon, error, className, ...rest }, ref) => {

        return (
            <div className="flex flex-col gap-1.5 w-full">
                <label
                    htmlFor={id}
                    className="text-sm font-semibold text-primary text-left"
                >
                    {label}
                </label>

                <div className="relative">
                    {icon && (
                        <div className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-muted-foreground">
                            {icon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={id}
                        type={type}
                        className={cn(
                            'w-full h-11 bg-secondary-dark border-2 border-border rounded-xl px-4 text-sm text-secondary-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-accent focus:bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed',
                            icon ? 'pl-11' : 'pl-4',
                            error ? 'border-destructive focus:border-destructive' : 'focus:border-accent',
                            className
                        )}
                        {...rest}
                    />
                </div>

                {error && (
                    <div className="flex items-center gap-1 text-destructive mt-1">
                        <LuMessageCircleWarning className="size-4 shrink-0" />
                        <span className="text-xs font-medium">{error}</span>
                    </div>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'