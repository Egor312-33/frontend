'use client'
import { Menu, Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/user/userButton'
import { UserCreateButton } from '@/components/user/userCreateButton/userCreateButton'

import { useCurrent } from '@/hooks/useCurrent'
import { useSidebar } from '@/hooks/useSidebar'

export function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const { isCollapsed, open, close } = useSidebar()
	const { user, isError } = useCurrent()
	console.log('user', user, isError)
	return (
		<header
			className={`bg-background border-border fixed top-0 right-0 z-1000 flex h-12 max-h-12 items-center justify-between gap-2 border-b px-4 transition-all duration-300 ease-in-out md:px-7 ${
				isCollapsed ? 'left-0 md:left-12' : 'left-0 md:left-64'
			} `}
		>
			<div
				className={`flex items-center gap-2 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}
			>
				<button
					onClick={isCollapsed ? open : close}
					className='hover:bg-secondary/50 text-foreground rounded-lg p-2 transition-colors md:hidden'
					aria-label='Toggle sidebar'
				>
					<Menu size={20} />
				</button>

				<Link
					href='/'
					aria-label='Home'
					className='text-foreground hover:text-primary flex items-center gap-2 transition-colors'
				>
					<Image
						src='/images/header/logo.png'
						alt='Stray228freak.ru logo'
						width={48}
						height={40}
						className='shrink-0'
					/>
					<span className='hidden text-base font-medium sm:inline'>
						trash-streamers
					</span>
				</Link>
			</div>

			<div
				className={`flex-1 transition-all duration-300 ${
					isSearchOpen
						? 'max-w-full'
						: 'max-w-0 md:max-w-125 lg:max-w-125'
				} `}
			>
				<div
					className={`md:hidden ${isSearchOpen ? 'hidden' : 'flex'}`}
				>
					<button
						onClick={() => setIsSearchOpen(true)}
						className='hover:bg-secondary/50 text-foreground rounded-lg p-2 transition-colors'
						aria-label='Open search'
					>
						<Search size={20} />
					</button>
				</div>

				<div
					className={`${isSearchOpen ? 'flex' : 'hidden md:flex'} w-full`}
				>
					<SearchHeader
						onClose={() => setIsSearchOpen(false)}
						isOpen={isSearchOpen}
					/>
				</div>
			</div>

			<div
				className={`flex items-center gap-2 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}
			>
				{user ? (
					<>
						<UserCreateButton />
						<UserButton />
					</>
				) : (
					<Link href='/auth/login/otp'>
						<Button size='sm' variant='default'>
							Войти
						</Button>
					</Link>
				)}
			</div>
		</header>
	)
}

function SearchHeader({
	onClose,
	isOpen
}: {
	onClose: () => void
	isOpen: boolean
}) {
	return (
		<div className='relative flex w-full items-center gap-2'>
			<div className='relative w-full'>
				<Search
					size={16}
					className='text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2'
				/>
				<input
					type='text'
					placeholder='Поиск...'
					className='bg-secondary/30 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary h-9 w-full rounded-lg border py-2 pr-4 pl-9 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none'
					autoFocus={isOpen}
				/>
			</div>
			{isOpen && (
				<button
					onClick={onClose}
					className='hover:bg-secondary/50 text-foreground shrink-0 rounded-lg p-2 transition-colors md:hidden'
					aria-label='Close search'
				>
					<X size={18} />
				</button>
			)}
		</div>
	)
}
