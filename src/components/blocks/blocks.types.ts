import type { GetStreamerPageQuery } from '@/shared/gql/cms/graphql'

export type GetStreamerPageType = NonNullable<GetStreamerPageQuery['Streamers']>['docs'][number]

export type BlocksstreamerInfo = {
	name: GetStreamerPageType['name']
	realName?: GetStreamerPageType['realName']
	nicknames?: GetStreamerPageType['nicknames']
	avatar?: GetStreamerPageType['avatar']
	banner?: GetStreamerPageType['banner']
}

export type BlockssquadHistory = NonNullable<GetStreamerPageType['squads']>['docs']
