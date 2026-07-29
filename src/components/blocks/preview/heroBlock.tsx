'use client'

import { History } from 'lucide-react'
import { useState } from 'react'

import { SQUAD_ROLE, type SquadRole } from '@/components/lib/squad/roles'
import { cn } from '@/components/lib/utils'
import { PageShell } from '@/components/ui/blocks/page-shell'
import { Button } from '@/components/ui/button'

import type { BlockssquadHistory, BlocksstreamerInfo } from '../blocks.types'

import { SquadAvatar } from './squadAvatar'
import { SquadHistoryModal } from './squadHistoryModal'

interface HeroBlockProps {
	streamerInfo: BlocksstreamerInfo
	squadHistory?: BlockssquadHistory
}

export function HeroBlock({ streamerInfo, squadHistory = [] }: HeroBlockProps) {
	const { name, realName, nicknames, avatar, banner } = streamerInfo
	const [historyOpen, setHistoryOpen] = useState(false)

	const currentMembership = squadHistory.find(m => !m.leaveDate) ?? squadHistory[0] ?? null
	const currentSquad = currentMembership ? currentMembership.squad : null

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
							<SquadAvatar src={avatar?.url} alt={avatar?.alt || name} fallback={name[0]} />
						</div>

						<div className='flex min-w-0 flex-1 flex-col gap-2 pb-2 text-center md:text-left'>
							{nicknames && nicknames.length > 0 && (
								<div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start'>
									{nicknames.map(n => (
										<span
											key={n.id ?? n.nickname}
											className='border-accent-2/20 bg-accent-2/10 text-accent-2 rounded-md border px-2 py-1 text-[11px] font-semibold sm:px-2.5 sm:text-xs'
										>
											{n.nickname}
										</span>
									))}
								</div>
							)}

							<h1 className='text-3xl leading-none font-black sm:text-4xl md:text-5xl lg:text-6xl'>
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

							<Button
								type='button'
								size='lg'
								variant='ghost'
								startIcon={<History size={16} className='transition-transform' />}
								onClick={() => setHistoryOpen(true)}
							>
								История
							</Button>
						</div>
					</div>
				</div>
			</PageShell>

			<div className='border-border bg-background relative border-b'></div>

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
			{role && (
				<span className='text-primary/60 font-medium tracking-normal normal-case'>
					· {SQUAD_ROLE[role].label}
				</span>
			)}
		</span>
	)
}
