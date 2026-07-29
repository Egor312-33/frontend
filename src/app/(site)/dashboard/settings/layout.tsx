import Typography from '@/components/ui/typography'
import { SettingsTabsNav } from '@/components/user/dashboard/settings/SettingsTabsNav'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-full'>
			<div className='border-border from-card via-background to-card relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 md:p-8'>
				<div className='mb-8'>
					<Typography variant='title-1' tag='h2'>
						Настройки
					</Typography>
					<Typography variant='body-3' tag='p'>
						Управляйте настройками своего аккаунта
					</Typography>
				</div>

				<div className='mb-8'>
					<SettingsTabsNav />
				</div>

				{children}
			</div>
		</div>
	)
}
