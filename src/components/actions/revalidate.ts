'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { CacheTag } from './cache-tags'

export async function revalidate(tag: CacheTag) {
	revalidateTag(tag, '')
}

export async function revalidatePage(path: string) {
	revalidatePath(path)
}
