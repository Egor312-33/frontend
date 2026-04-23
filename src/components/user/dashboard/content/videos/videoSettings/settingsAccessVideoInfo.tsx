import { Aperture, Eye, Lock } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/components/lib/utils'
import Typography from '@/components/ui/typography'

import { VideoSettingsFormData } from '@/schemes/dashboard/content/video-settings.schema'
import { Access } from '@/shared/gql/graphql'

const ACCESS_OPTIONS = [
	{ value: Access.Public, icon: Aperture, label: 'Открытое', description: 'Видео доступно всем пользователям' },
	{ value: Access.Bylink, icon: Eye, label: 'По ссылке', description: 'Видео доступно только по прямой ссылке' },
	{ value: Access.Private, icon: Lock, label: 'Закрытое', description: 'Видео доступно только вам' }
] as const

export function SettingsAccessVideoInfo() {
	const { watch, setValue } = useFormContext<VideoSettingsFormData>()
	const current = watch('access')

	return (
		<div className='flex flex-col gap-3'>
			<Typography variant='body-3'>Выберите, кто может просматривать это видео</Typography>
			{ACCESS_OPTIONS.map(option => {
				const Icon = option.icon
				const isActive = current === option.value
				return (
					<button
						key={option.value}
						type='button'
						onClick={() => setValue('access', option.value, { shouldDirty: true })}
						className={cn(
							'flex items-start gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200',
							isActive
								? 'border-primary bg-primary/5 shadow-(--shadow-primary-sm)'
								: 'border-border hover:border-primary/40 hover:bg-secondary/30'
						)}
					>
						<div
							className={cn(
								'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
								isActive
									? 'border-primary/40 bg-primary/10 text-primary'
									: 'border-border bg-background text-muted-foreground'
							)}
						>
							<Icon className='h-5 w-5' />
						</div>
						<div className='pt-0.5'>
							<p
								className={cn(
									'text-sm font-semibold transition-colors duration-200',
									isActive ? 'text-primary' : 'text-foreground'
								)}
							>
								{option.label}
							</p>
							<p className='text-muted-foreground mt-0.5 text-xs'>{option.description}</p>
						</div>
					</button>
				)
			})}
		</div>
	)
}
