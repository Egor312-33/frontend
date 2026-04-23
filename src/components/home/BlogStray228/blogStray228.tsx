'use server'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'

import { EventsSection } from './eventsSection'

const slides = [
	'/images/home/stray228/hero.png',
	'/images/home/stray228/photo/tongue-stray.png',
	'/images/home/stray228/hero.png',
	'/images/home/stray228/hero.png',
	'/images/home/stray228/photo/tongue-stray.png',
	'/images/home/stray228/photo/tongue-stray.png'
]

const numbers = [
	{
		number: '80.9',
		text: 'Был попущен'
	},
	{
		number: '6.3',
		text: 'Для себя выиграл'
	},
	{
		number: '3.1',
		text: 'Поймал запретку'
	}
]

export async function BlogStray228() {
	return (
		<>
			<section className='px-4 py-8 md:px-8 lg:px-32'>
				<div className='mx-auto max-w-6xl'>
					<div className='grid grid-cols-1 gap-8 pb-10 md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto] lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr]'>
						<div className='max-w-2xl space-y-6 md:col-start-1 md:row-start-1 lg:pr-16'>
							<Typography
								variant='title-1'
								tag='h3'
								className='text-3xl sm:text-4xl lg:text-5xl'
							>
								Главный попуск и амбассадор gachi-культуры
								Stray228
							</Typography>
							<Typography
								variant='body-1'
								tag='p'
								className='text-muted-foreground leading-relaxed'
							>
								Усатая жужулица, известная как белгородский
								фрик, obla-дающий порванным бубновым тузом.
								Данный представитель млекопитающих, 6 лет играет
								в dota2, чтобы слушать и развивать gachi, данной
								крысе, принадлежит хит &quot;Обожаю ММ right
								version&quot;
							</Typography>
							<div className='flex gap-3'>
								<Button variant='default'>Автор</Button>
								<Button variant='secondary'>
									Узнать больше
								</Button>
							</div>
						</div>

						<div className='flex items-start justify-center pt-0 md:col-start-2 md:row-span-2 md:row-start-1 md:pt-8'>
							<RotatingCube slides={slides} />
						</div>

						<div className='flex items-center md:col-start-1 md:row-start-2 lg:justify-start'>
							<dl className='grid w-full max-w-2xl grid-cols-3 gap-0'>
								{numbers.map((item, idx) => (
									<div
										key={idx}
										className='border-border flex flex-col-reverse items-start pl-6 first:pl-0 last:border-r-0'
										style={{
											borderRight:
												idx !== numbers.length - 1
													? '1px solid var(--border)'
													: 'none'
										}}
									>
										<dt className='text-muted-foreground text-sm'>
											{item.text}
										</dt>
										<dd className='text-foreground text-3xl font-semibold'>
											<span className='text-primary'>
												{item.number}
											</span>
											K
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</section>
			<EventsSection />
		</>
	)
}

function RotatingCube({ slides }: { slides: string[] }) {
	return (
		<div className='cube-container relative mx-auto h-50 w-50 md:h-75 md:w-75'>
			<div className='cube-wrapper absolute h-full w-full transform-3d'>
				{slides.map((src, idx) => (
					<div
						key={idx}
						className='cube-face absolute h-full w-full backface-visible'
						style={{
							transform: getCubeFaceTransform(idx)
						}}
					>
						<Image
							src={src}
							alt={`Slide ${idx + 1}`}
							width={300}
							height={300}
							className='h-full w-full rounded object-cover object-center p-0.5'
							style={{
								background:
									'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)'
							}}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

function getCubeFaceTransform(index: number): string {
	const transforms = [
		'rotateY(0deg) translateZ(var(--cube-size))', // front
		'rotateY(180deg) translateZ(var(--cube-size))', // back
		'rotateY(90deg) translateZ(var(--cube-size))', // right
		'rotateY(-90deg) translateZ(var(--cube-size))', // left
		'rotateX(90deg) translateZ(var(--cube-size))', // top
		'rotateX(-90deg) translateZ(var(--cube-size))' // bottom
	]

	return transforms[index] || transforms[0]
}
