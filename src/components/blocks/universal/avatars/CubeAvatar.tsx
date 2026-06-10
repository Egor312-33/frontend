import Image from 'next/image'

export function CubeAvatar({ src, alt, name }: { src?: string; alt: string; name: string }) {
	return (
		<div className='cube-container' style={{ width: 260, height: 260 }}>
			<div className='cube-wrapper' style={{ '--cube-size': '260px' } as React.CSSProperties}>
				<div
					className='relative'
					style={{ width: 'var(--cube-size)', height: 'var(--cube-size)', transformStyle: 'preserve-3d' }}
				>
					{(['front', 'back', 'left', 'right', 'top', 'bottom'] as const).map(face => (
						<div
							key={face}
							className='border-primary bg-card absolute inset-0 overflow-hidden border-2'
							style={{
								transform: {
									front: 'translateZ(calc(var(--cube-size) / 2))',
									back: 'rotateY(180deg) translateZ(calc(var(--cube-size) / 2))',
									left: 'rotateY(-90deg) translateZ(calc(var(--cube-size) / 2))',
									right: 'rotateY(90deg) translateZ(calc(var(--cube-size) / 2))',
									top: 'rotateX(90deg) translateZ(calc(var(--cube-size) / 2))',
									bottom: 'rotateX(-90deg) translateZ(calc(var(--cube-size) / 2))'
								}[face]
							}}
						>
							{face === 'front' && src && <Image src={src} alt={alt} fill className='object-cover' />}
							{face === 'front' && !src && (
								<div className='flex h-full w-full items-center justify-center'>
									<span className='text-primary text-5xl font-black'>{name[0]}</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
