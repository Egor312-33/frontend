'use server'
import {
	Ambulance,
	Crown,
	Egg,
	Hand,
	Sparkles,
	Swords,
	Tv,
	VibrateOff
} from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/buttonIcon'
import Typography from '@/components/ui/typography'

export async function HeroBattle() {
	return (
		<div className='relative flex h-[calc(100vh-3rem)] w-full flex-col overflow-hidden lg:flex-row'>
			<div
				className='group relative flex w-full cursor-pointer items-center justify-center transition-all duration-700 lg:w-1/2'
				style={{
					background:
						'linear-gradient(135deg, var(--card) 0%, var(--background) 50%, var(--muted) 100%)'
				}}
			>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl' />
					<div className='bg-accent/10 absolute -bottom-32 left-1/4 h-80 w-80 rounded-full blur-3xl' />

					<Crown className='text-title/70 absolute top-10 right-4 h-12 w-12 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 sm:right-10 sm:h-14 sm:w-14 lg:top-20 lg:right-20 lg:h-16 lg:w-16' />
					<Sparkles className='text-title/70 absolute bottom-10 left-4 h-8 w-8 -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 sm:bottom-20 sm:left-10 lg:bottom-32 lg:left-20 lg:h-12 lg:w-12' />
				</div>

				<div className='relative z-10 flex flex-col items-center gap-6 p-8 text-center'>
					<div className='relative h-48 w-48 transition-transform duration-500 group-hover:scale-110 sm:h-64 sm:w-64 lg:h-80 lg:w-80'>
						<Image
							src='/images/home/left-image.WebP'
							alt='Light Hero'
							className='ring-primary/50 h-full w-full rounded-full object-cover shadow-2xl ring-4'
							width={1064}
							height={520}
						/>
						<div className='absolute -top-4 -right-4'>
							<ButtonIcon variant='default' size='lg'>
								<Hand size={10} />
							</ButtonIcon>
						</div>
					</div>

					<div className='space-y-2'>
						<Typography
							variant='title-1'
							tag='h2'
							className='text-title'
						>
							Рандомный текст
						</Typography>
						<Typography variant='sub-title' tag='p'>
							Ясность. Простота. Элегантность.
						</Typography>
					</div>

					<Button
						variant='default'
						size='lg'
						className='shadow-xl'
						href='/stray228'
					>
						Выбрать путь
					</Button>
				</div>
			</div>

			<div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:left-1/2'>
				<div className='relative'>
					<div className='from-primary via-accent to-secondary flex h-20 w-20 items-center justify-center rounded-full border-4 bg-linear-to-br shadow-2xl sm:h-24 sm:w-24 lg:h-32 lg:w-32'>
						<Swords className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12' />
					</div>

					<div className='border-border-sub absolute inset-0 animate-ping rounded-full border-4 opacity-20' />
				</div>
			</div>

			<div className='bg-card group relative flex h-full w-full cursor-pointer items-center justify-center transition-all duration-700 lg:w-1/2'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='bg-primary/20 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl' />
					<div className='bg-accent/20 absolute right-1/4 -bottom-32 h-80 w-80 rounded-full blur-3xl' />
					<Ambulance className='text-title/70 absolute top-4 left-4 h-8 w-8 -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 lg:top-20 lg:left-20 lg:h-16 lg:w-16' />
					<Tv className='text-title/70 absolute top-4 right-4 h-8 w-8 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 lg:top-20 lg:right-20 lg:h-16 lg:w-16' />
					<VibrateOff className='text-title/70 absolute right-4 bottom-4 h-8 w-8 rotate-12 transition-transform duration-500 group-hover:scale-110 lg:right-20 lg:bottom-32 lg:h-12 lg:w-12' />
					<Egg className='text-title/70 absolute bottom-4 left-4 h-8 w-8 -rotate-12 transition-transform duration-500 group-hover:scale-110 lg:bottom-32 lg:left-20 lg:h-12 lg:w-12' />
				</div>

				<div className='relative z-10 flex flex-col items-center gap-6 p-12 text-center'>
					<div className='relative w-full max-w-lg transition-transform duration-500 group-hover:scale-105 sm:max-w-xl lg:max-w-2xl'>
						<Image
							src='/images/home/right-image.WebP'
							alt='Dark Hero'
							width={1064}
							height={520}
							className='ring-primary/50 aspect-1064/520 h-auto w-full rounded-2xl object-cover shadow-2xl ring-4'
						/>
						<div className='absolute -right-6 -bottom-10 z-20 sm:-top-8 sm:-right-16'>
							<ButtonIcon variant='default' size='lg'>
								<Hand size={10} />
							</ButtonIcon>
						</div>
					</div>

					<div className='space-y-2'>
						<Typography
							variant='title-1'
							tag='h2'
							className='text-title'
						>
							Валентин депутат
						</Typography>
						<Typography variant='sub-title' tag='p'>
							Каноничный представить треш стримеров, хотя и
							кажется жертвой, это далеко не так
						</Typography>
					</div>

					<Button variant='default' size='lg' className='shadow-xl'>
						Открыть статью
					</Button>
				</div>
			</div>
		</div>
	)
}
