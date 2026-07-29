// components/route-tabs-nav.tsx
'use client'

import { Tab, TabGroup, TabList } from '@headlessui/react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { cn } from '@/components/lib/utils'

type RouteTabConfig<T extends string> = {
	key: T
	segment: string | null
	icon?: LucideIcon
}

type RouteTabsNavProps<T extends string> = {
	tabs: readonly RouteTabConfig<T>[]
	basePath: string
	getLabel: (key: T) => string
	ariaLabel: string
	className?: string
}

export function RouteTabsNav<T extends string>({
	tabs,
	basePath,
	getLabel,
	ariaLabel,
	className
}: RouteTabsNavProps<T>) {
	const activeSegment = useSelectedLayoutSegment()
	const rawIndex = tabs.findIndex(tab => tab.segment === activeSegment)
	const selectedIndex = rawIndex === -1 ? 0 : rawIndex

	return (
		<TabGroup selectedIndex={selectedIndex}>
			<TabList
				as='nav'
				aria-label={ariaLabel}
				className={cn(
					'border-border/40 bg-card/30 nice-scrollbar flex snap-x snap-mandatory gap-1 overflow-x-auto scroll-smooth rounded-2xl border p-1.5 backdrop-blur-sm',
					className
				)}
			>
				{tabs.map(tab => {
					const Icon = tab.icon
					const href = tab.segment ? `${basePath}/${tab.segment}` : basePath

					return (
						<Tab
							key={tab.key}
							as={Link}
							href={href}
							prefetch
							className='group focus-visible:ring-ring relative flex shrink-0 snap-start items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors outline-none hover:bg-white/5 focus-visible:ring-2'
						>
							{({ selected }) => (
								<>
									{selected && (
										<motion.span
											layoutId={`route-tab-pill-${basePath}`}
											aria-hidden
											className='bg-primary absolute inset-0 rounded-xl shadow-sm'
											transition={{ type: 'spring', stiffness: 380, damping: 30 }}
										/>
									)}
									{Icon && (
										<Icon
											className={cn(
												'relative h-4 w-4 transition-transform duration-200 group-hover:scale-110',
												selected
													? 'text-primary-foreground'
													: 'text-muted-foreground group-hover:text-foreground'
											)}
										/>
									)}
									<span
										className={cn(
											'relative tracking-tight transition-colors',
											selected
												? 'text-primary-foreground'
												: 'text-muted-foreground group-hover:text-foreground'
										)}
									>
										{getLabel(tab.key)}
									</span>
								</>
							)}
						</Tab>
					)
				})}
			</TabList>
		</TabGroup>
	)
}
