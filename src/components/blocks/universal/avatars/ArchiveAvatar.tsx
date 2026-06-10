'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ArchiveAvatar3DProps {
	src?: string
	alt: string
	fallback: string
	rank?: number | null
	verified?: boolean
	badgeLabel?: string | null
}

export function ArchiveAvatar3D({ src, alt, fallback, rank, verified = false, badgeLabel }: ArchiveAvatar3DProps) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)

		checkMobile()

		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const size = isMobile ? 132 : 200

	// Что показывать в бейдже

	const label = badgeLabel ?? (typeof rank === 'number' ? `TOP ${rank}` : 'TOP')

	const showVerified = verified && !badgeLabel && typeof rank !== 'number'

	return (
		<div className='group relative shrink-0' style={{ width: size, height: size }}>
			{/* Внешняя рамка с градиентом */}

			<div
				className='absolute inset-0 rounded-2xl p-px'
				style={{
					background:
						'linear-gradient(135deg, rgba(200,255,0,0.5) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, rgba(200,255,0,0.3) 100%)'
				}}
				aria-hidden
			/>

			{/* Сама карточка */}

			<div
				className='bg-card relative h-full w-full overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.015]'
				style={{
					boxShadow: '0 8px 30px -10px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)'
				}}
			>
				{src ? (
					<Image src={src} alt={alt} fill className='object-cover' sizes={isMobile ? '132px' : '200px'} />
				) : (
					<div className='bg-muted flex h-full items-center justify-center'>
						<span
							className={`text-foreground font-black select-none ${isMobile ? 'text-5xl' : 'text-7xl'}`}
						>
							{fallback}
						</span>
					</div>
				)}

				<div
					className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3'
					style={{
						background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)'
					}}
					aria-hidden
				/>

				<div className='via-foreground/30 pointer-events-none absolute inset-x-3 bottom-2 h-px bg-gradient-to-r from-transparent to-transparent' />
			</div>

			{/* === Бейдж ранга / верификации (внизу справа, не нависает) === */}

			{(label || showVerified) && (
				<div
					className='bg-foreground text-background absolute -right-2 -bottom-2 z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-lg'
					style={{
						boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
					}}
				>
					{showVerified ? (
						<Check className='h-3 w-3' strokeWidth={3} />
					) : (
						<>
							{typeof rank === 'number' && <span className='font-black tabular-nums'>{rank}</span>}

							<span className='opacity-90'>{label.replace(/^TOP\s*/i, '') || 'TOP'}</span>
						</>
					)}
				</div>
			)}
		</div>
	)
}
