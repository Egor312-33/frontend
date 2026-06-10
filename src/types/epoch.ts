import type { EpochRole } from '@/components/lib/squad/roles'

import type { Squad } from '@/payload-types'

export type EpochForView = {
	id: number
	title: string
	dateStart: string
	dateEnd: string | null
	squad: Squad
	roleInEpoch: EpochRole
}
