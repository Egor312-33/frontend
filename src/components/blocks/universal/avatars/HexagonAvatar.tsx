import Image from 'next/image'

export function HexagonAvatar({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
	return (
		<div className='relative flex items-center justify-center' style={{ width: 280, height: 320 }}>
			<svg viewBox='0 0 280 320' className='absolute inset-0 h-full w-full' fill='none'>
				<polygon
					points='140,4 272,76 272,244 140,316 8,244 8,76'
					stroke='var(--primary)'
					strokeWidth='3'
					fill='none'
					opacity='0.6'
				/>
				<polygon
					points='140,16 260,82 260,238 140,304 20,238 20,82'
					stroke='var(--primary)'
					strokeWidth='1'
					fill='none'
					opacity='0.3'
				/>
			</svg>
			<div
				className='bg-muted relative overflow-hidden'
				style={{
					width: 240,
					height: 276,
					clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
				}}
			>
				{src ? (
					<Image src={src} alt={alt} fill className='object-cover' />
				) : (
					<div className='bg-muted flex h-full w-full items-center justify-center'>
						<span className='text-muted-foreground text-6xl font-black'>{fallback}</span>
					</div>
				)}
			</div>
			<div className='bg-primary absolute top-4 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full' />
			<div className='bg-primary absolute bottom-4 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full' />
		</div>
	)
}
