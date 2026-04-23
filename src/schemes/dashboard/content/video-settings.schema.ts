import { z } from 'zod'

import { Access } from '@/shared/gql/graphql'

export const VideoSettingsSchema = z.object({
	title: z.string().min(1, 'Название обязательно').max(100, {
		message: 'Название не должно превышать 100 символов'
	}),
	description: z
		.string()
		.max(500, {
			message: 'Опсиание не должно превышать 500 символов'
		})
		.optional(),
	access: z.enum(Access),
	categoryIds: z.array(z.string()).default([])
})

export type VideoSettingsFormData = z.infer<typeof VideoSettingsSchema>
