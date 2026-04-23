import type { Metadata } from 'next'

import Typography from '@/components/ui/typography'
import { ChangeAvatarForm } from '@/components/user/dashboard/settings/changeAvatar'
import { SettingsHeading } from '@/components/user/dashboard/settings/settingsHeading'

export const metadata: Metadata = {
	title: 'Настройки профиля',
	description: 'Измените информацию о своем профиле'
}
export default async function ProfilePage() {
	return (
		<SettingsHeading
			header='Профиль'
			placeholder='Измените информацию о своем профиле'
		>
			<div className='space-y-4'>
				<ChangeAvatarForm />
				<PlaceholderCard title='ChangeInfoForm' />
				<PlaceholderCard title='SocialLinksForm' />
			</div>
		</SettingsHeading>
	)
}

function PlaceholderCard({ title }: { title: string }) {
	return (
		<div className='border-border from-card to-background hover:border-primary/40 relative overflow-hidden rounded-xl border bg-linear-to-br p-6 transition-all duration-200'>
			<div className='via-border absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent' />
			<Typography variant='body-2' className='text-muted-foreground'>
				🔧 {title}
			</Typography>
		</div>
	)
}
