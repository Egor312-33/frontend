import { BookOpen } from 'lucide-react'

function extractPlainText(richText: unknown): string {
	if (!richText || typeof richText !== 'object') return ''
	const root = richText as { root?: { children?: unknown[] } }
	const children = root.root?.children ?? []
	const parts: string[] = []

	const walk = (node: unknown) => {
		if (!node || typeof node !== 'object') return
		const n = node as { text?: string; children?: unknown[] }
		if (typeof n.text === 'string') parts.push(n.text)
		if (Array.isArray(n.children)) n.children.forEach(walk)
	}

	children.forEach(walk)
	return parts.join(' ').trim()
}

export function SquadAbout({ history }: { history: unknown }) {
	const text = extractPlainText(history)

	return (
		<div className='space-y-6'>
			<header className='mb-4 flex items-center gap-3'>
				<div className='bg-primary/15 text-primary border-primary/30 flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm'>
					<BookOpen className='h-5 w-5' />
				</div>
				<h2 className='text-foreground text-xl font-bold tracking-tight'>История сквада</h2>
			</header>

			<article className='border-border/50 from-card/90 to-card/50 rounded-2xl border bg-linear-to-br p-8 backdrop-blur-sm'>
				{text ? (
					<div className='text-foreground/90 space-y-5 leading-relaxed'>
						{text.split(/\n+/).map((para, i) =>
							para.trim() ? (
								<p
									key={i}
									className='first:text-foreground text-sm first:text-lg first:font-medium md:text-base'
								>
									{para.trim()}
								</p>
							) : null
						)}
					</div>
				) : (
					<p className='text-muted-foreground text-sm italic'>
						История сквада пока не заполнена. Добавьте описание в Payload → Squads → History.
					</p>
				)}
			</article>
		</div>
	)
}
