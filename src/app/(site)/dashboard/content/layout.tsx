'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

import { cn } from '@/components/lib/utils'
import Typography from '@/components/ui/typography'

const TABS = [
	{ id: 'videos', label: 'tabs.videos' },
	{ id: 'playlists', label: 'tabs.playlists' },
	{ id: 'articles', label: 'tabs.articles' }
] as const

interface ContentLayoutProps {
	children: ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
	const pathname = usePathname()
	const currentTab = pathname.split('/').pop() || 'videos'
	const t = useTranslations('dashboard.content')
	return (
		<div className='border-border from-card to-background relative w-full overflow-hidden rounded-2xl border bg-linear-to-br p-6 sm:p-8'>
			<div className='via-primary/60 absolute inset-x-0 top-0 h-px animate-pulse bg-linear-to-r from-transparent to-transparent' />

			<Typography variant='title-1' tag='h2' className='mb-2'>
				{t('heading.header')}
			</Typography>
			<Typography variant='body-3' tag='p' className='mb-6'>
				{t('heading.placeholder')}
			</Typography>

			<div className='relative mb-1'>
				<div className='border-border flex gap-1 border-b'>
					{TABS.map(tab => (
						<Link
							key={tab.id}
							href={`/dashboard/content/${tab.id}`}
							className={cn(
								'relative px-4 py-2.5 text-sm font-medium transition-all duration-200',
								currentTab === tab.id
									? 'text-primary'
									: 'text-muted-foreground hover:text-foreground'
							)}
						>
							{t(tab.label)}
							{currentTab === tab.id && (
								<span className='bg-primary absolute inset-x-0 bottom-0 h-0.5 rounded-full' />
							)}
						</Link>
					))}
				</div>
			</div>

			<div className='mt-4'>{children}</div>
		</div>
	)
}
