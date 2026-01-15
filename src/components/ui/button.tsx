import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-[var(--shadow-primary-sm)] hover:shadow-[var(--shadow-primary-md)] hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-[var(--shadow-primary-sm)]',
                destructive: 'bg-gradient-to-br from-destructive to-destructive-dark text-destructive-foreground shadow-[var(--shadow-destructive-sm)] hover:shadow-[var(--shadow-destructive-md)] hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-[var(--shadow-destructive-sm)]',
                outline: 'border-2 border-border bg-background text-foreground hover:bg-secondary hover:border-accent hover:text-secondary-foreground shadow-sm hover:shadow-md transition-all disabled:hover:bg-background disabled:hover:border-border disabled:hover:text-foreground disabled:hover:shadow-sm',
                secondary: 'bg-gradient-to-br from-secondary to-secondary-dark text-secondary-foreground shadow-md hover:shadow-lg hover:from-secondary-hover hover:to-secondary-dark hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-md disabled:hover:from-secondary disabled:hover:to-secondary-dark',
                ghost: 'text-foreground hover:bg-secondary/50 hover:text-secondary-foreground transition-colors disabled:hover:bg-transparent disabled:hover:text-foreground',
                link: 'text-accent hover:text-primary underline-offset-4 hover:underline font-semibold disabled:no-underline'
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-xl px-3 text-xs',
                lg: 'h-12 rounded-xl px-8 text-base',
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

export function Button({
    className,
    variant,
    size,
    loading = false,
    startIcon,
    endIcon,
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                buttonVariants({ variant, size, className }),
                loading && !disabled && 'cursor-wait',
                disabled && !loading && 'cursor-not-allowed'
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}

            {startIcon && !loading && (
                <span className="flex items-center justify-center">{startIcon}</span>
            )}

            {children}

            {endIcon && (
                <span className="flex items-center justify-center">{endIcon}</span>
            )}
        </button>
    );
}