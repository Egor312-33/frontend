'use client'

import { CalendarRange, History, Users2 } from 'lucide-react'
import Image from 'next/image'

import { SQUAD_ROLE, SQUAD_ROLE_FALLBACK_TONE } from '@/components/lib/squad/roles'
import { cn } from '@/components/lib/utils'
import { InfoModal } from '@/components/ui/modal/infoModal'

import type { SquadMemberPopulated } from '@/types/squad'

import { formatDate } from '@/utils/format-date'

export function SquadHistoryModal({
	isOpen,
	onClose,
	memberships,
	streamerName
}: {
	isOpen: boolean
	onClose: () => void
	memberships: SquadMemberPopulated[]
	streamerName?: string
}) {
	const totalSquads = new Set(memberships.map(m => m.squad.id)).size

	return (
		<InfoModal
			isOpen={isOpen}
			onClose={onClose}
			icon={History}
			title={`История сквадов${streamerName ? ` · ${streamerName}` : ''}`}
			subtitle={`${totalSquads} ${totalSquads === 1 ? 'сквад' : 'сквадов'} в хронологии`}
		>
			{memberships.length === 0 ? (
				<div className='border-border/40 bg-muted/20 rounded-xl border border-dashed p-8 text-center'>
					<Users2 className='text-muted-foreground/50 mx-auto mb-3 h-8 w-8' />
					<p className='text-muted-foreground text-sm'>История сквадов пока не заполнена.</p>
					<p className='text-muted-foreground/70 mt-1 text-xs'>
						Добавь участников через Payload → Squad Members.
					</p>
				</div>
			) : (
				<ol className='relative space-y-5 pl-6'>
					<div
						aria-hidden
						className='from-primary/50 via-border/60 absolute top-1 bottom-1 left-1.75 w-px bg-linear-to-b to-transparent'
					/>
					{memberships.map(m => {
						const squad = m.squad
						const active = !m.leaveDate
						const logoUrl = squad.logo.url
						const logoAlt = squad.logo.alt
						const roleStyle = m.role ? SQUAD_ROLE[m.role].style : SQUAD_ROLE_FALLBACK_TONE
						const roleLabel = m.role ? SQUAD_ROLE[m.role].label : '—'

						return (
							<li key={m.id ?? `${m.joinDate}-${squad.id}`} className='relative'>
								<span
									className={cn(
										'border-background absolute top-3 -left-6 h-3 w-3 rounded-full border-2',
										active ? 'bg-primary' : 'bg-muted-foreground/40'
									)}
									aria-hidden
								/>
								<div className='border-border/40 bg-card/40 hover:border-border/70 rounded-xl border p-4 transition-colors'>
									<div className='flex items-start gap-3'>
										<div className='border-border/40 bg-secondary flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border'>
											{logoUrl ? (
												<Image
													src={logoUrl}
													alt={logoAlt || squad.name}
													width={48}
													height={48}
													className='object-cover'
												/>
											) : (
												<span className='text-muted-foreground/60 text-base font-black'>
													{squad.name[0].toUpperCase()}
												</span>
											)}
										</div>
										<div className='min-w-0 flex-1'>
											<div className='flex flex-wrap items-center gap-2'>
												<h4 className='text-foreground truncate text-sm font-bold'>
													{squad.name}
												</h4>
												<span
													className={cn(
														'rounded-md border px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase',
														roleStyle
													)}
												>
													{roleLabel}
												</span>
												{active && (
													<span className='border-primary/30 bg-primary/10 text-primary rounded-md border px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase'>
														Сейчас
													</span>
												)}
											</div>
											<div className='text-muted-foreground mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs'>
												<span className='inline-flex items-center gap-1'>
													<CalendarRange className='h-3 w-3' />
													{m.joinDate ? formatDate(m.joinDate) : '—'} —{' '}
													{m.leaveDate ? formatDate(m.leaveDate) : 'по сей день'}
												</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						)
					})}
				</ol>
			)}
		</InfoModal>
	)
}
