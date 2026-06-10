import type { Event, Media, SquadMember } from '@/payload-types'

export type SquadRole = NonNullable<SquadMember['role']>

export type SquadForView = {
	id: number
	name: string
	slug: string
	logo: Media | null
	banner: Media | null
	history: unknown
}

export type SquadMemberForView = {
	id: number
	streamer: {
		id: number
		name: string
		slug: string
		avatar: Media | null
	}
	role: SquadRole | null
	joinDate: string | null
	leaveDate: string | null
	isCurrent: boolean
	lastEvent: {
		id: number
		title: string
		date: string
		type: Event['type']
	} | null
}

export type SquadEventForView = {
	id: number
	title: string
	date: string
	type: Event['type']
	description: string | null
	layoutTemplate: NonNullable<NonNullable<Event['eventUiConfig']>['layoutTemplate']>
	eventVibe: NonNullable<NonNullable<Event['eventUiConfig']>['eventVibe']>
	participants: { id: number; name: string; slug: string }[]
}

export type SquadStatsForView = {
	totalMembers: number
	currentMembers: number
	pastMembers: number
	totalEpochs: number
	totalEvents: number
	firstEventDate: string | null
	lastEventDate: string | null
}

export type SquadCardMember = {
	id: number
	name: string
	avatar: Media | null
}

export type SquadCardForView = {
	id: number
	name: string
	slug: string
	logo: Media | null
	banner: Media | null
	currentMembersCount: number
	totalMembersCount: number
	epochsCount: number
	/** dateStart самой ранней эпохи */
	activeSince: string | null
	/** dateEnd самой поздней эпохи; null = сквад активен по сей день (или эпох нет) */
	activeUntil: string | null
	/** есть хотя бы одна эпоха без dateEnd */
	isActive: boolean
	/** до 5 аватарок текущего состава (лидер и основа — первыми) */
	memberAvatars: SquadCardMember[]
}

export type SquadsIndexStats = {
	totalSquads: number
	totalStreamers: number
	totalEpochs: number
}
