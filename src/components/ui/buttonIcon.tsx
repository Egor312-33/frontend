import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { Pencil, Trash, X } from "lucide-react";

const buttonIconVariants = cva(
    'inline-flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 disabled:opacity-50 [&_svg]:w-4 [&_svg]:h-4',
    {
        variants: {
            variant: {
                remove: 'bg-gradient-to-br from-destructive/10 to-destructive/5 text-destructive-light border border-destructive/30 shadow-sm hover:bg-gradient-to-br hover:from-destructive/20 hover:to-destructive/10 hover:border-destructive/50 hover:shadow-[var(--shadow-destructive-hover)] hover:text-destructive hover:scale-105 active:scale-95 disabled:hover:scale-100',
                change: 'bg-gradient-to-br from-accent/10 to-accent/5 text-accent border border-accent/30 shadow-sm hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10 hover:border-accent/50 hover:shadow-[var(--shadow-accent-hover)] hover:text-primary hover:scale-105 active:scale-95 disabled:hover:scale-100',
                x: 'bg-gradient-to-br from-accent/10 to-accent/5 text-accent border border-accent/30 shadow-sm hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10 hover:border-accent/50 hover:shadow-[var(--shadow-accent-hover)] hover:text-primary hover:scale-105 active:scale-95 disabled:hover:scale-100',
                default: 'bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-[var(--shadow-primary-sm)] hover:shadow-[var(--shadow-primary-md)] hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-[var(--shadow-primary-sm)]',
                destructive: 'bg-gradient-to-br from-destructive to-destructive-dark text-destructive-foreground shadow-[var(--shadow-destructive-sm)] hover:shadow-[var(--shadow-destructive-md)] hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-[var(--shadow-destructive-sm)]',
                outline: 'border-2 border-border bg-background text-foreground hover:bg-secondary hover:border-accent hover:text-secondary-foreground shadow-sm hover:shadow-md transition-all disabled:hover:bg-background disabled:hover:border-border disabled:hover:text-foreground disabled:hover:shadow-sm',
                secondary: 'bg-gradient-to-br from-secondary to-secondary-dark text-secondary-foreground shadow-md hover:shadow-lg hover:from-secondary-hover hover:to-secondary-dark hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-md disabled:hover:from-secondary disabled:hover:to-secondary-dark',
                ghost: 'text-foreground hover:bg-secondary/50 hover:text-secondary-foreground transition-colors disabled:hover:bg-transparent disabled:hover:text-foreground'
            },
            size: {
                default: 'h-10 w-10 p-2.5',
                sm: 'h-9 w-9 p-2 rounded-xl',
                lg: 'h-12 w-12 p-3 rounded-xl'
            },
            iconLu: {
                true: '[&_svg]:fill-none'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

interface ButtonIconProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonIconVariants> {
    loading?: boolean;
}

export function ButtonIcon({
    className,
    variant,
    size,
    loading = false,
    disabled,
    children,
    ...props
}: ButtonIconProps) {
    let icon: React.ReactNode = null;

    switch (variant) {
        case "remove":
            icon = <Trash />;
            break;
        case "change":
            icon = <Pencil />;
            break;
        case "x":
            icon = <X />;
            break;
    }

    const isLoading = loading && !disabled;
    const isDisabled = disabled && !loading;

    return (
        <button
            type="button"
            className={cn(
                buttonIconVariants({ variant, size, className }),
                isLoading && 'cursor-wait',
                isDisabled && 'cursor-not-allowed',
                !isLoading && !isDisabled && 'cursor-pointer'
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
                icon || children
            )}
        </button>
    );
}


