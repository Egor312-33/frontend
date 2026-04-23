'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { toast } from 'sonner'

import { revalidate } from '@/components/actions/revalidate'
import { FormModal } from '@/components/ui/modal/formModal'

import { useSlugCheck } from '@/hooks/useSlugCheck'

import { EditImageField } from './editImageField'
import { TranslationSection } from './translationSection'
import { buildTranslations } from '@/libs/i18n/build-translations'
import { CategorySchema, type TypeCategorySchema } from '@/schemes/category/category.schema'
import {
	GetCategoriesDocument,
	GetCategoryWithTranslationsDocument,
	Language,
	UpdateCategoryDocument
} from '@/shared/gql/graphql'

interface EditCategoryProps {
	slug: string
	thumbnailUrl?: string | null
	isOpen: boolean
	onClose: () => void
}

export function EditCategory({ slug, thumbnailUrl, isOpen, onClose }: EditCategoryProps) {
	const { slugError, handleTitleChange, resetSlugError } = useSlugCheck({ excludeSlug: slug })

	const { data, loading: isLoadingData } = useQuery(GetCategoryWithTranslationsDocument, {
		variables: { slug },
		skip: !isOpen
	})

	const serverData = data?.getCategoryWithTranslations
	const serverThumbnail = serverData?.thumbnailUrl ?? thumbnailUrl

	const [updateCategory, { loading: isSaving }] = useMutation(UpdateCategoryDocument, {
		onCompleted: async data => {
			if (data.updateCategory) {
				toast.success('Категория успешно изменена')
				onClose()
				await revalidate('categories-video')
			}
		},
		update(cache, { data }) {
			if (!data?.updateCategory) return

			const existing = cache.readQuery({
				query: GetCategoriesDocument
			})

			if (!existing) return

			const updated = existing.getCategories.map(cat => {
				if (cat.slug !== data.updateCategory.slug) return cat

				const currentLang = cat.translations?.[0]?.language
				return {
					...cat,
					translations: data.updateCategory.translations.filter(
						t => t.language.toUpperCase() === currentLang.toUpperCase()
					)
				}
			})

			cache.writeQuery({
				query: GetCategoryWithTranslationsDocument,
				variables: { slug },
				data: { getCategoryWithTranslations: data.updateCategory }
			})
			cache.writeQuery({
				query: GetCategoriesDocument,
				data: {
					getCategories: updated
				}
			})
		},
		onError() {
			toast.error('Ошибка обновления категории')
		}
	})

	const handleSubmit = (formData: TypeCategorySchema) => {
		if (slugError) return
		const currentSlug = serverData?.slug || slug
		updateCategory({
			variables: {
				slug: currentSlug,
				image: formData.image ?? null,
				input: {
					targets: serverData?.targets ?? [],
					translations: formData.translations.map(t => ({
						language: t.language,
						title: t.title,
						description: t.description ?? ''
					}))
				}
			}
		}).then(() => {
			toast.success('Категория обновлена')
			resetSlugError()
			onClose()
		})
	}

	if (isLoadingData) {
		return (
			<FormModal
				isOpen={isOpen}
				onClose={onClose}
				formTitle='Редактировать категорию'
				schema={CategorySchema}
				defaultValues={{ image: undefined, translations: [] }}
				onFormSubmit={() => {}}
				confirmText='Сохранить'
				cancelText='Отмена'
				isLoading={true}
			>
				<EditSkeleton />
			</FormModal>
		)
	}

	const translations = buildTranslations(Object.values(Language), serverData?.translations ?? [], (lang, t) => ({
		language: lang,
		title: t?.title ?? '',
		description: t?.description ?? ''
	}))

	return (
		<FormModal
			key={serverData?.id}
			isOpen={isOpen}
			onClose={onClose}
			formTitle='Редактировать категорию'
			schema={CategorySchema}
			defaultValues={{ image: undefined, translations }}
			onFormSubmit={handleSubmit}
			confirmText='Сохранить'
			cancelText='Отмена'
			isLoading={isSaving}
			confirmDisabled={!!slugError}
		>
			<EditImageField existingUrl={serverThumbnail} />
			<div className='border-border border-t' />
			{translations.map((t, index) => (
				<TranslationSection
					key={t.language}
					index={index}
					language={t.language as Language}
					slugError={t.language === Language.En ? (slugError ?? undefined) : undefined}
					onEnTitleChange={t.language === Language.En ? handleTitleChange : undefined}
				/>
			))}
		</FormModal>
	)
}

function EditSkeleton() {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-start gap-4'>
				<div className='bg-muted animate-pulse rounded-xl' style={{ width: 72, height: 112 }} />
				<div className='flex flex-col gap-2 pt-1'>
					<div className='bg-muted h-4 w-32 animate-pulse rounded' />
					<div className='bg-muted h-3 w-48 animate-pulse rounded' />
				</div>
			</div>
			<div className='border-border border-t' />
			{[0, 1].map(i => (
				<div key={i} className='flex flex-col gap-3'>
					<div className='bg-muted h-5 w-20 animate-pulse rounded-md' />
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div className='bg-muted h-10 animate-pulse rounded-xl' />
						<div className='bg-muted h-20 animate-pulse rounded-xl' />
					</div>
				</div>
			))}
		</div>
	)
}
