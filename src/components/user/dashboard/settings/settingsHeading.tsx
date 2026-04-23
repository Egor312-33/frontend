import { ReactNode } from 'react'

import Typography from '@/components/ui/typography'

interface SettingsHeadingProps {
	children?: ReactNode
	header: string
	placeholder: string
}

export function SettingsHeading({
	header,
	placeholder,
	children
}: SettingsHeadingProps) {
	return (
		<div className='flex flex-col gap-5'>
			<div className='relative'>
				<div className='mb-2 flex items-center gap-3'>
					<div className='bg-primary shadow-primary/50 h-8 w-0.75 rounded-full shadow-[0_0_12px_2px]' />
					<Typography variant='title-3' tag='h3'>
						{header}
					</Typography>
				</div>
				<Typography
					variant='body-3'
					tag='p'
					className='text-muted-foreground border-border ml-0.75 border-l-2 pl-4.5'
				>
					{placeholder}
				</Typography>
				<div className='from-primary/40 via-border mt-4 h-px bg-linear-to-r to-transparent' />
			</div>

			{children}
		</div>
	)
}
