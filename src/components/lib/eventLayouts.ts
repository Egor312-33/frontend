import { Calendar, Layers, type LucideIcon, Radio, Repeat, Sparkles, Trophy, Users } from 'lucide-react'

import type { Event, Media, StreamGrid } from '@/payload-types'

export type StreamGridForView = {
	id: number
	title: string
	type: StreamGrid['type']
	cover: Media | null
	events: Event[]
}

type StreamGridCategory = StreamGrid['type']
export type EventLayout = NonNullable<NonNullable<Event['eventUiConfig']>['layoutTemplate']>

export type CategoryKey = 'all' | 'events' | StreamGridCategory

export const CATEGORIES = [
	{ key: 'all', label: 'Все', icon: Layers, tone: 'primary' },
	{ key: 'events', label: 'События', icon: Calendar, tone: 'foreground' },
	{ key: 'marathon', label: 'Марафоны', icon: Repeat, tone: 'accent' },
	{ key: 'tournament', label: 'Турниры', icon: Trophy, tone: 'primary' },
	{ key: 'series', label: 'Серии', icon: Radio, tone: 'primary' },
	{ key: 'collab', label: 'Коллабы', icon: Users, tone: 'foreground' },
	{ key: 'festival', label: 'Фестивали', icon: Sparkles, tone: 'destructive' }
] as const satisfies readonly {
	key: CategoryKey
	label: string
	icon: LucideIcon
	tone: string
}[]

export type Category = (typeof CATEGORIES)[number]

export const TONE_STYLES: Record<Category['tone'], { active: string; idle: string; iconWrap: string; ring: string }> = {
	primary: {
		active: 'border-primary/60 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent shadow-[var(--shadow-primary-sm)]',
		idle: 'border-border/40 bg-card/40 hover:border-primary/30 hover:bg-primary/5',
		iconWrap: 'bg-primary/15 text-primary border border-primary/30 group-hover:bg-primary/25',
		ring: 'ring-primary/30'
	},
	accent: {
		active: 'border-accent/60 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent shadow-[0_2px_12px_rgba(190,242,100,0.18)]',
		idle: 'border-border/40 bg-card/40 hover:border-accent/30 hover:bg-accent/5',
		iconWrap: 'bg-accent/15 text-accent border border-accent/30 group-hover:bg-accent/25',
		ring: 'ring-accent/30'
	},
	destructive: {
		active: 'border-destructive/60 bg-gradient-to-br from-destructive/15 via-destructive/5 to-transparent shadow-[var(--shadow-destructive-sm)]',
		idle: 'border-border/40 bg-card/40 hover:border-destructive/30 hover:bg-destructive/5',
		iconWrap: 'bg-destructive/15 text-destructive border border-destructive/30 group-hover:bg-destructive/25',
		ring: 'ring-destructive/30'
	},
	foreground: {
		active: 'border-foreground/60 bg-gradient-to-br from-foreground/15 via-foreground/5 to-transparent',
		idle: 'border-border/40 bg-card/40 hover:border-foreground/40',
		iconWrap: 'bg-foreground/10 text-foreground border border-foreground/30 group-hover:bg-foreground/20',
		ring: 'ring-foreground/30'
	}
}

export const EVENT_LAYOUT_STYLES: Record<EventLayout, { card: string; badge: string; accent: string; dot: string }> = {
	'clean-stream': {
		card: 'rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-[var(--shadow-primary-sm)] transition-all duration-300',
		badge: 'rounded-md text-[10px] px-2.5 py-1',
		accent: 'from-primary/15 to-primary/5',
		dot: 'from-primary to-primary/40'
	},
	'retro-marathon': {
		card: 'rounded-lg border border-dashed border-border/60 bg-card/70 font-mono hover:border-accent/50 transition-all duration-300',
		badge: 'rounded-none font-mono text-[10px] border border-current px-2.5 py-1',
		accent: 'from-accent/15 to-accent/5',
		dot: 'from-accent to-accent/40'
	},
	'chaos-incident': {
		card: 'rounded-2xl border-2 border-border/80 bg-gradient-to-br from-card/90 to-destructive/5 backdrop-blur-sm hover:border-destructive/50 hover:shadow-[var(--shadow-destructive-sm)] transition-all duration-300',
		badge: 'rounded-md text-[10px] px-2.5 py-1',
		accent: 'from-destructive/15 to-destructive/5',
		dot: 'from-destructive to-destructive/40'
	},
	'brutal-alert': {
		card: 'rounded-none border-2 border-foreground/80 bg-card/90 hover:bg-foreground hover:text-background transition-all duration-300',
		badge: 'rounded-none border border-foreground text-[10px] font-bold px-2.5 py-1',
		accent: 'from-foreground/15 to-foreground/5',
		dot: 'from-foreground to-foreground/40'
	}
}
