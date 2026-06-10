import type { SquadMemberForView } from '@/types/squad'

import { MemberCard } from './MemberCard'

export function SquadMembersGrid({ members }: { members: SquadMemberForView[] }) {
	if (members.length === 0) {
		return (
			<div className='border-border/50 bg-card/30 rounded-2xl border border-dashed p-12 text-center'>
				<p className='text-muted-foreground text-sm'>В этом скваде пока нет зафиксированных участников</p>
			</div>
		)
	}

	const current: SquadMemberForView[] = []
	const past: SquadMemberForView[] = []

	for (const member of members) {
		if (member.isCurrent) current.push(member)
		else past.push(member)
	}
	return (
		<div className='space-y-12'>
			{current.length > 0 && (
				<section>
					<header className='mb-6 flex items-center gap-3'>
						<h2 className='text-foreground text-xl font-bold tracking-tight'>Действующие участники</h2>
						<span className='bg-primary/15 text-primary border-primary/30 rounded-lg border px-2.5 py-1 text-xs font-bold tabular-nums'>
							{current.length}
						</span>
					</header>

					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{current.map(m => (
							<MemberCard key={m.id} member={m} />
						))}
					</div>
				</section>
			)}

			{past.length > 0 && (
				<section>
					<header className='mb-6 flex items-center gap-3'>
						<h2 className='text-foreground text-xl font-bold tracking-tight'>Бывшие участники</h2>
						<span className='bg-muted text-muted-foreground border-border/50 rounded-lg border px-2.5 py-1 text-xs font-bold tabular-nums'>
							{past.length}
						</span>
					</header>

					<div className='grid grid-cols-1 gap-4 opacity-70 sm:grid-cols-2 lg:grid-cols-3'>
						{past.map(m => (
							<MemberCard key={m.id} member={m} />
						))}
					</div>
				</section>
			)}
		</div>
	)
}
