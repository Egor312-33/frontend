import { cn } from '@/components/lib/utils'

export type VideoSettingTabId = 'info' | 'access' | 'text'

const TABS: Array<{ id: VideoSettingTabId; label: string; number: number }> = [
	{ id: 'info', label: 'Информация', number: 1 },
	{ id: 'access', label: 'Доступ', number: 2 },
	{ id: 'text', label: 'Текст', number: 3 }
]
interface VideoSettingsTabNavProps {
	active: VideoSettingTabId
	onChange: (id: VideoSettingTabId) => void
}

export function VideoSettingsTabNav({ active, onChange }: VideoSettingsTabNavProps) {
	return (
		<div className='relative flex items-start justify-between'>
			<div className='border-border absolute top-4.5 right-9 left-9 h-px border-t' />
			{TABS.map(tab => (
				<button
					key={tab.id}
					type='button'
					onClick={() => onChange(tab.id)}
					className='relative z-10 flex flex-col items-center gap-2'
				>
					<div
						className={cn(
							'flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-200',
							active === tab.id
								? 'border-primary bg-primary text-primary-foreground'
								: 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'
						)}
					>
						{tab.number}
					</div>
					<span
						className={cn(
							'text-xs whitespace-nowrap transition-colors duration-200',
							active === tab.id ? 'text-primary' : 'text-muted-foreground'
						)}
					>
						{tab.label}
					</span>
				</button>
			))}
		</div>
	)
}
