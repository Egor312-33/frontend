import { Crown, type LucideIcon, UserX } from 'lucide-react'

import type { EpochParticipant_RoleInEpoch, SquadMember_Role } from '@/shared/gql/cms/graphql'

export type EpochRole = EpochParticipant_RoleInEpoch
export type SquadRole = SquadMember_Role

export const SQUAD_ROLE: Record<SquadRole, { label: string; icon: LucideIcon | null; style: string }> = {
	leader: { label: 'Лидер', icon: Crown, style: 'bg-amber-500/15 text-amber-500 border-amber-500/30' },
	core: { label: 'Основной', icon: null, style: 'bg-primary/15 text-primary border-primary/30' },
	secondary: { label: 'Второстепенный', icon: null, style: 'bg-muted/50 text-muted-foreground border-border/40' },
	ex_member: { label: 'Бывший', icon: UserX, style: 'bg-destructive/15 text-destructive border-destructive/30' }
} as const

export const EPOCH_ROLE: Record<EpochRole, { label: string; icon: LucideIcon | null; style: string }> = {
	legend: { label: 'Легенда эпохи', icon: Crown, style: 'bg-amber-500/15 text-amber-500 border-amber-500/30' },
	core_member: { label: 'Основной состав', icon: null, style: 'bg-primary/15 text-primary border-primary/30' },
	secondary: { label: 'Второстепенный', icon: null, style: 'bg-muted/50 text-muted-foreground border-border/40' },
	guest: { label: 'Гость', icon: null, style: 'bg-muted/50 text-muted-foreground border-border/40' },
	ex_member: { label: 'Покинул', icon: UserX, style: 'bg-destructive/15 text-destructive border-destructive/30' }
} as const

export const SQUAD_ROLE_FALLBACK_TONE = 'bg-secondary text-muted-foreground border-border/30'
