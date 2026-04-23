'use client'

import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { revalidate } from '@/components/actions/revalidate'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'

import { useSlugCheck } from '@/hooks/useSlugCheck'

import { EditImageField } from './editImageField'
import { TranslationSection } from './translationSection'
import { CategorySchema, type TypeCategorySchema, defaultCategoryValues } from '@/schemes/category/category.schema'
import { CreateCategoryVideoDocument, GetCategoriesDocument, Language } from '@/shared/gql/graphql'

interface CreateCategoryProps {
	isOpen: boolean
	onClose: () => void
	onCreated?: () => void
}

export function CreateCategory({ isOpen, onClose, onCreated }: CreateCategoryProps) {
	const { slugError, handleTitleChange, resetSlugError } = useSlugCheck()

	const form = useForm<TypeCategorySchema>({
		resolver: zodResolver(CategorySchema),
		defaultValues: defaultCategoryValues,
		mode: 'onChange'
	})

	const {
		handleSubmit,
		formState: { isSubmitting },
		reset
	} = form

	useFieldArray({ control: form.control, name: 'translations' })

	const [createCategory, { loading: isSaving }] = useMutation(CreateCategoryVideoDocument, {
		onCompleted: async data => {
			if (data.createCategoryVideo) {
				toast.success('Категория успешно создана')
				onClose()
				await revalidate('categories-video')
			}
		},
		update(cache, { data }) {
			if (!data?.createCategoryVideo) return
			const existing = cache.readQuery({ query: GetCategoriesDocument })
			if (existing?.getCategories) {
				cache.writeQuery({
					query: GetCategoriesDocument,
					data: { getCategories: [data.createCategoryVideo, ...existing.getCategories] }
				})
			}
		},
		onError(e) {
			toast.error(`Ошибка: ${e.message}`)
		}
	})

	const handleClose = () => {
		if (isSaving) return
		reset()
		resetSlugError()
		onClose()
	}

	const onSubmit = async (data: TypeCategorySchema) => {
		if (slugError) return
		try {
			await createCategory({
				variables: {
					image: data.image,
					input: {
						translations: data.translations
							.filter(t => t.title)
							.map(t => ({
								language: t.language,
								title: t.title,
								description: t.description ?? ''
							}))
					}
				}
			})
			toast.success('Категория создана')
			reset()
			resetSlugError()
			onCreated?.()
			onClose()
		} catch {}
	}

	const busy = isSaving || isSubmitting

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
			title='Создать категорию'
			size='lg'
			closeOnBackdrop={!busy}
			showCloseButton={!busy}
			footer={
				<>
					<Button variant='secondary' onClick={handleClose} disabled={busy}>
						Отмена
					</Button>
					<Button
						variant='default'
						onClick={handleSubmit(onSubmit)}
						disabled={!!slugError || busy}
						loading={busy}
					>
						Создать
					</Button>
				</>
			}
		>
			<FormProvider {...form}>
				<div className='flex flex-col gap-6'>
					<EditImageField />
					<div className='border-border border-t' />
					{defaultCategoryValues.translations.map((t, i) => (
						<TranslationSection
							key={t.language}
							index={i}
							language={t.language as Language}
							slugError={t.language === Language.En ? (slugError ?? undefined) : undefined}
							onEnTitleChange={t.language === Language.En ? handleTitleChange : undefined}
						/>
					))}
				</div>
			</FormProvider>
		</Modal>
	)
}
