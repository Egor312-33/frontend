'use server'
import Link from 'next/link'
import { type PropsWithChildren } from 'react'

import Typography from '../ui/typography'

interface AuthWrapperProps {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isShowSocial?: boolean
}

export async function AuthWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref,
	isShowSocial = false
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<div className='flex min-h-screen w-full'>
			<div className='flex w-full items-center justify-center p-8 lg:w-1/2'>
				<div className='w-full max-w-md'>
					<div className='from-secondary to-secondary-dark border-border bg-card text-card-foreground flex w-full flex-col gap-6 rounded-2xl border-2 p-6 shadow-lg'>
						<div>
							<Typography variant='title-1' tag='h3'>
								{heading}
							</Typography>
							{description && (
								<Typography variant='sub-title' tag='p'>
									{description}
								</Typography>
							)}
						</div>
						<div className='flex flex-col gap-6'>
							{isShowSocial && (
								<div className='text-muted-foreground text-sm'>
									Заглушка для соц. сетей
								</div>
							)}
							{children}
						</div>
						<div className='text-center'>
							{backButtonLabel && backButtonHref && (
								<Typography variant='sub-title' hover='default'>
									<Link href={backButtonHref}>
										{backButtonLabel}
									</Link>
								</Typography>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className='from-primary/20 via-accent/10 to-secondary hidden w-1/2 bg-linear-to-br lg:block'></div>
		</div>
	)
}
