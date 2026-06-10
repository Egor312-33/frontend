'use client'

import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { type ReactNode, useState } from 'react'

import { cn } from '@/components/lib/utils'

type TabItem<T extends string> = {
	key: T
	label: string
	icon: LucideIcon
}

type TabSwitcherProps<T extends string> = {
	tabs: readonly TabItem<T>[]
	defaultTab?: T
	onChange?: (key: T) => void
	children: (activeTab: T) => ReactNode
	className?: string
	contentClassName?: string
}

const contentVariants: Variants = {
	hidden: { opacity: 0, y: 12, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.35, ease: 'easeOut' as const }
	},
	exit: {
		opacity: 0,
		y: -8,
		scale: 0.98,
		transition: { duration: 0.2 }
	}
}

export function TabSwitcher<T extends string>({
	tabs,
	defaultTab,
	onChange,
	children,
	className,
	contentClassName
}: TabSwitcherProps<T>) {
	const defaultIndex = defaultTab ? tabs.findIndex(t => t.key === defaultTab) : 0
	const [activeIndex, setActiveIndex] = useState(defaultIndex)

	const handleChange = (index: number) => {
		setActiveIndex(index)
		onChange?.(tabs[index]!.key)
	}

	return (
		<TabGroup selectedIndex={activeIndex} onChange={handleChange} className={cn('space-y-8', className)}>
			<TabList className='bg-card/50 border-border/50 flex scrollbar-none gap-1 overflow-x-auto rounded-2xl border p-1.5 shadow-sm backdrop-blur-xl sm:inline-flex [&::-webkit-scrollbar]:hidden'>
				{tabs.map(tab => {
					const Icon = tab.icon

					return (
						<Tab
							key={tab.key}
							className={({ selected }) =>
								cn(
									'relative flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors',
									selected
										? 'bg-primary text-primary-foreground shadow-md'
										: 'text-muted-foreground hover:text-foreground'
								)
							}
						>
							<Icon className='h-4 w-4' />
							<span className='hidden sm:inline'>{tab.label}</span>
							<span className='inline sm:hidden'>
								{tab.label.length > 5 ? tab.label.slice(0, 3) + '…' : tab.label}
							</span>
						</Tab>
					)
				})}
			</TabList>

			<TabPanels className={contentClassName}>
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeIndex}
						variants={contentVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						{children(tabs[activeIndex]!.key)}
					</motion.div>
				</AnimatePresence>
			</TabPanels>
		</TabGroup>
	)
}
