import { cva } from 'class-variance-authority'

const statRow = cva('flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors', {
	variants: {
		highlight: { true: 'bg-primary/10 border-primary/20 border', false: 'hover:bg-muted/40' }
	},
	defaultVariants: { highlight: false }
})

const statRowValue = cva('rounded-md border px-2.5 py-0.5 font-bold tabular-nums', {
	variants: {
		tone: {
			primary: 'bg-muted/50 text-foreground border-border/30',
			destructive: 'bg-destructive/10 text-destructive border-destructive/30',
			highlight: 'bg-primary/20 text-primary border-primary/40'
		}
	},
	defaultVariants: { tone: 'primary' }
})

export function StatRow({
	label,
	value,
	highlight,
	tone = 'primary'
}: {
	label: string
	value: number
	highlight?: boolean
	tone?: 'primary' | 'destructive'
}) {
	return (
		<div className={statRow({ highlight })}>
			<span className='text-muted-foreground'>{label}</span>

			<span className={statRowValue({ tone: highlight ? 'highlight' : tone })}>{value}</span>
		</div>
	)
}
