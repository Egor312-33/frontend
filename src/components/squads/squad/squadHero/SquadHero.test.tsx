// SquadHero.test.tsx
import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { SquadStatsData } from '../../SquadStats'

import { SquadHero } from './SquadHero'
import type { GetSquadPageQuery } from '@/shared/gql/cms/graphql'

type SquadDoc = NonNullable<GetSquadPageQuery['Squads']>['docs'][number]

vi.mock('@/components/ui/blocks/page-shell', () => ({
	PageShell: ({ children, bannerAlt }: { children: ReactNode; bannerAlt?: string }) => (
		<div data-banner-alt={bannerAlt}>{children}</div>
	)
}))

vi.mock('next/image', () => ({
	default: ({ priority, ...props }: Record<string, unknown>) => <img {...props} />
}))

const makeSquad = (overrides: Record<string, unknown> = {}): SquadDoc =>
	({
		name: 'Shkilla Team',
		slug: 'shkilla-team',
		banner: null,
		logo: null,
		...overrides
	}) as SquadDoc

const stats: SquadStatsData = {
	totalMembers: 3,
	currentMembers: 2,
	pastMembers: 1,
	totalEpochs: 3,
	totalEvents: 5,
	firstEventDate: '2022-06-05',
	lastEventDate: '2026-06-09'
}

describe('SquadHero', () => {
	it('рендерит имя, slug и лейбл сквада', () => {
		render(<SquadHero squad={makeSquad()} stats={stats} />)

		expect(screen.getByRole('heading', { level: 1, name: 'Shkilla Team' })).toBeInTheDocument()
		expect(screen.getByText('@shkilla-team')).toBeInTheDocument()
		expect(screen.getByText('Сквад')).toBeInTheDocument()
	})

	it('показывает логотип, если он задан', () => {
		render(<SquadHero squad={makeSquad({ logo: { url: '/logo.png', alt: 'Лого сквада' } })} stats={stats} />)

		expect(screen.getByAltText('Лого сквада')).toBeInTheDocument()
	})

	it('показывает заглушку вместо логотипа, если его нет', () => {
		render(<SquadHero squad={makeSquad({ logo: null })} stats={stats} />)

		expect(screen.queryByRole('img')).not.toBeInTheDocument()
	})

	it('пробрасывает stats в SquadStats', () => {
		render(<SquadHero squad={makeSquad()} stats={stats} />)

		expect(screen.getByText('5 months.june 2022')).toBeInTheDocument()
		expect(screen.getByText('9 months.june 2026')).toBeInTheDocument()
	})
	it('использует alt баннера, если он задан', () => {
		const { container } = render(
			<SquadHero squad={makeSquad({ banner: { url: '/b.png', alt: 'Баннер сквада' } })} stats={stats} />
		)

		expect(container.querySelector('[data-banner-alt]')).toHaveAttribute('data-banner-alt', 'Баннер сквада')
	})

	it('подставляет имя как alt баннера, если alt не задан', () => {
		const { container } = render(
			<SquadHero squad={makeSquad({ banner: { url: '/b.png', alt: null } })} stats={stats} />
		)

		expect(container.querySelector('[data-banner-alt]')).toHaveAttribute('data-banner-alt', 'Shkilla Team')
	})
})
