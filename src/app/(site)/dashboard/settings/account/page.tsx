import Typography from '@/components/ui/typography'

export default function AccountPage() {
	return (
		<>
			<div className='border-border from-secondary-dark/50 to-background relative mb-6 rounded-xl border bg-linear-to-br p-6'>
				<div className='via-primary absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent' />
				<div className='mb-2 flex items-center gap-3'>
					<div className='from-primary to-accent shadow-primary/40 h-6 w-1 rounded-full bg-linear-to-b shadow-lg' />
					<Typography
						variant='title-3'
						tag='h3'
						className='text-title'
					>
						Аккаунт
					</Typography>
				</div>
				<Typography
					variant='body-3'
					tag='p'
					className='border-border text-muted-foreground border-l-2 pl-4'
				>
					Измените настройки своего аккаунта
				</Typography>
			</div>

			{/* Контент */}
			<div className='space-y-4'>
				<PlaceholderCard title='ChangeEmailForm' />
				<PlaceholderCard title='ChangePasswordForm' />
				<PlaceholderCard title='Security Section' />
				<PlaceholderCard title='DeactivateCard' />
			</div>
		</>
	)
}

function PlaceholderCard({ title }: { title: string }) {
	return (
		<div className='border-border from-card to-background hover:border-primary/50 rounded-xl border bg-linear-to-br p-6 transition-all duration-200'>
			<Typography variant='body-2' className='text-muted-foreground'>
				🔧 {title}
			</Typography>
		</div>
	)
}
