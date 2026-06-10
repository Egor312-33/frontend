'use client'

import { type Variants, motion } from 'framer-motion'
import { Shield } from 'lucide-react'

import type { SquadCardForView } from '@/types/squad'

import { SquadCard } from './SquadCard'

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.06, delayChildren: 0.05 }
	}
}

export function SquadsGrid({ squads }: { squads: SquadCardForView[] }) {
	if (squads.length === 0) {
		return (
			<div className='border-border text-muted-foreground flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-20 text-center'>
				<Shield className='h-10 w-10 opacity-50' />
				<div className='text-foreground text-lg font-medium'>Сквадов пока нет</div>
				<p className='max-w-sm text-sm'>
					Как только в админке появится первый сквад, он сразу отобразится здесь.
				</p>
			</div>
		)
	}

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='show'
			className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'
		>
			{squads.map(squad => (
				<SquadCard key={squad.id} squad={squad} />
			))}
		</motion.div>
	)
}
