'use client'
import { useMutation } from '@apollo/client/react'
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react'
import {
	Bell,
	Globe,
	HandHelping,
	LogOut,
	Settings,
	Shield,
	User2
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, memo } from 'react'
import { toast } from 'sonner'

import { useCurrent } from '@/hooks/useCurrent'

import { MenuItemButton } from './menuItemButton'
import { ThemeSwitch } from './themeSwitch'
import { LogoutUserDocument } from '@/shared/gql/graphql'
import { getMediaSource } from '@/utils/get-media-source'

export const UserButton = memo(function UserButton() {
	const t = useTranslations('layout.header.headerMenu.profileMenu')

	const { user } = useCurrent()
	console.log('user', user)
	const router = useRouter()

	const [logout] = useMutation(LogoutUserDocument, {
		onCompleted() {
			toast.success(t('successMessage'))
			router.push('/auth/login/otp')
		},
		onError() {
			toast.error(t('errorMessage'))
		}
	})

	if (!user) return <UserButtonSkeleton />

	return (
		<Menu as='div' className='relative inline-block'>
			<>
				<MenuButton className='focus:ring-primary cursor-pointer rounded-full border-none bg-transparent p-0 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none'>
					{user.user?.avatar ? (
						<Image
							src={`${getMediaSource(user.user?.avatar)}?v=${user.user.updatedAt}`}
							alt='Аватар'
							width={50}
							height={50}
							className='hover:border-primary h-10 w-10 rounded-full border-2 border-transparent object-cover transition-colors duration-200'
						/>
					) : (
						<div className='from-primary to-accent text-primary-foreground hover:border-accent hover:from-accent hover:to-primary flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-linear-to-br text-base font-semibold transition-all duration-200'>
							{user.user?.displayName.slice(0, 1).toUpperCase()}
						</div>
					)}
				</MenuButton>
				<Transition
					as={Fragment}
					enter='transition-all duration-150 ease-out'
					enterFrom='opacity-0 -translate-y-2 scale-96'
					enterTo='opacity-100 translate-y-0 scale-100'
					leave='transition-all duration-100 ease-in'
					leaveFrom='opacity-100 translate-y-0 scale-100'
					leaveTo='opacity-0 -translate-y-2 scale-96'
				>
					<MenuItems
						className='bg-background border-border [&::-webkit-scrollbar-track]:bg-secondary-dark [&::-webkit-scrollbar-thumb]:bg-secondary-hover [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground absolute top-[calc(100%+8px)] right-0 z-1000 max-h-[calc(100vh-80px)] w-70 overflow-y-auto rounded-lg border shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_1px_rgba(0,0,0,0.4)] focus:outline-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded'
						modal={false}
					>
						<div className='flex items-center gap-3 p-4'>
							<div className='shrink-0'>
								{user.user?.avatar ? (
									<Image
										src={`${getMediaSource(user.user?.avatar)}?v=${user?.user.updatedAt}`}
										alt='Аватар'
										width={50}
										height={50}
										className='border-border h-12 w-12 rounded-full border-2 object-cover'
									/>
								) : (
									<div className='from-primary to-accent text-primary-foreground border-border flex h-12 w-12 items-center justify-center rounded-full border-2 bg-linear-to-br text-xl font-semibold'>
										{user.user?.displayName
											.slice(0, 1)
											.toUpperCase()}
									</div>
								)}
							</div>
							<div className='min-w-0 flex-1'>
								<p className='text-foreground m-0 mb-0.5 overflow-hidden text-[15px] font-semibold text-ellipsis whitespace-nowrap'>
									{user.user?.displayName}
								</p>
								<p className='text-muted-foreground m-0 overflow-hidden text-[13px] text-ellipsis whitespace-nowrap'>
									@{user.user?.userName}
								</p>
							</div>
						</div>
						<div className='bg-border my-1 h-px' />
						<div className='py-1'>
							<MenuItemButton
								icon={<User2 />}
								label={t('userProfile')}
								href={'/user/' + user.user?.userName}
							/>

							<MenuItemButton
								icon={<Settings />}
								label={t('dashboard')}
								href='/dashboard/settings'
							/>
						</div>
						<div className='bg-border my-1 h-px' />
						<div className='py-1'>
							<MenuItem>
								<ThemeSwitch />
							</MenuItem>
							<MenuItemButton
								icon={<Globe />}
								label='Язык'
								onClick={() =>
									toast.info('Функция в разработке')
								}
								endContent={
									<span className='text-muted-foreground ml-auto text-[13px]'>
										Русский
									</span>
								}
							/>
							<MenuItemButton
								icon={<Bell />}
								label='Уведомления'
								onClick={() =>
									toast.info('Функция в разработке')
								}
							/>
						</div>
						<div className='bg-border my-1 h-px' />
						<div className='py-1'>
							<MenuItemButton
								icon={<Shield />}
								label='Безопасность'
								onClick={() =>
									toast.info('Функция в разработке')
								}
							/>
							<MenuItemButton
								icon={<HandHelping />}
								label='Помощь'
								onClick={() =>
									toast.info('Функция в разработке')
								}
							/>
						</div>
						<div className='bg-border my-1 h-px' />
						<div className='py-1'>
							<MenuItemButton
								icon={<LogOut />}
								label={t('logout')}
								onClick={() => logout()}
								variant='destructive'
							/>
						</div>
					</MenuItems>
				</Transition>
			</>
		</Menu>
	)
})

function UserButtonSkeleton() {
	return (
		<div className='relative inline-block'>
			<div className="bg-secondary-dark relative h-10 w-10 overflow-hidden rounded-full before:absolute before:top-0 before:-left-full before:h-full before:w-full before:animate-[shimmer_1.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/5 before:to-transparent before:content-['']" />
		</div>
	)
}
