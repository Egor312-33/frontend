import { useTranslations } from 'next-intl'

import { buildMonths, formatDateCore } from './format-date-core'

export function formatDate(dateString: string | Date, includeTime = false): string {
	const t = useTranslations('utils.formatDate')
	return formatDateCore(dateString, buildMonths(t), includeTime)
}
