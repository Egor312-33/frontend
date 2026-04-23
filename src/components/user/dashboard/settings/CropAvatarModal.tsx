'use client'

import { useCallback, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'

interface CropAvatarModalProps {
	imageSrc: string
	isOpen: boolean
	onClose: () => void
	onCropComplete: (croppedFile: File) => void
}

// Утилита: вырезает пиксели из canvas по croppedAreaPixels
async function getCroppedImg(
	imageSrc: string,
	croppedAreaPixels: Area
): Promise<File> {
	const image = await new Promise<HTMLImageElement>((resolve, reject) => {
		const img = new Image()
		img.addEventListener('load', () => resolve(img))
		img.addEventListener('error', reject)
		img.src = imageSrc
	})

	const canvas = document.createElement('canvas')
	const size = croppedAreaPixels.width
	canvas.width = size
	canvas.height = size

	const ctx = canvas.getContext('2d')!
	ctx.drawImage(
		image,
		croppedAreaPixels.x,
		croppedAreaPixels.y,
		croppedAreaPixels.width,
		croppedAreaPixels.height,
		0,
		0,
		size,
		size
	)

	return new Promise<File>((resolve, reject) => {
		canvas.toBlob(
			blob => {
				if (!blob) return reject(new Error('Canvas is empty'))
				resolve(new File([blob], 'avatar.jpg', { type: 'image/jpeg' }))
			},
			'image/jpeg',
			0.9
		)
	})
}

export function CropAvatarModal({
	imageSrc,
	isOpen,
	onClose,
	onCropComplete
}: CropAvatarModalProps) {
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(
		null
	)
	const [isProcessing, setIsProcessing] = useState(false)

	const onCropCompleteCallback = useCallback((_: Area, pixels: Area) => {
		setCroppedAreaPixels(pixels)
	}, [])

	const handleConfirm = async () => {
		if (!croppedAreaPixels) return
		setIsProcessing(true)
		try {
			const file = await getCroppedImg(imageSrc, croppedAreaPixels)
			onCropComplete(file)
		} finally {
			setIsProcessing(false)
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Обрезать фото'
			size='md'
			closeOnBackdrop={!isProcessing}
			showCloseButton={!isProcessing}
			footer={
				<>
					<Button
						variant='secondary'
						onClick={onClose}
						disabled={isProcessing}
					>
						Отмена
					</Button>
					<Button
						variant='default'
						onClick={handleConfirm}
						loading={isProcessing}
						disabled={isProcessing}
					>
						Применить
					</Button>
				</>
			}
		>
			{/* Область кропа */}
			<div className='relative h-80 w-full overflow-hidden rounded-xl bg-black'>
				<Cropper
					image={imageSrc}
					crop={crop}
					zoom={zoom}
					aspect={1}
					cropShape='round'
					showGrid={false}
					onCropChange={setCrop}
					onZoomChange={setZoom}
					onCropComplete={onCropCompleteCallback}
					style={{
						containerStyle: { borderRadius: '0.75rem' },
						cropAreaStyle: {
							border: '2px solid var(--primary)',
							boxShadow: 'var(--shadow-primary-sm)'
						}
					}}
				/>
			</div>

			{/* Ползунок зума */}
			<div className='flex items-center gap-3 pt-2'>
				<span className='text-muted-foreground text-xs'>−</span>
				<input
					type='range'
					min={1}
					max={3}
					step={0.05}
					value={zoom}
					onChange={e => setZoom(Number(e.target.value))}
					className='accent-primary w-full'
				/>
				<span className='text-muted-foreground text-xs'>+</span>
			</div>
		</Modal>
	)
}
