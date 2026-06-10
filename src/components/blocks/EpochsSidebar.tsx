import { Tag } from 'lucide-react'

import { EpochForView } from '@/types/epoch'

import { EPOCH_ROLE_TONES } from '../lib/squad/roles'

import { formatDate } from '@/utils/format-date'

export function EpochsSidebar({ epochs }: { epochs: EpochForView[] }) {
	return (
		<aside className='space-y-6 lg:sticky lg:top-6 lg:self-start'>
			<div className='border-border/50 from-card/80 to-card/40 relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 backdrop-blur-sm'>
				<div className='bg-primary/20 pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl' />

				<div className='relative'>
					<div className='mb-4 flex items-center gap-2'>
						<div className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
							<Tag className='h-4 w-4' />
						</div>

						<h3 className='text-lg font-bold'>Эпохи</h3>
					</div>

					{epochs.length === 0 ? (
						<div className='border-border/40 bg-muted/20 rounded-lg border border-dashed p-4 text-center'>
							<p className='text-muted-foreground text-sm'>Эпохи не найдены</p>

							<p className='text-muted-foreground/70 mt-1 text-xs'>
								Добавьте записи через Payload → Epoch Participants
							</p>
						</div>
					) : (
						<div className='space-y-4'>
							{epochs.map(epoch => (
								<div
									key={epoch.id}
									className='border-border/30 hover:border-primary/30 relative border-b pb-4 transition-colors last:border-0 last:pb-0'
								>
									<h4 className='text-foreground text-sm font-bold'>{epoch.title}</h4>

									<p className='text-muted-foreground/80 mt-0.5 text-xs'>{epoch.squad.name}</p>

									<div className='mt-1.5 flex flex-wrap items-center gap-2 text-xs'>
										<span
											className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${EPOCH_ROLE_TONES[epoch.roleInEpoch]}`}
										>
											{epoch.roleInEpoch}
										</span>

										<span className='text-muted-foreground'>
											{epoch.dateStart ? formatDate(epoch.dateStart) : '?'} —{' '}
											{epoch.dateEnd ? formatDate(epoch.dateEnd) : 'по сей день'}
										</span>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</aside>
	)
}
