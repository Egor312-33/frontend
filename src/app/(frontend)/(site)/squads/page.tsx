import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import { SQUAD_ROLE } from '@/components/lib/squad/roles'
import { SquadsGrid } from '@/components/squads/SquadsGrid'
import { SquadsPageHeader } from '@/components/squads/SquadsPageHeader'

import type { SquadCardForView, SquadsIndexStats } from '@/types/squad'

import type { Epoch, SquadMember } from '@/payload-types'
import { Populated, toPopulated } from '@/utils/to-populated'

type SquadMemberPopulated = Populated<SquadMember, 2>

export const metadata: Metadata = {
	title: 'Сквады',
	description: 'Все объединения стримеров: составы, эпохи и события'
}

const ROLE_KEYS = Object.keys(SQUAD_ROLE)

export default async function SquadsPage() {
	const payload = await getPayload({ config })

	const [squadsResult, membersResult] = await Promise.all([
		payload.find({ collection: 'squads', depth: 2, limit: 100, sort: 'name' }),
		payload.find({ collection: 'squad-members', depth: 2, limit: 1000 })
	])

	const memberDocs = membersResult.docs as SquadMemberPopulated[]
	const membersBySquad = memberDocs.reduce((map, member) => {
		const squadId = (member.squad as { id: number }).id
		if (!map.has(squadId)) map.set(squadId, [])
		map.get(squadId)!.push(member)
		return map
	}, new Map<number, SquadMemberPopulated[]>())

	let totalEpochs = 0
	for (const squad of squadsResult.docs) {
		totalEpochs += squad.epochs?.docs?.length ?? 0
	}
	const squadsForView: SquadCardForView[] = squadsResult.docs
		.map(squad => {
			const members = membersBySquad.get(squad.id) ?? []
			const currentMembers = members
				.filter(m => !m.leaveDate && m.streamer)
				.sort((a, b) => ROLE_KEYS.indexOf(a.role ?? 'secondary') - ROLE_KEYS.indexOf(b.role ?? 'secondary'))

			const epochs = (squad.epochs?.docs ?? []) as Epoch[]
			const activeSince = epochs[0]?.dateStart ?? null
			const hasOpenEpoch = epochs.some(e => !e.dateEnd)
			const lastEnd =
				epochs
					.map(e => e.dateEnd)
					.filter((d): d is string => Boolean(d))
					.sort()
					.at(-1) ?? null

			return {
				id: squad.id,
				name: squad.name,
				slug: squad.slug,
				logo: toPopulated(squad.logo),
				banner: toPopulated(squad.banner),
				currentMembersCount: currentMembers.length,
				totalMembersCount: members.length,
				epochsCount: epochs.length,
				activeSince,
				activeUntil: hasOpenEpoch ? null : lastEnd,
				isActive: hasOpenEpoch,
				memberAvatars: currentMembers.slice(0, 5).map(m => ({
					id: m.streamer!.id,
					name: m.streamer!.name,
					avatar: toPopulated(m.streamer!.avatar)
				}))
			}
		})
		.sort((a, b) => {
			if (a.isActive !== b.isActive) return a.isActive ? -1 : 1
			if (b.currentMembersCount !== a.currentMembersCount) return b.currentMembersCount - a.currentMembersCount
			return a.name.localeCompare(b.name, 'ru')
		})

	const uniqueStreamers = new Set<number>()
	for (const member of memberDocs) {
		const id = member.streamer?.id
		if (id) uniqueStreamers.add(id)
	}

	const stats: SquadsIndexStats = {
		totalSquads: squadsResult.totalDocs,
		totalStreamers: uniqueStreamers.size,
		totalEpochs
	}

	return (
		<div className='bg-background text-foreground min-h-screen'>
			<SquadsPageHeader stats={stats} />
			<div className='mx-auto max-w-7xl px-6 py-12'>
				<SquadsGrid squads={squadsForView} />
			</div>
		</div>
	)
}
