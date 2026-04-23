import z from 'zod'

import { Language } from '@/shared/gql/graphql'

const TranslationSchema = z.object({
	language: z.enum(Language),
	title: z.string().min(1, 'Название обязательно'),
	description: z.string().optional()
})

export const CategorySchema = z.object({
	image: z.custom<File | undefined>().optional(),
	translations: z.array(TranslationSchema)
})

export type TypeCategorySchema = z.infer<typeof CategorySchema>

export const defaultCategoryValues: TypeCategorySchema = {
	image: undefined,
	translations: [
		{ language: Language.En, title: '', description: '' },
		{ language: Language.Ru, title: '', description: '' }
	]
}
