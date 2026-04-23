'use server'
import { getTranslations } from 'next-intl/server'

import { cn } from '@/components/lib/utils'
import Typography from '@/components/ui/typography'

import { ContentVideoList } from './contentVideoIList'

const Tabletabs = ['video', 'access', 'views', 'percentage']

export async function ContentVideoChannel() {
	const t = await getTranslations('dashboard.content.videos.tabs')
	return (
		<div>
			<div className='border-border bg-secondary/40 grid grid-cols-[4fr_1fr_1fr_1fr] border-b px-6 py-3 max-sm:hidden'>
				{Tabletabs.map((tab, key) => (
					<Typography
						key={key}
						variant='body-3'
						className={cn('ml-10 truncate uppercase max-lg:text-xs', key > 0 && 'justify-self-center')}
					>
						{t(tab)}
					</Typography>
				))}
			</div>
			<ContentVideoList />
		</div>
	)
}
