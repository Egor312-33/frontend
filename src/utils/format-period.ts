export function formatPeriod(activeSince: string, isActive: boolean, activeUntil: string | null): string {
	const start = new Date(activeSince).getFullYear()
	if (isActive || !activeUntil) return `с ${start} г.`
	const end = new Date(activeUntil).getFullYear()
	return start === end ? `${start} г.` : `${start}–${end}`
}
