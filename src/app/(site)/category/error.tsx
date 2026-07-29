'use client'

import { ErrorMessage } from '@/components/ui/error'

export default function Error({ error }: { error: Error }) {
	return <ErrorMessage message={error.message} />
}
