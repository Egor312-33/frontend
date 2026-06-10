'use client'

import { cva } from 'class-variance-authority'
import { Tag } from 'lucide-react'

import { CATEGORIES, type CategoryKey } from '../lib/eventLayouts'

const categoryButton = cva(
	'group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',

	{
		variants: {
			tone: {
				primary: 'border-border/40 bg-card/40 hover:border-primary/30 hover:bg-primary/5',

				accent: 'border-border/40 bg-card/40 hover:border-accent/30 hover:bg-accent/5',

				destructive: 'border-border/40 bg-card/40 hover:border-destructive/30 hover:bg-destructive/5',

				foreground: 'border-border/40 bg-card/40 hover:border-foreground/40'
			},

			active: { true: '', false: '' }
		},

		compoundVariants: [
			{
				active: true,

				tone: 'primary',

				class: 'border-primary/60 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent shadow-[var(--shadow-primary-sm)] ring-1 ring-primary/30'
			},

			{
				active: true,

				tone: 'accent',

				class: 'border-accent/60 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent shadow-[0_2px_12px_rgba(190,242,100,0.18)] ring-1 ring-accent/30'
			},

			{
				active: true,

				tone: 'destructive',

				class: 'border-destructive/60 bg-gradient-to-br from-destructive/15 via-destructive/5 to-transparent shadow-[var(--shadow-destructive-sm)] ring-1 ring-destructive/30'
			},

			{
				active: true,

				tone: 'foreground',

				class: 'border-foreground/60 bg-gradient-to-br from-foreground/15 via-foreground/5 to-transparent ring-1 ring-foreground/30'
			}
		],

		defaultVariants: { tone: 'primary', active: false }
	}
)

const categoryGlow = cva(
	'pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-60 blur-2xl transition-opacity duration-500 bg-gradient-to-br',

	{
		variants: {
			tone: {
				primary: 'from-primary/30 to-transparent',

				accent: 'from-accent/30 to-transparent',

				destructive: 'from-destructive/30 to-transparent',

				foreground: 'from-foreground/20 to-transparent'
			},

			active: { true: '', false: 'opacity-0 group-hover:opacity-100' }
		},

		defaultVariants: { tone: 'primary', active: false }
	}
)

const iconWrap = cva('flex h-9 w-9 items-center justify-center rounded-lg transition-colors', {
	variants: {
		tone: {
			primary: 'bg-primary/15 text-primary border border-primary/30 group-hover:bg-primary/25',

			accent: 'bg-accent/15 text-accent border border-accent/30 group-hover:bg-accent/25',

			destructive:
				'bg-destructive/15 text-destructive border border-destructive/30 group-hover:bg-destructive/25',

			foreground: 'bg-foreground/10 text-foreground border border-foreground/30 group-hover:bg-foreground/20'
		}
	},

	defaultVariants: { tone: 'primary' }
})

const categoryCount = cva('text-2xl leading-none font-black tabular-nums', {
	variants: {
		active: { true: '', false: 'text-foreground/90' },

		tone: {
			primary: 'text-primary',

			accent: 'text-accent',

			destructive: 'text-destructive',

			foreground: 'text-foreground'
		}
	},

	compoundVariants: [{ active: false, class: 'text-foreground/90' }],

	defaultVariants: { active: false, tone: 'primary' }
})

export function CategoryStrip({
	active,

	onSelect,

	counts
}: {
	active: CategoryKey

	onSelect: (k: CategoryKey) => void

	counts: Record<CategoryKey, number>
}) {
	return (
		<div className='mb-8 sm:mb-10'>
			<div className='mb-4 flex items-center gap-2'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-7 w-7 items-center justify-center rounded-md border'>
					<Tag className='h-3.5 w-3.5' />
				</div>

				<h3 className='text-muted-foreground text-sm font-bold tracking-wider uppercase'>Категории</h3>

				<div className='from-border/60 ml-2 h-px flex-1 bg-linear-to-r to-transparent' />
			</div>

			<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
				{CATEGORIES.map(cat => {
					const Icon = cat.icon

					const isActive = active === cat.key

					return (
						<button
							key={cat.key}
							type='button'
							onClick={() => onSelect(cat.key)}
							className={categoryButton({ tone: cat.tone, active: isActive })}
						>
							<div className={categoryGlow({ tone: cat.tone, active: isActive })} />

							<div className='relative mb-3 flex items-start justify-between'>
								<div className={iconWrap({ tone: cat.tone })}>
									<Icon className='h-4 w-4' />
								</div>

								<span className={categoryCount({ tone: cat.tone, active: isActive })}>
									{counts[cat.key]}
								</span>
							</div>

							<div className='relative'>
								<p className='text-muted-foreground text-xs font-bold tracking-wider uppercase'>
									{cat.label}
								</p>

								<div className='mt-1 h-0.5 w-8 rounded-full bg-linear-to-r from-current/60 to-transparent opacity-60' />
							</div>
						</button>
					)
				})}
			</div>
		</div>
	)
}
