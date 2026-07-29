'use client'

import { Quote } from 'lucide-react'

import { cn } from '@/components/lib/utils'

interface QuoteBlockProps {
	text: string
	author?: string | null
	className?: string
}

export function QuoteBlock({ text, author, className }: QuoteBlockProps) {
	if (!text) return null

	return (
		<section className={cn('bg-background relative overflow-hidden px-5 py-8 md:px-12', className)}>
			<div className='relative mx-auto max-w-2xl'>
				<div className='border-primary/40 bg-muted/30 relative rounded-r-xl border-l-4 p-6 pl-8 transition-all'>
					<div className='absolute -top-3 left-4'>
						<Quote className='bg-background text-primary/60 border-border size-6 rounded border p-1' />
					</div>

					<blockquote className='text-foreground pt-2 text-lg leading-relaxed font-medium tracking-normal md:text-xl'>
						«{text}»
					</blockquote>

					{author && (
						<div className='text-muted-foreground mt-4 flex items-center gap-2 text-sm'>
							<span>{author}</span>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
