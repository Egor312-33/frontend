'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/components/lib/utils'

const tabs = [
	{ id: 'profile', label: 'Профиль' },
	{ id: 'account', label: 'Аккаунт' },
	{ id: 'appearance', label: 'Внешний вид' },
	{ id: 'notifications', label: 'Уведомления' },
	{ id: 'sessions', label: 'Сессии' }
]

export function SettingsTabsNav() {
	const pathname = usePathname()
	const currentTab = pathname.split('/').pop() || 'profile'

	return (
		<div className='border-border from-secondary-dark via-secondary to-secondary-dark flex gap-1 overflow-x-auto rounded-t-xl border-b-2 bg-linear-to-br p-2'>
			{tabs.map(tab => {
				const isActive = currentTab === tab.id
				return (
					<Link
						key={tab.id}
						href={`/dashboard/settings/${tab.id}`}
						className={cn(
							'relative shrink-0 rounded-lg px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all',
							isActive
								? 'from-primary/10 to-primary/5 text-primary bg-linear-to-br shadow-lg'
								: 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
						)}
					>
						{tab.label}
					</Link>
				)
			})}
		</div>
	)
}
