'use client'

import { cva } from 'class-variance-authority'

import { CATEGORIES, type CategoryKey } from '../lib/eventLayouts'

const pill = cva(
	'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer border',
	{
		variants: {
			tone: {
				primary: 'text-foreground/70 border-transparent hover:bg-primary/10 hover:text-primary',
				accent: 'text-foreground/70 border-transparent hover:bg-accent/10 hover:text-accent',
				destructive: 'text-foreground/70 border-transparent hover:bg-destructive/10 hover:text-destructive',
				foreground: 'text-foreground/70 border-transparent hover:bg-foreground/10 hover:text-foreground'
			},
			active: { true: '', false: '' }
		},
		compoundVariants: [
			{ active: true, tone: 'primary', class: 'bg-primary/15 text-primary border-primary/40' },
			{ active: true, tone: 'accent', class: 'bg-accent/15 text-accent border-accent/40' },
			{ active: true, tone: 'destructive', class: 'bg-destructive/15 text-destructive border-destructive/40' },
			{ active: true, tone: 'foreground', class: 'bg-foreground/10 text-foreground border-foreground/30' }
		],
		defaultVariants: { tone: 'primary', active: false }
	}
)

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
		<div className='mb-8 flex scrollbar-none gap-2 overflow-x-auto pb-1'>
			{CATEGORIES.map(cat => {
				const Icon = cat.icon
				const isActive = active === cat.key

				return (
					<button
						key={cat.key}
						type='button'
						onClick={() => onSelect(cat.key)}
						className={pill({ tone: cat.tone, active: isActive })}
					>
						<Icon className='h-4 w-4 shrink-0' />
						{cat.label}
						<span className='text-xs opacity-60'>{counts[cat.key]}</span>
					</button>
				)
			})}
		</div>
	)
}
