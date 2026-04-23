'use client'

import { useMutation } from '@apollo/client/react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

import { revalidate } from '@/components/actions/revalidate'
import { ButtonIcon } from '@/components/ui/buttonIcon'
import { ConfirmModal } from '@/components/ui/modal/confirmModal'

import { EditCategory } from './editCategory/editcategory'
import { DeleteCategoryDocument } from '@/shared/gql/graphql'
import { getMediaSource } from '@/utils/get-media-source'

interface CategoryCardProps {
	slug: string
	thumbnailUrl?: string | null
	title: string
}

export function CategoryCard({ slug, thumbnailUrl, title }: CategoryCardProps) {
	const [isEditOpen, setIsEditOpen] = useState(false)
	const [isDeleteOpen, setIsDeleteOpen] = useState(false)

	const [deleteCategory, { loading: isDeleting }] = useMutation(DeleteCategoryDocument, {
		variables: { slug },
		onCompleted: async data => {
			if (data.deleteCategory) {
				toast.success('Категория удалена')
				setIsDeleteOpen(false)
				await revalidate('categories-video')
			}
		},
		update(cache) {
			cache.modify({
				fields: {
					getAllCategories(existing = [], { readField }) {
						return existing.filter((ref: any) => readField('slug', ref) !== slug)
					}
				}
			})
		},
		onError(e) {
			toast.error(`Ошибка: ${e.message}`)
		}
	})

	return (
		<>
			<div className='group bg-secondary hover:ring-primary/60 relative aspect-9/14 w-full cursor-pointer overflow-hidden rounded-xl transition-all duration-250 hover:-translate-y-1 hover:ring-2'>
				{thumbnailUrl ? (
					<Image
						src={getMediaSource(thumbnailUrl)}
						alt={title}
						className='object-cover transition-[filter] duration-250 group-hover:brightness-110'
						width={360}
						height={560}
					/>
				) : (
					<div className='from-secondary to-muted flex h-full w-full items-center justify-center bg-linear-to-br'>
						<span className='text-muted-foreground text-4xl font-bold'>
							{title.slice(0, 1).toUpperCase()}
						</span>
					</div>
				)}

				<div className='absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 transition-all duration-250 group-hover:from-black/95'>
					<p className='line-clamp-2 text-sm leading-snug font-bold text-white'>{title}</p>
				</div>

				<div className='absolute top-2 right-2 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
					<ButtonIcon
						variant='change'
						size='sm'
						title='Редактировать'
						disabled={isDeleting}
						onClick={() => setIsEditOpen(true)}
					/>
					<ButtonIcon
						variant='remove'
						size='sm'
						title='Удалить'
						disabled={isDeleting}
						onClick={() => setIsDeleteOpen(true)}
					/>
				</div>
			</div>

			{isEditOpen && (
				<EditCategory
					slug={slug}
					thumbnailUrl={thumbnailUrl}
					isOpen={isEditOpen}
					onClose={() => setIsEditOpen(false)}
				/>
			)}

			<ConfirmModal
				isOpen={isDeleteOpen}
				onClose={() => setIsDeleteOpen(false)}
				onConfirm={() => deleteCategory()}
				title='Удалить категорию?'
				message={`Категория «${title}» будет удалена безвозвратно.`}
				confirmText='Удалить'
				cancelText='Отмена'
				isLoading={isDeleting}
				variant='danger'
			/>
		</>
	)
}
