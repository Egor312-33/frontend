import { ImagePlus } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { ButtonIcon } from '@/components/ui/buttonIcon'
import { CropModal } from '@/components/ui/modal/cropModal'
import Typography from '@/components/ui/typography'

import { TypeCategorySchema } from '@/schemes/category/category.schema'
import { getMediaSource } from '@/utils/get-media-source'

export function EditImageField({ existingUrl }: { existingUrl?: string | null }) {
	const { setValue } = useFormContext<TypeCategorySchema>()
	const [cropSrc, setCropSrc] = useState<string | null>(null)
	const [preview, setPreview] = useState<string | null>(null)
	const [removed, setRemoved] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		e.target.value = ''
		setCropSrc(URL.createObjectURL(file))
	}

	const handleCropDone = (file: File) => {
		setValue('image', file)
		if (preview) URL.revokeObjectURL(preview)
		setPreview(URL.createObjectURL(file))
		setRemoved(false)
		setCropSrc(null)
	}

	const handleRemove = () => {
		setValue('image', undefined)
		if (preview) {
			URL.revokeObjectURL(preview)
			setPreview(null)
		}
		setRemoved(true)
	}

	const displaySrc = preview ?? (!removed && existingUrl ? getMediaSource(existingUrl) : null)

	return (
		<>
			<div className='flex items-start gap-4'>
				{displaySrc ? (
					<div className='relative shrink-0'>
						<div className='overflow-hidden rounded-xl' style={{ width: 72, height: 112 }}>
							<Image
								src={displaySrc}
								alt='Обложка'
								width={72}
								height={112}
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='absolute -top-2 -right-2'>
							<ButtonIcon variant='x' size='sm' onClick={handleRemove} />
						</div>
					</div>
				) : (
					<button
						type='button'
						onClick={() => inputRef.current?.click()}
						className='border-border hover:border-primary/50 hover:bg-primary/5 flex shrink-0 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-all duration-200'
						style={{ width: 72, height: 112 }}
					>
						<ImagePlus className='text-muted-foreground h-5 w-5' />
						<span className='text-muted-foreground text-[10px]'>360x560</span>
					</button>
				)}

				<div className='flex flex-col justify-center gap-1'>
					<Typography variant='body-2' className='text-foreground'>
						Обложка категории
					</Typography>
					<Typography variant='body-3'>
						{displaySrc && !preview ? 'Нажмите x чтобы заменить' : 'JPG, PNG — 360x560'}
					</Typography>
				</div>
			</div>

			<input ref={inputRef} type='file' accept='image/*' className='hidden' onChange={handleFile} />

			{cropSrc && (
				<CropModal
					imageSrc={cropSrc}
					isOpen={!!cropSrc}
					onClose={() => setCropSrc(null)}
					onCropComplete={handleCropDone}
					aspect={360 / 560}
					width={360}
					height={560}
					title='Обрезать обложку категории'
				/>
			)}
		</>
	)
}
