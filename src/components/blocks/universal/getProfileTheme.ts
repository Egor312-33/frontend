

const PROFILE_THEMES = {
    archive: {
        page: 'bg-background text-foreground',
        hero: {
            section: 'bg-background border-b border-border',
            badge: 'bg-accent-2/10 text-accent-2 border border-accent-2/30 text-[10px]',
            title: 'text-foreground',
            nickname: 'bg-accent-2/10 text-accent-2 border border-accent-2/20',
            divider: 'bg-accent-2/30',
            navCard: 'rounded-lg border border-border bg-card hover:border-accent-2/50 transition-colors',
        },
        card: {
            base: 'rounded-lg border border-border bg-card text-card-foreground',
            stat: 'bg-muted rounded-lg border border-border',
        },
        timeline: {
            line: 'bg-accent-2/30',
            dot: 'bg-accent-2',
        },
    },

    creator: {
        page: 'bg-background text-foreground',
        hero: {
            section: 'bg-background border-b-2 border-primary',
            badge: 'bg-primary text-primary-foreground border-0 text-[10px]',
            title: 'text-foreground',
            nickname: 'bg-primary/10 text-primary border border-primary/30',
            divider: 'bg-primary/40',
            navCard: 'rounded-lg border-2 border-primary/30 bg-card hover:border-primary transition-colors',
        },
        card: {
            base: 'rounded-lg border-2 border-primary/30 bg-card text-card-foreground hover:border-primary transition-colors',
            stat: 'bg-primary/5 rounded-lg border border-primary/20',
        },
        timeline: {
            line: 'bg-primary/30',
            dot: 'bg-primary',
        },
    },

    esports: {
        page: 'bg-background text-foreground',
        hero: {
            section: 'bg-background border-b border-border-sub',
            badge: 'bg-primary text-primary-foreground border-0 text-[10px] uppercase tracking-widest',
            title: 'text-primary uppercase tracking-[0.05em]',
            nickname: 'bg-primary/10 text-primary border border-primary/40',
            divider: 'bg-primary/20',
            navCard: 'border border-border-sub bg-card hover:border-primary transition-colors [clip-path:polygon(0_0,92%_0,100%_20%,100%_100%,8%_100%,0_80%)]',
        },
        card: {
            base: 'border border-border-sub bg-card text-card-foreground [clip-path:polygon(0_0,95%_0,100%_12%,100%_100%,5%_100%,0_88%)]',
            stat: 'bg-muted border border-border-sub',
        },
        timeline: {
            line: 'bg-primary/20',
            dot: 'bg-primary',
        },
    },
} as const

export type ProfileTheme = keyof typeof PROFILE_THEMES

export function getProfileTheme(theme?: string | null) {
    const key = theme as keyof typeof PROFILE_THEMES
    return PROFILE_THEMES[key] ?? PROFILE_THEMES['archive']
}