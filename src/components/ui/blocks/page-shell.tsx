'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@/components/lib/utils'

const pageShellVariants = cva('relative w-full overflow-hidden', {
	variants: {
		radius: {
			none: '',
			sm: 'rounded-lg',
			md: 'rounded-xl',
			lg: 'rounded-2xl',
			xl: 'rounded-3xl'
		}
	},
	defaultVariants: {
		radius: 'xl'
	}
})

const overlayVariants = cva('absolute inset-0', {
	variants: {
		overlay: {
			none: '',
			light: 'bg-linear-to-t from-background/60 via-background/20 to-transparent',
			medium: 'bg-linear-to-t from-background/90 via-background/40 to-transparent',
			heavy: 'bg-linear-to-t from-background/95 via-background/60 to-transparent'
		}
	},
	defaultVariants: {
		overlay: 'medium'
	}
})

type PageShellProps = VariantProps<typeof pageShellVariants> &
	VariantProps<typeof overlayVariants> & {
		bannerUrl: string | null
		bannerAlt?: string
		children: React.ReactNode
		className?: string
		bannerClassName?: string
		bannerHeight?: string
		animate?: boolean
	}

export function PageShell({
	bannerUrl,
	bannerAlt = '',
	radius,
	overlay,
	children,
	className,
	bannerClassName,
	bannerHeight = 'clamp(200px, 28vw, 360px)',
	animate = true
}: PageShellProps) {
	return (
		<section className={cn('relative', className)}>
			<div className={cn(pageShellVariants({ radius }), bannerClassName)} style={{ height: bannerHeight }}>
				{bannerUrl ? (
					<motion.img
						initial={animate ? { scale: 1.05, opacity: 0 } : false}
						animate={animate ? { scale: 1, opacity: 1 } : false}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						src={bannerUrl}
						alt={bannerAlt}
						className='absolute inset-0 h-full w-full object-cover'
					/>
				) : (
					<div className='from-primary/10 via-accent/5 to-background absolute inset-0 h-full w-full bg-linear-to-br' />
				)}

				<div className={overlayVariants({ overlay })} />
				<div className='absolute right-0 bottom-0 left-0'>{children}</div>
			</div>
		</section>
	)
}
