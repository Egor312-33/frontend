'use client'

import { Switch } from '@headlessui/react'
import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '../lib/utils'

export function ThemeSwitch() {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const isDark = mounted ? resolvedTheme === 'dark' : false

	const handleToggle = () => {
		setTheme(isDark ? 'light' : 'dark')
	}

	return (
		<div
			role='button'
			tabIndex={0}
			onClick={handleToggle}
			onKeyDown={e => e.key === 'Enter' && handleToggle()}
			className={cn(
				'text-foreground flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors',
				'hover:bg-accent hover:text-accent-foreground', // Эффект ghost кнопки
				!mounted && 'cursor-not-allowed opacity-50'
			)}
		>
			<Moon className='size-5 shrink-0' />

			<span className='flex-1 text-left text-sm font-medium'>Тёмная тема</span>

			<Switch
				checked={isDark}
				onChange={handleToggle}
				onClick={e => e.stopPropagation()}
				className={cn(
					'group relative flex h-7 w-12 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none',
					isDark ? 'bg-primary' : 'bg-muted'
				)}
			>
				<span
					aria-hidden='true'
					className={cn(
						'bg-background inline-block h-5 w-5 rounded-full shadow-sm transition-transform duration-200 ease-in-out',
						isDark ? 'translate-x-5' : 'translate-x-0'
					)}
				/>
			</Switch>
		</div>
	)
}
