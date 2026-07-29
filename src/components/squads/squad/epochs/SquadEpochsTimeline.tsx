import { Tag } from 'lucide-react'

import { EpochCardForSquad } from './EpochCardForSquad'
import { SquadEpochDocumentType } from './SquadEpochs.types'

interface SquadEpochsTimelineProps {
	epochs?: SquadEpochDocumentType[]
	squadSlug: string
}
export function SquadEpochsTimeline({ epochs = [], squadSlug }: SquadEpochsTimelineProps) {
	if (epochs.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<p className='text-muted-foreground text-sm'>У сквада пока нет эпох</p>
			</div>
		)
	}

	return (
		<div className='space-y-8'>
			<header className='flex items-center gap-3'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<Tag className='h-5 w-5' />
				</div>
				<div>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>Эпохи сквада</h2>
					<span className='text-muted-foreground text-sm'>{epochs.length} периодов</span>
				</div>
			</header>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{epochs.map(epoch => (
					<EpochCardForSquad key={epoch.id} epoch={epoch} squadSlug={squadSlug} />
				))}
			</div>
		</div>
	)
}
