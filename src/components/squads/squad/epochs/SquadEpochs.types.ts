import { GetSquadPageQuery } from '@/shared/gql/cms/graphql'

export type SquadEpochDocumentType = NonNullable<
	NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['epochs']
>['docs'][number]
