const MONTH_KEYS = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december'
] as const

export function buildMonths(t: (key: string) => string): string[] {
	return MONTH_KEYS.map(key => t(`months.${key}`))
}

export function formatDateCore(dateString: string | Date, months: string[], includeTime = false): string {
	const date = new Date(dateString)
	const formatted = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

	if (!includeTime) return formatted

	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')
	return `${formatted}, ${hours}:${minutes}`
}
