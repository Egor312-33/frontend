import { useLazyQuery } from '@apollo/client/react'
import { useCallback, useRef, useState } from 'react'

import { CheckAvailabilityCategoryDocument } from '@/shared/gql/graphql'

interface UseSlugCheckOptions {
	excludeSlug?: string
}

export function useSlugCheck({ excludeSlug }: UseSlugCheckOptions = {}) {
	const [slugError, setSlugError] = useState<string | null>(null)
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const [checkSlug] = useLazyQuery(CheckAvailabilityCategoryDocument)

	const handleTitleChange = useCallback(
		(title: string) => {
			if (timerRef.current) clearTimeout(timerRef.current)
			setSlugError(null)
			if (!title.trim()) return
			if (excludeSlug && title.trim() === excludeSlug) return

			timerRef.current = setTimeout(async () => {
				const { data } = await checkSlug({ variables: { slug: title.trim() } })
				if (data?.checkAvailabilityCategory?.isAvailable === false) setSlugError('Это название уже занято')
			}, 500)
		},
		[checkSlug, excludeSlug]
	)

	const resetSlugError = () => setSlugError(null)

	return { slugError, handleTitleChange, resetSlugError }
}
