'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2, Upload } from 'lucide-react'
import Image from 'next/image'
import { type ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { ConfirmModal } from '@/components/ui/modal/confirmModal'
import Typography from '@/components/ui/typography'

import { useCurrent } from '@/hooks/useCurrent'

import { CropAvatarModal } from './CropAvatarModal'
import { type TypeUploadFileSchema, uploadFileSchema } from '@/schemes/profile/upload-file.schema'
import { DeleteAvatarProfileDocument, UpdateAvatarProfileDocument } from '@/shared/gql/graphql'
import { getMediaSource } from '@/utils/get-media-source'

export function ChangeAvatarForm() {
	const { user, isLoadingProfile } = useCurrent()
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [cropSrc, setCropSrc] = useState<string | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const form = useForm<TypeUploadFileSchema>({
		resolver: zodResolver(uploadFileSchema),
		values: { file: user?.user?.avatar! },
		mode: 'onChange'
	})

	const {
		formState: { errors }
	} = form
	const fileValue = form.watch('file')

	const [update, { loading: isLoadingUpdate }] = useMutation(UpdateAvatarProfileDocument, {
		update(cache, { data }) {
			if (!data?.updateAvatarProfile || !user?.user?.id) return
			const { key, updatedAt } = data.updateAvatarProfile
			cache.modify({
				id: cache.identify({
					__typename: 'UserModel',
					id: user.user.id
				}),
				fields: {
					avatar: () => key,
					updatedAt: () => updatedAt
				}
			})
		},
		onCompleted() {
			toast.success('Аватар успешно обновлён')
		},
		onError() {
			toast.error('Ошибка обновления аватара')
		}
	})

	const [deleteAvatar, { loading: isLoadingDelete }] = useMutation(DeleteAvatarProfileDocument, {
		update(cache) {
			if (!user?.user?.id) return
			cache.modify({
				id: cache.identify({
					__typename: 'UserModel',
					id: user.user.id
				}),
				fields: { avatar: () => null }
			})
		},
		onCompleted() {
			toast.success('Аватар успешно удалён')
			setIsDeleteModalOpen(false)
		},
		onError() {
			toast.error('Ошибка удаления аватара')
		}
	})

	// Шаг 1: выбрали файл → показываем кроп
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		// сбрасываем input чтобы onChange сработал повторно при том же файле
		e.target.value = ''
		const objectUrl = URL.createObjectURL(file)
		setCropSrc(objectUrl)
	}

	// Шаг 2: пользователь подтвердил кроп → загружаем
	const handleCropComplete = (croppedFile: File) => {
		form.setValue('file', croppedFile)
		update({ variables: { avatar: croppedFile } })
		setCropSrc(null)
	}

	const handleConfirmDelete = () => {
		if (user?.user?.avatar) {
			deleteAvatar({ variables: { key: user.user.avatar } })
		}
	}

	if (isLoadingProfile) return <ChangeAvatarFormSkeleton />

	return (
		<>
			<div className='border-border from-card to-background hover:border-primary/30 relative overflow-hidden rounded-xl border bg-linear-to-br p-6 transition-all duration-200'>
				<div className='via-primary/40 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent' />

				<div className='flex flex-col gap-6 md:flex-row md:items-start'>
					{/* Аватар */}
					<div className='shrink-0'>
						<div className='ring-border relative h-32 w-32 overflow-hidden rounded-full ring-2'>
							{(() => {
								if (fileValue instanceof File) {
									return (
										<Image
											src={URL.createObjectURL(fileValue)}
											alt='Аватар'
											width={128}
											height={128}
											className='h-full w-full object-cover'
										/>
									)
								}
								if (user?.user?.avatar) {
									return (
										<Image
											src={`${getMediaSource(user.user.avatar)}?v=${user.user.updatedAt}`}
											alt='Аватар'
											width={128}
											height={128}
											className='h-full w-full object-cover'
										/>
									)
								}
								return (
									<div className='from-primary to-accent text-primary-foreground flex h-full w-full items-center justify-center bg-linear-to-br text-4xl font-bold'>
										{user?.user?.displayName?.slice(0, 1).toUpperCase() ?? '?'}
									</div>
								)
							})()}
						</div>
					</div>

					{/* Инфо + кнопки */}
					<div className='flex-1 space-y-4'>
						<div>
							<Typography variant='title-4' tag='h4'>
								Фото профиля
							</Typography>
							<Typography variant='body-3'>
								Рекомендуемый размер: 512x512px. Форматы: JPG, PNG, GIF
							</Typography>
						</div>

						<div className='flex flex-wrap gap-3'>
							<input
								type='file'
								className='hidden'
								ref={inputRef}
								accept='image/*'
								onChange={handleFileChange}
							/>
							<Button
								onClick={() => inputRef.current?.click()}
								disabled={isLoadingUpdate}
								loading={isLoadingUpdate}
								startIcon={<Upload />}
								variant='default'
							>
								Загрузить фото
							</Button>

							{user?.user?.avatar && (
								<Button
									onClick={() => setIsDeleteModalOpen(true)}
									disabled={isLoadingUpdate}
									variant='destructive'
									startIcon={<Trash2 />}
								>
									Удалить
								</Button>
							)}
						</div>

						{errors.file && <Typography variant='body-3'>{errors.file.message}</Typography>}
					</div>
				</div>
			</div>

			{cropSrc && (
				<CropAvatarModal
					imageSrc={cropSrc}
					isOpen={!!cropSrc}
					onClose={() => setCropSrc(null)}
					onCropComplete={handleCropComplete}
				/>
			)}
			<ConfirmModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={handleConfirmDelete}
				title='Удалить аватар?'
				message='Вы уверены, что хотите удалить фото профиля? Это действие нельзя отменить.'
				confirmText='Удалить'
				cancelText='Отмена'
				isLoading={isLoadingDelete}
				variant='danger'
			/>
		</>
	)
}

function ChangeAvatarFormSkeleton() {
	return (
		<div className='border-border from-card to-background rounded-xl border bg-linear-to-br p-6'>
			<div className='flex flex-col gap-6 md:flex-row md:items-start'>
				<div className='bg-muted h-32 w-32 animate-pulse rounded-full' />
				<div className='flex-1 space-y-4'>
					<div className='space-y-2'>
						<div className='bg-muted h-6 w-32 animate-pulse rounded' />
						<div className='bg-muted h-4 w-64 animate-pulse rounded' />
					</div>
					<div className='flex gap-3'>
						<div className='bg-muted h-10 w-32 animate-pulse rounded-xl' />
						<div className='bg-muted h-10 w-24 animate-pulse rounded-xl' />
					</div>
				</div>
			</div>
		</div>
	)
}
