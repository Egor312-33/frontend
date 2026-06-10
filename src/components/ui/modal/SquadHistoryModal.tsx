'use client'

import { CalendarRange, History, Users2 } from 'lucide-react'
import Image from 'next/image'

import { SQUAD_ROLE_FALLBACK_TONE, SQUAD_ROLE_TONES, type SquadRole } from '@/components/lib/squad/roles'

import { Modal } from './modal'
import type { Squad, SquadMember } from '@/payload-types'
import { formatDate } from '@/utils/format-date'

function isActive(m: SquadMember): boolean {
	return !m.leaveDate
}

function getSquad(m: SquadMember): Squad | null {
	return typeof m.squad === 'object' && m.squad !== null ? m.squad : null
}

function getSquadId(m: SquadMember): string | number | null {
	const s = m.squad
	if (typeof s === 'object' && s !== null) return s.id
	return s
}

function roleTone(role: SquadRole | null): string {
	return role ? SQUAD_ROLE_TONES[role] : SQUAD_ROLE_FALLBACK_TONE
}

export function SquadHistoryModal({
	isOpen,
	onClose,
	memberships,
	streamerName
}: {
	isOpen: boolean
	onClose: () => void
	memberships: SquadMember[]
	streamerName?: string
}) {
	const sorted = [...memberships].sort((a, b) => (b.joinDate ?? '').localeCompare(a.joinDate ?? ''))
	const totalSquads = new Set(sorted.map(getSquadId)).size

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='lg'
			title={
				<div className='flex items-center gap-2.5'>
					<span className='bg-primary/15 text-primary border-primary/30 flex h-8 w-8 items-center justify-center rounded-lg border'>
						<History className='h-4 w-4' />
					</span>

					<div className='flex flex-col leading-tight'>
						<span className='text-base font-bold'>
							История сквадов{streamerName ? ` · ${streamerName}` : ''}
						</span>
						<span className='text-muted-foreground text-xs font-normal'>
							{totalSquads} {totalSquads === 1 ? 'сквад' : 'сквадов'} в хронологии
						</span>
					</div>
				</div>
			}
		>
			{sorted.length === 0 ? (
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
						className='from-primary/50 via-border/60 absolute top-1 bottom-1 left-[7px] w-px bg-gradient-to-b to-transparent'
					/>

					{sorted.map(m => {
						const squad = getSquad(m)
						const active = isActive(m)
						const logoUrl = typeof squad?.logo === 'object' && squad.logo !== null ? squad.logo.url : null
						const logoAlt = typeof squad?.logo === 'object' && squad.logo !== null ? squad.logo.alt : null

						return (
							<li key={m.id ?? `${m.joinDate}-${squad?.id ?? ''}`} className='relative'>
								<span
									className={`border-background absolute top-3 -left-6 h-3 w-3 rounded-full border-2 ${
										active ? 'bg-primary' : 'bg-muted-foreground/40'
									}`}
									aria-hidden
								/>

								<div className='border-border/40 bg-card/40 hover:border-border/70 rounded-xl border p-4 transition-colors'>
									<div className='flex items-start gap-3'>
										<div className='border-border/40 bg-secondary flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border'>
											{logoUrl ? (
												<Image
													src={logoUrl}
													alt={logoAlt || squad?.name || 'squad'}
													width={48}
													height={48}
													className='object-cover'
												/>
											) : (
												<span className='text-muted-foreground/60 text-base font-black'>
													{squad?.name?.[0]?.toUpperCase() ?? '?'}
												</span>
											)}
										</div>

										<div className='min-w-0 flex-1'>
											<div className='flex flex-wrap items-center gap-2'>
												<h4 className='text-foreground truncate text-sm font-bold'>
													{squad?.name ?? 'Неизвестный сквад'}
												</h4>

												<span
													className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${roleTone(m.role as SquadRole)}`}
												>
													{m.role}
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
													{m.joinDate ? formatDate(m.joinDate) : '—'} —
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
		</Modal>
	)
}
