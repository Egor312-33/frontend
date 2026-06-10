import { Crown, type LucideIcon, UserX } from 'lucide-react'

import type { EpochParticipant, SquadMember } from '@/payload-types'

export type EpochRole = NonNullable<EpochParticipant['roleInEpoch']>
export type SquadRole = NonNullable<SquadMember['role']>

export const SQUAD_ROLE: Record<SquadRole, { label: string; icon: LucideIcon | null; style: string }> = {
	leader: { label: 'Лидер', icon: Crown, style: 'bg-amber-500/15 text-amber-500 border-amber-500/30' },
	core: { label: 'Основной', icon: null, style: 'bg-primary/15 text-primary border-primary/30' },
	secondary: { label: 'Второстепенный', icon: null, style: 'bg-muted/50 text-muted-foreground border-border/40' },
	'ex-member': { label: 'Бывший', icon: UserX, style: 'bg-destructive/15 text-destructive border-destructive/30' }
} as const

export const EPOCH_ROLE_TONES: Record<EpochRole, string> = {
	legend: 'bg-primary/15 text-primary border-primary/30',
	'core-member': 'bg-accent/15 text-accent border-accent/30',
	secondary: 'bg-secondary text-muted-foreground border-border/30',
	guest: 'bg-secondary text-muted-foreground border-border/30',
	'ex-member': 'bg-destructive/10 text-destructive border-destructive/30'
}

export const SQUAD_ROLE_TONES: Record<SquadRole, string> = {
	leader: 'bg-primary/15 text-primary border-primary/30',
	core: 'bg-accent/15 text-accent border-accent/30',
	secondary: 'bg-secondary text-muted-foreground border-border/30',
	'ex-member': 'bg-destructive/10 text-destructive border-destructive/30'
}

export const SQUAD_ROLE_FALLBACK_TONE = 'bg-secondary text-muted-foreground border-border/30'
