import { Calendar, Radio, UserX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SQUAD_ROLE } from '../../lib/squad/roles'

import type { GetSquadEventsQuery, GetSquadPageQuery } from '@/shared/gql/cms/graphql'
import { formatDate } from '@/utils/format-date'
import { getMediaCMS } from '@/utils/get-media-source'

type CurrentMember = NonNullable<
	NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['currentMembers']
>['docs'][number]
type PastMember = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['pastMembers']>['docs'][number]
type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]

type Member = CurrentMember | PastMember

export function MemberCard({ member, lastEvent }: { member: Member; lastEvent?: EventDoc }) {
	const { streamer, role, joinDate } = member
	const leaveDate = 'leaveDate' in member ? member.leaveDate : null
	const isCurrent = !leaveDate

	if (!streamer) return null

	const meta = (role && SQUAD_ROLE[role]) ?? SQUAD_ROLE.secondary
	const RoleIcon = meta.icon

	return (
		<div className='border-border/50 from-card/90 to-card/50 group hover:border-primary/30 hover:shadow-primary/5 relative overflow-hidden rounded-2xl border bg-linear-to-br backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl'>
			<div className='bg-primary/10 absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60' />

			<Link
				href={`/streamers/${streamer.slug}`}
				className='relative flex items-center gap-4 p-5 transition-colors'
			>
				<div className='border-border/50 bg-background/80 relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 shadow-sm md:h-20 md:w-20'>
					{streamer.avatar?.url ? (
						<Image
							src={getMediaCMS(streamer.avatar.url)}
							alt={streamer.name}
							width={80}
							height={80}
							className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
						/>
					) : (
						<div className='bg-muted flex h-full w-full items-center justify-center'>
							<span className='text-muted-foreground text-xl font-bold md:text-2xl'>
								{streamer.name.charAt(0).toUpperCase()}
							</span>
						</div>
					)}
				</div>

				<div className='min-w-0 flex-1 space-y-1.5'>
					<span className='text-foreground group-hover:text-primary block truncate text-lg font-bold transition-colors md:text-xl'>
						{streamer.name}
					</span>

					<div className='flex flex-wrap items-center gap-2'>
						<span
							className={`inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase ${meta.style}`}
						>
							{RoleIcon && <RoleIcon className='h-3 w-3' />}
							{meta.label}
						</span>
						{!isCurrent && (
							<span className='bg-muted/50 text-muted-foreground border-border/40 inline-flex items-center rounded-lg border px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase'>
								<UserX className='mr-1 h-3 w-3' />
								Бывший
							</span>
						)}
					</div>
				</div>
			</Link>

			<div className='border-border/30 border-t px-5 pt-3 pb-5'>
				<div className='text-muted-foreground mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs'>
					{isCurrent && joinDate && (
						<span className='flex items-center gap-1'>
							<Calendar className='h-3 w-3 opacity-60' />В скваде с {formatDate(joinDate)}
						</span>
					)}
					{!isCurrent && (
						<>
							{joinDate && (
								<span className='flex items-center gap-1'>
									<Calendar className='h-3 w-3 opacity-60' />с {formatDate(joinDate)}
								</span>
							)}
							{leaveDate && (
								<span className='flex items-center gap-1'>
									<UserX className='h-3 w-3 opacity-60' />
									до {formatDate(leaveDate)}
								</span>
							)}
						</>
					)}
				</div>

				{lastEvent ? (
					<div className='border-border/40 bg-muted/30 flex items-center gap-2 rounded-xl border px-3 py-2 text-sm'>
						<Radio className='text-primary h-4 w-4 shrink-0' />
						<span className='text-muted-foreground shrink-0'>Последний эфир:</span>
						<Link
							href={`/events/${lastEvent.id}`}
							className='text-foreground hover:text-primary truncate font-medium transition-colors'
						>
							{lastEvent.title}
						</Link>
						<span className='text-muted-foreground/60 shrink-0 text-xs'>{formatDate(lastEvent.date)}</span>
					</div>
				) : (
					<div className='border-border/40 bg-muted/30 flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm'>
						<Radio className='text-muted-foreground/50 h-4 w-4' />
						<span className='text-muted-foreground/70 font-medium'>Эфиров пока не было</span>
					</div>
				)}
			</div>
		</div>
	)
}
