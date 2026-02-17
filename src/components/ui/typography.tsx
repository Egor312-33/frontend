import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../lib/utils'

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div' | 'p'

const typographyVariants = cva('', {
	variants: {
		variant: {
			'title-1': 'text-3xl font-semibold text-title mb-2',
			'title-2': 'scroll-m-20 text-3xl font-semibold tracking-tight',
			'title-3': 'scroll-m-20 text-2xl font-semibold tracking-tight',
			'title-4': 'scroll-m-20 text-xl font-semibold tracking-tight',
			'title-5': 'text-lg font-semibold',
			'sub-title': 'text-sm text-muted-foreground leading-relaxed',
			'body-1': 'text-base leading-7',
			'body-2': 'text-sm font-medium leading-none',
			'body-3': 'text-sm text-muted-foreground leading-relaxed',
			link: 'font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity'
		},
		hover: {
			default: 'hover:text-foreground transition-colors duration-200'
		}
	},
	defaultVariants: {
		variant: 'body-1'
	}
})

export type TypographyProps<T extends TypographyTag> =
	React.ComponentPropsWithoutRef<T> &
		VariantProps<typeof typographyVariants> & {
			tag?: T
			children: React.ReactNode
		}

export const Typography = <T extends TypographyTag = 'div'>({
	children,
	variant,
	tag,
	hover,
	className,
	...props
}: TypographyProps<T>) => {
	const Component = tag || 'div'

	return (
		<Component
			className={cn(typographyVariants({ variant, hover }), className)}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Typography
