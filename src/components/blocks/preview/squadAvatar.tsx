'use client'

import Image from 'next/image'

interface SquadAvatarProps {
	src?: string | null
	alt: string
	fallback: string
}

export function SquadAvatar({ src, alt, fallback }: SquadAvatarProps) {
	return (
		<div className='group relative h-33 w-33 shrink-0 md:h-50 md:w-50'>
			<div
				className='from-primary/50 to-primary/30 absolute inset-0 rounded-2xl bg-linear-to-br via-white/6 p-px'
				aria-hidden
			/>

			<div className='bg-card relative h-full w-full overflow-hidden rounded-2xl shadow-(--shadow-primary-sm) transition-transform duration-500 ease-out group-hover:scale-[1.015]'>
				{src ? (
					<Image src={src} alt={alt} width={200} height={200} className='h-full w-full object-cover' />
				) : (
					<div className='bg-muted flex h-full items-center justify-center'>
						<span className='text-foreground text-5xl font-black select-none md:text-7xl'>{fallback}</span>
					</div>
				)}
			</div>
		</div>
	)
}
