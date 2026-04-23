export function formatDuration(duration: number): string {
	const seconds = Math.floor(duration % 60)
	const minutes = Math.floor((duration % 3600) / 60)
	const hours = Math.floor(duration / 3600)

	const ss = seconds.toString().padStart(2, '0')
	const mm = minutes.toString().padStart(2, '0')
	const hh = hours.toString().padStart(2, '0')

	return hours > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`
}
