'use server'

import {
	Ambulance,
	BottleWine,
	Coins,
	Egg,
	Hand,
	Rat,
	Swords,
	Syringe,
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
			<div className='group relative flex w-full cursor-pointer items-center justify-center transition-all duration-700 lg:w-1/2'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='bg-primary/30 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl' />
					<div className='bg-accent/25 absolute -bottom-32 left-1/4 h-80 w-80 rounded-full blur-3xl' />
					<Syringe className='text-primary absolute top-4 left-4 h-8 w-8 -rotate-12 opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-100 lg:top-20 lg:left-20 lg:h-16 lg:w-16' />
					<Rat className='text-accent absolute top-4 right-4 h-8 w-8 rotate-12 opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-100 lg:top-20 lg:right-20 lg:h-16 lg:w-16' />
					<BottleWine className='text-primary absolute right-4 bottom-4 h-8 w-8 rotate-12 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 lg:right-20 lg:bottom-32 lg:h-12 lg:w-12' />
					<Coins className='text-accent absolute bottom-4 left-4 h-8 w-8 -rotate-12 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 lg:bottom-32 lg:left-20 lg:h-12 lg:w-12' />
				</div>

				<div className='relative z-10 flex flex-col items-center gap-6 p-8 text-center'>
					<div className='relative h-48 w-48 transition-transform duration-500 group-hover:scale-110 sm:h-64 sm:w-64 lg:h-80 lg:w-80'>
						<Image
							src='/images/home/left-image.WebP'
							alt='Light Hero'
							className='ring-primary/50 h-full w-full rounded-full object-cover shadow-2xl ring-2'
							width={500}
							height={460}
						/>
						<div className='absolute -top-4 -right-4'>
							<ButtonIcon variant='default' size='lg'>
								<Hand size={10} />
							</ButtonIcon>
						</div>
					</div>

					<div className='space-y-2'>
						<Typography variant='title-1' tag='h2'>
							Олег Бочаров
						</Typography>
						<Typography variant='sub-title' tag='p'>
							Stray228, терпила верхнего интернета, который за
							деньги готов на всё
						</Typography>
					</div>

					<Button
						variant='default'
						size='lg'
						className='shadow-xl'
						href='/stray228'
					>
						Открыть статью
					</Button>
				</div>
			</div>

			<div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
				<div className='relative'>
					<div className='from-primary to-accent flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br shadow-(--shadow-primary-md) sm:h-24 sm:w-24 lg:h-32 lg:w-32'>
						<Swords className='text-primary-foreground h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12' />
					</div>
					<div className='border-primary absolute inset-0 animate-ping rounded-full border-4 opacity-40' />
					<div className='bg-primary/20 absolute inset-0 -m-4 rounded-full blur-xl' />
				</div>
			</div>

			<div className='bg-card group relative flex h-full w-full cursor-pointer items-center justify-center transition-all duration-700 lg:w-1/2'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='bg-primary/30 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl' />
					<div className='bg-accent/25 absolute right-1/4 -bottom-32 h-80 w-80 rounded-full blur-3xl' />
					<Ambulance className='text-accent absolute top-4 left-4 h-8 w-8 -rotate-12 opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-100 lg:top-20 lg:left-20 lg:h-16 lg:w-16' />
					<Tv className='text-primary absolute top-4 right-4 h-8 w-8 rotate-12 opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:opacity-100 lg:top-20 lg:right-20 lg:h-16 lg:w-16' />
					<VibrateOff className='text-accent absolute right-4 bottom-4 h-8 w-8 rotate-12 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 lg:right-20 lg:bottom-32 lg:h-12 lg:w-12' />
					<Egg className='text-primary absolute bottom-4 left-4 h-8 w-8 -rotate-12 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 lg:bottom-32 lg:left-20 lg:h-12 lg:w-12' />
				</div>

				<div className='relative z-10 flex flex-col items-center gap-6 p-12 text-center'>
					<div className='relative w-full max-w-lg transition-transform duration-500 group-hover:scale-105 sm:max-w-xl lg:max-w-2xl'>
						<Image
							src='/images/home/right-image.WebP'
							alt='Dark Hero'
							width={1064}
							height={520}
							className='ring-primary/50 aspect-1064/520 h-auto w-full rounded-2xl object-cover shadow-2xl ring-2'
						/>
						<div className='absolute -right-6 -bottom-10 z-20 sm:-top-8 sm:-right-16'>
							<ButtonIcon variant='default' size='lg'>
								<Hand size={10} />
							</ButtonIcon>
						</div>
					</div>

					<div className='space-y-2'>
						<Typography variant='title-1' tag='h2'>
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
