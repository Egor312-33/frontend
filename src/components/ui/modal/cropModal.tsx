'use client'

import { useCallback, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'

interface CropModalProps {
	imageSrc: string
	isOpen: boolean
	onClose: () => void
	onCropComplete: (file: File) => void
	aspect: number
	width: number
	height?: number
	cropShape?: 'rect' | 'round'
	title?: string
}

async function getCroppedImg(src: string, area: Area, width: number, height?: number): Promise<File> {
	const image = await new Promise<HTMLImageElement>((resolve, reject) => {
		const img = new Image()
		img.addEventListener('load', () => resolve(img))
		img.addEventListener('error', reject)
		img.src = src
	})

	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height ?? width
	canvas
		.getContext('2d')!
		.drawImage(image, area.x, area.y, area.width, area.height, 0, 0, canvas.width, canvas.height)

	return new Promise((resolve, reject) =>
		canvas.toBlob(
			blob => (blob ? resolve(new File([blob], 'cropped.jpg', { type: 'image/jpeg' })) : reject()),
			'image/jpeg',
			0.9
		)
	)
}

export function CropModal({
	imageSrc,
	isOpen,
	onClose,
	onCropComplete,
	aspect,
	width,
	height,
	cropShape = 'rect',
	title
}: CropModalProps) {
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
	const [busy, setBusy] = useState(false)

	const handleCropComplete = useCallback((_: Area, pixels: Area) => {
		setCroppedAreaPixels(pixels)
	}, [])

	const handleConfirm = async () => {
		if (!croppedAreaPixels) return
		setBusy(true)
		try {
			const file = await getCroppedImg(imageSrc, croppedAreaPixels, width, height)
			onCropComplete(file)
		} finally {
			setBusy(false)
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title ?? 'Обрезать изображение'}
			size='md'
			closeOnBackdrop={!busy}
			showCloseButton={!busy}
			footer={
				<>
					<Button variant='secondary' onClick={onClose} disabled={busy}>
						Отмена
					</Button>
					<Button variant='default' onClick={handleConfirm} loading={busy} disabled={busy}>
						Применить
					</Button>
				</>
			}
		>
			<div className='relative w-full overflow-hidden rounded-xl bg-black' style={{ height: height ?? width }}>
				<Cropper
					image={imageSrc}
					crop={crop}
					zoom={zoom}
					aspect={aspect}
					cropShape={cropShape}
					showGrid={false}
					onCropChange={setCrop}
					onZoomChange={setZoom}
					onCropComplete={handleCropComplete}
					style={{
						containerStyle: { borderRadius: '0.75rem' },
						cropAreaStyle: {
							border: '2px solid var(--primary)',
							boxShadow: 'var(--shadow-primary-sm)'
						}
					}}
				/>
			</div>

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
