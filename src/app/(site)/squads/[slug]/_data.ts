import { cache } from 'react'

import type { SquadStatsData } from '@/components/squads/SquadStats'

import { payloadQuery } from '@/libs/payload-graphql'
import {
	GetSquadEventsDocument,
	type GetSquadEventsQuery,
	GetSquadPageDocument,
	type GetSquadPageQuery
} from '@/shared/gql/cms/graphql'

export type SquadDoc = NonNullable<GetSquadPageQuery['Squads']>['docs'][number]
export type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]

export const getSquadBySlug = cache(async (slug: string) => {
	const data = await payloadQuery(GetSquadPageDocument, { slug })
	return data.Squads?.docs[0] ?? null
})

export const getSquadEventsForSquad = cache(async (slug: string): Promise<EventDoc[]> => {
	const squad = await getSquadBySlug(slug)
	if (!squad) return []
	const epochIds = (squad.epochs?.docs ?? []).map(e => e.id)
	const data = await payloadQuery(GetSquadEventsDocument, { epochIds })
	return data.Events?.docs ?? []
})

export function computeStats(squad: SquadDoc, events: EventDoc[]): SquadStatsData {
	const currentMembers = squad.currentMembers?.docs ?? []
	const pastMembers = squad.pastMembers?.docs ?? []
	return {
		totalMembers: currentMembers.length + pastMembers.length,
		currentMembers: currentMembers.length,
		pastMembers: pastMembers.length,
		totalEpochs: (squad.epochs?.docs ?? []).length,
		totalEvents: events.length,
		firstEventDate: events[events.length - 1]?.date ?? null,
		lastEventDate: events[0]?.date ?? null
	}
}
