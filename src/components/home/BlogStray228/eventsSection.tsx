'use client'

import { ArrowUpRight, Calendar, Trophy, Zap } from 'lucide-react'
import Link from 'next/link'

import Typography from '@/components/ui/typography'

const events = [
	{
		title: 'Будка 2',
		subtitle: '2024 год',
		details: 'Одно из лучших солевых мероприятий',
		icon: Calendar
	},
	{
		title: 'Streamers Battle 9',
		subtitle: '2025 год',
		details: 'Олег в роли якоря, танет команду на дно',
		icon: Trophy
	},
	{
		title: 'Streamers Battle 8',
		subtitle: '2024 год',
		details: 'RAMZES и бездарная команда',
		icon: Zap
	}
]

export function EventsSection() {
	return (
		<section className='px-4 py-16 md:px-8 lg:px-12'>
			<div className='mx-auto max-w-300'>
				<ul className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
					{events.map((event, idx) => (
						<EventCard key={idx} {...event} />
					))}
				</ul>
			</div>
		</section>
	)
}

interface EventCardProps {
	title: string
	subtitle: string
	details: string
	icon: React.ComponentType<{ className?: string }>
}

function EventCard({ title, subtitle, details, icon: Icon }: EventCardProps) {
	return (
		<li className='h-full'>
			<div className='border-border from-card via-background to-card hover:border-primary/50 hover:shadow-primary/10 flex h-full flex-col gap-6 rounded-xl border bg-linear-to-br p-6 transition-all duration-300 hover:shadow-lg md:gap-8 md:rounded-2xl'>
				<div className='from-primary to-accent flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br p-2 lg:h-14 lg:w-14'>
					<Icon className='text-primary-foreground h-full w-full' />
				</div>

				<div className='flex items-start justify-between gap-4'>
					<Link
						href='/'
						className='group hover:text-primary flex-1 space-y-1 transition-colors'
					>
						<Typography
							variant='title-4'
							tag='h4'
							className='text-title group-hover:text-primary transition-colors'
						>
							{title}
						</Typography>
						<Typography
							variant='sub-title'
							tag='p'
							className='text-muted-foreground'
						>
							{subtitle}
						</Typography>
					</Link>

					<Link
						href='/'
						className='border-border bg-secondary/30 hover:border-primary hover:bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-200'
					>
						<ArrowUpRight className='text-muted-foreground hover:text-primary h-5 w-5 transition-colors' />
					</Link>
				</div>
				<Typography
					variant='body-3'
					tag='p'
					className='text-muted-foreground'
				>
					{details}
				</Typography>
			</div>
		</li>
	)
}
