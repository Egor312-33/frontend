export const PROFILE_LAYOUTS = {
    'bento': 'grid grid-cols-1 gap-6 md:grid-cols-2',
    'fullwidth-timeline': 'flex flex-col gap-0',
    'classic-wiki': 'grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]',
} as const satisfies Record<string, string>

export const CARD_STYLES = {
    'clean-card': '',
    'chaos-glitch': '[clip-path:polygon(0_0,98%_0,100%_4%,100%_100%,2%_100%,0_96%)]',
    'brutal-flat': '!rounded-none !border-4 !border-foreground !shadow-[6px_6px_0px_0px_var(--foreground)]',
    'retro-box': '!rounded-none !border-2 !border-border !shadow-[4px_4px_0px_0px_var(--border)] font-mono',
} as const satisfies Record<string, string>

type VibeAccentValue = {
    text: string
    badge: string
    stat: string
    dot: string
    cardBorder: string
}

export const VIBE_ACCENTS = {
    'default': {
        text: 'text-foreground',
        badge: 'bg-muted text-muted-foreground border border-border',
        stat: 'text-foreground',
        dot: 'bg-border',
        cardBorder: 'border-border',
    },
    'danger': {
        text: 'text-accent-2',
        badge: 'bg-accent-2/10 text-accent-2 border border-accent-2/40',
        stat: 'text-accent-2',
        dot: 'bg-accent-2',
        cardBorder: 'border-accent-2/50',
    },
    'legendary': {
        text: 'text-primary',
        badge: 'bg-primary/10 text-primary border border-primary/40',
        stat: 'text-primary',
        dot: 'bg-primary',
        cardBorder: 'border-primary/50',
    },
    'muted': {
        text: 'text-muted-foreground',
        badge: 'bg-muted text-muted-foreground border border-border',
        stat: 'text-muted-foreground',
        dot: 'bg-muted-foreground/30',
        cardBorder: 'border-border',
    },
} as const satisfies Record<string, VibeAccentValue>

export type ProfileLayout = keyof typeof PROFILE_LAYOUTS
export type CardStyle = keyof typeof CARD_STYLES
export type VibeAccent = keyof typeof VIBE_ACCENTS

export function getVisualConfig(config?: {
    profileLayout?: ProfileLayout | null
    cardStyle?: CardStyle | null
    vibeAccent?: VibeAccent | null
}) {
    return {
        layout: PROFILE_LAYOUTS[config?.profileLayout ?? 'bento'],
        cardExtra: CARD_STYLES[config?.cardStyle ?? 'clean-card'],
        vibe: VIBE_ACCENTS[config?.vibeAccent ?? 'default'],
    }
}