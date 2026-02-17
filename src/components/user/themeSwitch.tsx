'use client'

import { Switch } from '@headlessui/react'
import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

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
		<Button
			type='button'
			onClick={handleToggle}
			disabled={!mounted}
			variant='ghost'
			className='text-foreground w-full justify-start gap-3'
			startIcon={<Moon className='size-5' />}
		>
			<span className='flex-1 text-left'>Тёмная тема</span>

			<Switch
				checked={isDark}
				onChange={handleToggle}
				disabled={!mounted}
				className='group bg-muted data-checked:bg-primary relative flex h-7 w-12 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none'
			>
				<span
					aria-hidden='true'
					className='bg-foreground group-data-checked:bg-primary-foreground inline-block h-5 w-5 translate-x-0 rounded-full shadow-sm transition-transform duration-200 ease-in-out group-data-checked:translate-x-5'
				/>
			</Switch>
		</Button>
	)
}
