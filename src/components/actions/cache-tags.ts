// Обычный файл — не 'use server', просто константы
export const CACHE_TAGS = {
	categoriesVideo: 'categories-video',
	videos: 'videos',
	users: 'users'
} as const

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS]
