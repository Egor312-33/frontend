'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { cn } from '@/components/lib/utils'
import Typography from '@/components/ui/typography'

const tabs = [
	{ id: 'profile', label: 'Профиль' },
	{ id: 'account', label: 'Аккаунт' },
	{ id: 'appearance', label: 'Внешний вид' },
	{ id: 'notifications', label: 'Уведомления' },
	{ id: 'sessions', label: 'Сессии' }
]

interface SettingsLayoutProps {
	children: ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	const pathname = usePathname()

	const currentTab = pathname.split('/').pop() || 'profile'

	return (
		<div className='w-full'>
			<div className='border-border from-card via-background to-card relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 md:p-8'>
				<div className='via-primary absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent opacity-60' />

				<div className='mb-8'>
					<Typography variant='title-1' tag='h2'>
						Настройки
					</Typography>
					<Typography variant='body-3' tag='p'>
						Управляйте настройками своего аккаунта
					</Typography>
				</div>

				<div className='mb-8'>
					<div className='border-border from-secondary-dark via-secondary to-secondary-dark flex gap-1 overflow-x-auto rounded-t-xl border-b-2 bg-linear-to-br p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
						{tabs.map(tabItem => {
							const isActive = currentTab === tabItem.id

							return (
								<Link
									key={tabItem.id}
									href={`/dashboard/settings/${tabItem.id}`}
									className={cn(
										'relative shrink-0 cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300',
										isActive
											? 'from-primary/10 to-primary/5 text-primary shadow-primary/20 bg-linear-to-br shadow-lg'
											: 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
									)}
								>
									{tabItem.label}
									{isActive && (
										<span className='from-primary via-accent to-primary absolute right-0 bottom-0 left-0 h-0.5 rounded-t bg-linear-to-r' />
									)}
								</Link>
							)
						})}
					</div>
				</div>

				{children}
			</div>
		</div>
	)
}
