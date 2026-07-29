import { Tag } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Typography from '@/components/ui/typography'

import { EPOCH_ROLE, SQUAD_ROLE_FALLBACK_TONE } from '../../lib/squad/roles'

import type { GetStreamerPageQuery } from '@/shared/gql/cms/graphql'
import { formatDate } from '@/utils/format-date'

type EpochDoc = NonNullable<NonNullable<GetStreamerPageQuery['Streamers']>['docs'][number]['epochs']>['docs'][number]

export function EpochsSidebar({ epochs }: { epochs?: EpochDoc[] }) {
	const t = useTranslations('streamerPage.epochsSidebar')

	return (
		<aside className='space-y-6 lg:sticky lg:top-6 lg:self-start'>
			<div className='border-border/50 from-card/80 to-card/40 relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 backdrop-blur-sm'>
				<div className='bg-primary/20 pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl' />

				<div className='relative'>
					<div className='mb-4 flex items-center gap-2'>
						<div className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
							<Tag className='h-4 w-4' />
						</div>

						<Typography tag='h3' variant='title-5' className='font-bold'>
							{t('title')}
						</Typography>
					</div>

					{!epochs || epochs.length === 0 ? (
						<div className='border-border/40 bg-muted/20 rounded-lg border border-dashed p-4 text-center'>
							<Typography tag='p' variant='body-3'>
								{t('empty')}
							</Typography>
						</div>
					) : (
						<div className='space-y-4'>
							{epochs.map(ep => {
								const role = ep.roleInEpoch ? EPOCH_ROLE[ep.roleInEpoch] : null

								return (
									<Link
										key={ep.id}
										href={`/squads/${ep.epoch?.squad?.slug}/epochs#epoch-${ep.epoch?.id}`}
										className='group border-border/30 hover:border-primary/30 relative block border-b pb-4 transition-colors last:border-0 last:pb-0'
									>
										<Typography
											tag='h4'
											variant='body-2'
											className='text-foreground group-hover:text-primary leading-snug font-bold transition-colors'
										>
											{ep.epoch?.title}
										</Typography>

										<Typography
											tag='p'
											variant='body-3'
											className='text-muted-foreground/80 mt-0.5 text-xs'
										>
											{ep.epoch?.squad?.name}
										</Typography>

										<div className='mt-1.5 flex flex-wrap items-center gap-2 text-xs'>
											<span
												className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${role?.style ?? SQUAD_ROLE_FALLBACK_TONE}`}
											>
												{role?.label ?? ep.roleInEpoch ?? '—'}
											</span>

											<span className='text-muted-foreground'>
												{ep.epoch?.dateStart ? formatDate(ep.epoch.dateStart) : '?'} —{' '}
												{ep.epoch?.dateEnd ? formatDate(ep.epoch.dateEnd) : t('ongoing')}
											</span>
										</div>
									</Link>
								)
							})}
						</div>
					)}
				</div>
			</div>
		</aside>
	)
}
