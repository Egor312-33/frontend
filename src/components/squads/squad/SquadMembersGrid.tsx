import { MemberCard } from './MemberCard'
import type { GetSquadEventsQuery, GetSquadPageQuery } from '@/shared/gql/cms/graphql'

type CurrentMember = NonNullable<
	NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['currentMembers']
>['docs'][number]
type PastMember = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['pastMembers']>['docs'][number]
type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]

export function SquadMembersGrid({
	currentMembers = [],
	pastMembers = [],
	lastEvents
}: {
	currentMembers?: CurrentMember[]
	pastMembers?: PastMember[]
	lastEvents?: Map<number, EventDoc>
}) {
	if (currentMembers.length === 0 && pastMembers.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<p className='text-muted-foreground text-sm'>В этом скваде пока нет зафиксированных участников</p>
			</div>
		)
	}

	return (
		<div className='space-y-12'>
			<section>
				<header className='mb-6 flex items-center gap-3'>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>Действующие участники</h2>
					<span className='bg-primary/15 text-primary border-primary/30 rounded-lg border px-2.5 py-1 text-xs font-bold tabular-nums'>
						{currentMembers.length}
					</span>
				</header>

				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{currentMembers.map(m => (
						<MemberCard
							key={m.id}
							member={m}
							lastEvent={m.streamer ? lastEvents?.get(m.streamer.id) : undefined}
						/>
					))}
				</div>
			</section>

			<section>
				<header className='mb-6 flex items-center gap-3'>
					<h2 className='text-foreground text-xl font-bold tracking-tight'>Бывшие участники</h2>
					<span className='bg-muted text-muted-foreground border-border/50 rounded-lg border px-2.5 py-1 text-xs font-bold tabular-nums'>
						{pastMembers.length}
					</span>
				</header>

				<div className='grid grid-cols-1 gap-4 opacity-70 sm:grid-cols-2 lg:grid-cols-3'>
					{pastMembers.map(m => (
						<MemberCard key={m.id} member={m} />
					))}
				</div>
			</section>
		</div>
	)
}
