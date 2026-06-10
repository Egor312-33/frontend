'use client'

import { Quote } from 'lucide-react'

import { cn } from '@/components/lib/utils'

interface QuoteBlockProps {
	text: string
	author?: string | null
	className?: string
	theme?: 'clean' | 'chaos' | 'retro' | 'brutal'
}

export function QuoteBlock({ text, author, className, theme = 'clean' }: QuoteBlockProps) {
	if (!text) return null

	return (
		<section
			className={cn(
				'bg-background relative overflow-hidden px-5 py-8 md:px-12',
				theme === 'chaos' && 'bg-black/20 py-12',
				theme === 'brutal' && 'border-b-4 border-black py-10',
				className
			)}
		>
			<div className='relative mx-auto max-w-2xl'>
				{/* КАРКАС КОНТЕНТА И СТИЛИЗАЦИЯ ЦИТАТЫ */}
				<div
					className={cn(
						'relative p-6 transition-all',

						// CLEAN: Мягкий, минималистичный отступ с аккуратной левой линией
						theme === 'clean' && 'border-primary/40 bg-muted/30 rounded-r-xl border-l-4 pl-8',

						// CHAOS: Хакерский/киберпанк вайб, жесткие рамки со скошенными углами или полупрозрачный неон
						theme === 'chaos' && 'border-primary/20 bg-primary/5 text-primary border font-mono',

						// RETRO: Выглядит как всплывающее текстовое окно предупреждения Windows 98 или вырезка из газеты
						theme === 'retro' &&
							'rounded-none border-2 border-t-gray-700 border-r-white border-b-white border-l-gray-700 bg-gray-200 font-mono text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',

						// BRUTAL: Плотный поп-арт блок, яркий фон, огромный жирный контур
						theme === 'brutal' &&
							'rounded-none border-4 border-black bg-yellow-300 font-sans text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
					)}
				>
					{/* ДЕКОРАТИВНЫЕ КАВЫЧКИ / ИКОНКИ ПО ТЕМАМ */}
					<div className='absolute -top-3 left-4'>
						<Quote
							className={cn(
								'size-6 rounded p-1',
								theme === 'clean' && 'bg-background text-primary/60 border-border border',
								theme === 'chaos' && 'text-primary border-primary/40 animate-pulse border bg-black',
								theme === 'retro' &&
									'size-7 rounded-none border-2 border-t-white border-r-gray-600 border-b-gray-600 border-l-white bg-gray-300 text-gray-700',
								theme === 'brutal' &&
									'size-8 rounded-none border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
							)}
						/>
					</div>

					{/* САМ ТЕКСТ ЦИТАТЫ */}
					<blockquote
						className={cn(
							'pt-2 text-lg leading-relaxed font-medium md:text-xl',
							theme === 'clean' && 'text-foreground font-sans tracking-normal',
							theme === 'chaos' && 'text-primary tracking-tight',
							theme === 'retro' && 'text-base font-bold tracking-wide text-black uppercase',
							theme === 'brutal' && 'text-xl font-black tracking-tight text-black uppercase italic'
						)}
					>
						«{text}»
					</blockquote>

					{/* АВТОР ЦИТАТЫ */}
					{author && (
						<div
							className={cn(
								'mt-4 flex items-center gap-2 text-sm',
								theme === 'clean' && 'text-muted-foreground font-sans',
								theme === 'chaos' && "text-primary/60 font-mono before:mr-1 before:content-['//']",
								theme === 'retro' && "justify-end font-mono text-blue-800 before:content-['--']",
								theme === 'brutal' &&
									'mt-4 inline-block border-t-2 border-black pt-2 font-black text-black'
							)}
						>
							{theme === 'brutal' ? (
								<span className='bg-black px-2 py-0.5 text-xs text-white uppercase font-stretch-condensed'>
									Сказал: {author}
								</span>
							) : (
								<span>{author}</span>
							)}
						</div>
					)}

					{/* Угловые прицелы только для хаоса */}
					{theme === 'chaos' && (
						<>
							<span className='border-primary/40 absolute top-0 right-0 size-2 border-t border-r' />
							<span className='border-primary/40 absolute bottom-0 left-0 size-2 border-b border-l' />
						</>
					)}
				</div>
			</div>
		</section>
	)
}
