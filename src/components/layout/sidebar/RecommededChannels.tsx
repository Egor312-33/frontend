'use client'

import { useTranslations } from 'next-intl'


import { useSidebar } from '@/hooks/useSidebar'


export function RecommededChannels() {
    const t = useTranslations('layout.sidebar.recommended')

    const { isCollapsed } = useSidebar()



    return (
        <div>

        </div>
    )
}