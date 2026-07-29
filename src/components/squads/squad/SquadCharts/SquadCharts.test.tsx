import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { SquadCharts } from './SquadCharts'
import type { GetSquadEventsQuery, GetSquadPageQuery } from '@/shared/gql/cms/graphql'

type EventDoc = NonNullable<GetSquadEventsQuery['Events']>['docs'][number]
type EpochDoc = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['epochs']>['docs'][number]
type CurrentMember = NonNullable<
	NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['currentMembers']
>['docs'][number]
type PastMember = NonNullable<NonNullable<GetSquadPageQuery['Squads']>['docs'][number]['pastMembers']>['docs'][number]

vi.mock('recharts', async () => {
	const actual = await vi.importActual<typeof import('recharts')>('recharts')
	return {
		...actual,
		ResponsiveContainer: ({ children }: { children: ReactNode }) => <div>{children}</div>
	}
})

const events = [
	{ id: 1, title: 'Стрим 1', date: '2026-06-01T00:00:00Z', type: 'stream' },
	{ id: 2, title: 'Поход 1', date: '2026-06-15T00:00:00Z', type: 'trip' },
	{ id: 3, title: 'Стрим 2', date: '2026-07-01T00:00:00Z', type: 'stream' }
] as unknown as EventDoc[]

const epochs = [{ id: 1 }, { id: 2 }] as unknown as EpochDoc[]
const currentMembers = [{ id: 1 }] as unknown as CurrentMember[]
const pastMembers = [{ id: 2 }, { id: 3 }] as unknown as PastMember[]

describe('SquadCharts', () => {
	it('рендерит заголовок и три секции статистики', () => {
		render(
			<SquadCharts events={events} epochs={epochs} currentMembers={currentMembers} pastMembers={pastMembers} />
		)

		expect(screen.getByText('Статистика сквада')).toBeInTheDocument()
		expect(screen.getByText('Активность по времени')).toBeInTheDocument()
		expect(screen.getByText('Типы событий')).toBeInTheDocument()
		expect(screen.getByText('Показатели сквада')).toBeInTheDocument()
	})

	it('не падает на пустых данных', () => {
		render(<SquadCharts events={[]} epochs={[]} currentMembers={[]} pastMembers={[]} />)
		expect(screen.getByText('Статистика сквада')).toBeInTheDocument()
	})
})
