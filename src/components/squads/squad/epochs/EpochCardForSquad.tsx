import { Calendar, Crown, Sparkles, Tag, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/components/lib/utils'

import type { SquadEpochDocumentType } from './SquadEpochs.types'
import { formatDate } from '@/utils/format-date'
import { getMediaCMS } from '@/utils/get-media-source'

interface EpochCardForSquadProps {
	epoch: SquadEpochDocumentType
	squadSlug: string
}
export function EpochCardForSquad({ epoch, squadSlug }: EpochCardForSquadProps) {
	const coverUrl = epoch.coverImage?.url
	const eventCount = epoch.events?.docs.length ?? 0
	const participantCount = epoch.participants?.docs.length ?? 0
	const hasBadges = epoch.isFeatured || eventCount > 0

	return (
		<Link
			href={`/squads/${squadSlug}/epochs#epoch-${epoch.id}`}
			id={`epoch-${epoch.id}`}
			className={cn(
				'border-border/50 hover:border-primary/60 relative flex aspect-video flex-col overflow-hidden rounded-2xl border',
				'scroll-mt-24 transition-colors'
			)}
		>
			{coverUrl ? (
				<Image
					src={getMediaCMS(coverUrl)}
					alt={epoch.title}
					fill
					className='object-cover'
					sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
				/>
			) : (
				<div className='from-primary/15 to-muted/60 absolute inset-0 flex items-center justify-center bg-linear-to-br'>
					<Tag className='text-primary/15 h-12 w-12' />
				</div>
			)}
			<div className='relative z-10 flex h-full flex-col gap-2 px-3 pt-3 pb-2'>
				{hasBadges && (
					<div className='border-border/40 bg-card/85 flex flex-wrap items-center gap-2 self-start rounded-lg border px-2 py-1 backdrop-blur-sm'>
						{epoch.isFeatured && (
							<span className='text-accent-2 inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase'>
								<Crown className='h-3 w-3' />
								Топ
							</span>
						)}
						{eventCount > 0 && (
							<span className='text-foreground inline-flex items-center gap-1 text-[10px] font-bold'>
								<Sparkles className='text-primary h-3 w-3' />
								{eventCount}
							</span>
						)}
					</div>
				)}

				<div className='border-border/40 bg-card/85 mt-auto space-y-1.5 rounded-xl border p-3 backdrop-blur-sm'>
					<h3 className='text-foreground line-clamp-1 text-base font-bold tracking-tight'>{epoch.title}</h3>

					{epoch.summary && (
						<p className='text-muted-foreground line-clamp-2 text-xs leading-relaxed'>{epoch.summary}</p>
					)}

					<div className='flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5 text-[11px]'>
						<span className='text-muted-foreground flex items-center gap-1.5'>
							<Calendar className='text-primary h-3.5 w-3.5' />
							<span>
								{formatDate(epoch.dateStart)} —{' '}
								{epoch.dateEnd ? (
									formatDate(epoch.dateEnd)
								) : (
									<span className='text-primary font-semibold'>по сей день</span>
								)}
							</span>
						</span>

						{participantCount > 0 && (
							<span className='text-muted-foreground flex items-center gap-1.5'>
								<Users className='text-primary h-3.5 w-3.5' />
								<span>{participantCount}</span>
							</span>
						)}
					</div>
				</div>
			</div>
		</Link>
	)
}
