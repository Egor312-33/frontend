import { Layers, type LucideIcon, Shield, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

type SquadsStats = {
	totalSquads: number
	totalStreamers: number
	totalEpochs: number
}

interface StatItem {
	icon: LucideIcon
	key: 'squads' | 'streamers' | 'epochs'
	valueKey: keyof SquadsStats
}

const STATS_ITEMS: StatItem[] = [
	{ icon: Shield, key: 'squads', valueKey: 'totalSquads' },
	{ icon: Users, key: 'streamers', valueKey: 'totalStreamers' },
	{ icon: Layers, key: 'epochs', valueKey: 'totalEpochs' }
] as const

export function SquadsPageHeader({ stats }: { stats: SquadsStats }) {
	const t = useTranslations('squadsPage')

	return (
		<section className='border-border relative overflow-hidden border-b'>
			<div
				aria-hidden
				className='bg-primary/15 pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-3xl'
			/>
			<div
				aria-hidden
				className='bg-accent/10 pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full blur-3xl'
			/>

			<div className='relative mx-auto max-w-7xl px-6 pt-16 pb-12'>
				<div className='text-accent mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase'>
					<Shield className='h-4 w-4' />
					{t('badge')}
				</div>

				<h1 className='text-4xl font-bold tracking-tight text-balance sm:text-5xl'>{t('title')}</h1>

				<p className='text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed'>{t('description')}</p>

				<div className='border-border/60 mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6'>
					{STATS_ITEMS.map(item => {
						const value = stats[item.valueKey]
						return (
							<div key={item.key} className='flex items-center gap-3'>
								<div className='bg-secondary text-accent flex h-10 w-10 items-center justify-center rounded-xl'>
									<item.icon className='h-5 w-5' />
								</div>
								<div>
									<div className='text-2xl leading-none font-bold tabular-nums'>{value}</div>
									<div className='text-muted-foreground mt-1 text-xs tracking-wide uppercase'>
										{t(`stats.${item.key}`, { count: value })}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
