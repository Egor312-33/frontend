import { MEDIA_CMS_URL, MEDIA_URL } from '@/libs/constants/url.constants'

export function getMediaSource(path: string | undefined | null) {
	return `${MEDIA_URL}/${path}`
}

export function getMediaCMS(path: string | undefined | null) {
	return `${MEDIA_CMS_URL}${path}`
}
