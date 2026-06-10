'use client'

import { BarChart3, Calendar, History, Image as ImageIcon, Info } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { type SquadRole } from '@/components/lib/squad/roles'
import { cn } from '@/components/lib/utils'
import { PageShell } from '@/components/ui/blocks/page-shell'
import { SquadHistoryModal } from '@/components/ui/modal/SquadHistoryModal'

import { ArchiveAvatar3D } from './avatars/ArchiveAvatar'
import { CubeAvatar } from './avatars/CubeAvatar'
import { HexagonAvatar } from './avatars/HexagonAvatar'
import { getProfileTheme } from './getProfileTheme'
import type { SquadMember } from '@/payload-types'

type TabId = 'feed' | 'photos' | 'info' | 'stats'

interface HeroBlockProps {
	theme?: string | null
	visualConfig?: {
		profileLayout?: string | null
		cardStyle?: string | null
		vibeAccent?: string | null
	}
	streamerInfo: {
		name: string
		realName?: string | null
		nicknames?: { nickname: string; id?: string | null }[] | null
		avatar?: { url: string; alt?: string } | null
		banner?: { url: string; alt?: string } | null
	}
	squadHistory: SquadMember[]
	activeTab?: TabId
	onTabChange?: (tab: TabId) => void
}

function StaticHexBg() {
	return (
		<svg
			className='pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]'
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<pattern id='hex-a' x='0' y='0' width='70' height='80' patternUnits='userSpaceOnUse'>
					<polygon points='35,3 67,21 67,59 35,77 3,59 3,21' fill='none' stroke='#c8ff00' strokeWidth='0.6' />
				</pattern>
				<pattern id='hex-b' x='35' y='40' width='70' height='80' patternUnits='userSpaceOnUse'>
					<polygon points='35,3 67,21 67,59 35,77 3,59 3,21' fill='none' stroke='#c8ff00' strokeWidth='0.6' />
				</pattern>
			</defs>
			<rect width='100%' height='100%' fill='url(#hex-a)' />
			<rect width='100%' height='100%' fill='url(#hex-b)' />
		</svg>
	)
}

const TABS: Array<{
	id: TabId
	label: string
	icon: React.ComponentType<{ size?: number; className?: string }>
}> = [
	{ id: 'feed', label: 'Лента', icon: Calendar },
	{ id: 'photos', label: 'Фото', icon: ImageIcon },
	{ id: 'info', label: 'Информация', icon: Info },
	{ id: 'stats', label: 'Статистика', icon: BarChart3 }
]

export function HeroBlock({
	theme = 'archive',
	visualConfig,
	streamerInfo,
	squadHistory,
	activeTab = 'feed',
	onTabChange
}: HeroBlockProps) {
	const { name, realName, nicknames, avatar, banner } = streamerInfo
	const ui = getProfileTheme(theme)
	const [historyOpen, setHistoryOpen] = useState(false)

	const currentMembership = squadHistory.find(m => !m.leaveDate) ?? squadHistory[0] ?? null
	const currentSquad =
		currentMembership && typeof currentMembership.squad === 'object' ? currentMembership.squad : null

	return (
		<>
			<PageShell
				bannerUrl={banner?.url ?? null}
				bannerAlt={banner?.alt || 'banner'}
				radius='xl'
				overlay='medium'
				bannerClassName='mx-auto max-w-6xl'
				bannerHeight='clamp(160px, 22vw, 280px)'
			>
				<div className='px-4 pb-4 sm:px-6 sm:pb-5'>
					<div className='mx-auto flex max-w-6xl items-end gap-3 md:gap-4'>
						<div className='mx-auto shrink-0 md:mx-0'>
							{theme === 'esports' && (
								<CubeAvatar src={avatar?.url} alt={avatar?.alt || name} name={name} />
							)}
							{theme === 'creator' && (
								<HexagonAvatar src={avatar?.url} alt={avatar?.alt || name} name={name} />
							)}
							{(theme === 'archive' || !['esports', 'creator'].includes(theme ?? '')) && (
								<ArchiveAvatar3D src={avatar?.url} alt={avatar?.alt || name} fallback={name[0]} />
							)}
						</div>

						<div className='flex min-w-0 flex-1 flex-col gap-2 pb-2 text-center md:text-left'>
							<div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start'>
								<span
									className={cn(
										'inline-flex items-center rounded-full px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase sm:px-3 sm:text-[10px]',
										ui.hero.badge
									)}
								>
									{theme?.toUpperCase()}
								</span>
								{nicknames?.map(n => (
									<span
										key={n.id ?? n.nickname}
										className={cn(
											'rounded-md px-2 py-1 text-[11px] font-semibold sm:px-2.5 sm:text-xs',
											ui.hero.nickname
										)}
									>
										{n.nickname}
									</span>
								))}
							</div>

							<h1
								className={cn(
									'text-3xl leading-none font-black sm:text-4xl md:text-5xl lg:text-6xl',
									ui.hero.title
								)}
							>
								{name}
							</h1>
							{realName && <p className='text-muted-foreground text-sm sm:text-base'>{realName}</p>}
						</div>

						<div className='flex flex-col items-center gap-2 md:items-end md:self-end md:pb-2 md:text-right'>
							<SquadPill
								squadName={currentSquad?.name ?? null}
								role={currentMembership?.role ?? null}
								active={!currentMembership?.leaveDate}
							/>

							<button
								type='button'
								onClick={() => setHistoryOpen(true)}
								className={cn(
									'group border-border/50 bg-card/40 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5',
									'text-muted-foreground text-[11px] font-semibold tracking-wider uppercase sm:text-xs',
									'hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors'
								)}
							>
								<History className='h-3.5 w-3.5 transition-transform group-hover:-rotate-12' />
								История
							</button>
						</div>
					</div>
				</div>
			</PageShell>

			<section className={cn('relative', ui.hero.section)}>{theme === 'archive' && <StaticHexBg />}</section>

			<SquadHistoryModal
				isOpen={historyOpen}
				onClose={() => setHistoryOpen(false)}
				memberships={squadHistory}
				streamerName={name}
			/>
		</>
	)
}

function SquadPill({ squadName, role, active }: { squadName: string | null; role: SquadRole | null; active: boolean }) {
	if (!squadName) {
		return (
			<span className='border-border/50 bg-muted/30 text-muted-foreground inline-flex items-center gap-1.5 rounded-md border border-dashed px-2.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase sm:text-xs'>
				<span className='bg-muted-foreground/50 h-1.5 w-1.5 rounded-full' />
				Сквад неизвестен
			</span>
		)
	}

	return (
		<span className='border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px] font-bold tracking-wider uppercase sm:text-xs'>
			<span
				className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-primary animate-pulse' : 'bg-muted-foreground/50'}`}
			/>
			{squadName}
			{role && <span className='text-primary/60 font-medium tracking-normal normal-case'>· {role}</span>}
		</span>
	)
}
