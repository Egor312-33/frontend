'use client'

import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition
} from '@headlessui/react'
import { CirclePlus, Clapperboard, FileText, Radio } from 'lucide-react'
import { Fragment, useState } from 'react'

import { cn } from '@/components/lib/utils'
import { Button } from '@/components/ui/button'

import { UploadVideoModal } from './uploadvideomodal'

const CREATE_OPTIONS = [
	{ id: 'video', label: 'Загрузить видео', icon: Clapperboard },
	{ id: 'stream', label: 'Начать трансляцию', icon: Radio },
	{ id: 'post', label: 'Создать пост', icon: FileText }
] as const

type CreateOptionId = (typeof CREATE_OPTIONS)[number]['id']

export function UserCreateButton() {
	const [activeModal, setActiveModal] = useState<CreateOptionId | null>(null)

	return (
		<>
			<Popover className='relative'>
				{({ open, close }) => (
					<>
						<PopoverButton
							className={cn(
								'flex h-8 items-center gap-1.5 rounded-xl border px-3 text-sm font-medium transition-all duration-200 focus:outline-none',
								open
									? 'border-primary/60 bg-primary/10 text-primary'
									: 'border-border text-foreground hover:border-primary/40 hover:bg-secondary/40 hover:text-primary'
							)}
						>
							<CirclePlus className='h-4 w-4' />
							<span className='hidden sm:inline'>Создать</span>
						</PopoverButton>

						<Transition
							as={Fragment}
							enter='transition ease-out duration-150'
							enterFrom='opacity-0 translate-y-1 scale-95'
							enterTo='opacity-100 translate-y-0 scale-100'
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100 translate-y-0 scale-100'
							leaveTo='opacity-0 translate-y-1 scale-95'
						>
							<PopoverPanel className='border-border bg-red absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border'>
								<div className='p-1'>
									{CREATE_OPTIONS.map(option => {
										const Icon = option.icon
										return (
											<Button
												key={option.id}
												variant='ghost'
												size='sm'
												alignLeft
												startIcon={
													<Icon
														size={20}
														className='text-muted-foreground'
													/>
												}
												onClick={() => {
													close()
													setActiveModal(option.id)
												}}
											>
												{option.label}
											</Button>
										)
									})}
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>

			<UploadVideoModal
				isOpen={activeModal === 'video'}
				onClose={() => setActiveModal(null)}
				onUploadComplete={fileKey => {
					console.log('Uploaded:', fileKey)
					setActiveModal(null)
				}}
			/>
		</>
	)
}
