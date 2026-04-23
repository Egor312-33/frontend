'use client'

import { useLazyQuery, useMutation } from '@apollo/client/react'
import { CloudUpload, FileVideo, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'

import { cn } from '@/components/lib/utils'
import { Button } from '@/components/ui/button'
import { Modal, type ModalProps } from '@/components/ui/modal/modal'
import Typography from '@/components/ui/typography'

import {
	ConfirmVideoUploadDocument,
	GetVideoUploadTicketDocument
} from '@/shared/gql/graphql'

enum UploadStatus {
	Idle = 'idle',
	FetchingTicket = 'fetching-ticket',
	Uploading = 'uploading',
	Confirming = 'confirming',
	Done = 'done',
	Error = 'error'
}

const LOADING_STATUSES = new Set([
	UploadStatus.FetchingTicket,
	UploadStatus.Uploading,
	UploadStatus.Confirming
])

interface UploadVideoModalProps extends Pick<ModalProps, 'isOpen'> {
	onClose: () => void
	onUploadComplete?: (fileKey: string) => void
}

export const UploadVideoModal = ({
	isOpen,
	onClose,
	onUploadComplete
}: UploadVideoModalProps) => {
	const [file, setFile] = useState<File | null>(null)
	const [progress, setProgress] = useState(0)
	const [status, setStatus] = useState<UploadStatus>(UploadStatus.Idle)

	const [getTicket] = useLazyQuery(GetVideoUploadTicketDocument)

	const [confirmUpload] = useMutation(ConfirmVideoUploadDocument, {
		onError() {
			toast.error('Ошибка подтверждения загрузки')
		}
	})

	const isLoading = LOADING_STATUSES.has(status)
	const isDone = status === UploadStatus.Done

	const handleClose = () => {
		if (isLoading) return
		setFile(null)
		setProgress(0)
		setStatus(UploadStatus.Idle)
		onClose()
	}

	const uploadToS3 = (uploadUrl: string, file: File) =>
		new Promise<void>((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open('PUT', uploadUrl)
			xhr.setRequestHeader('Content-Type', file.type)
			xhr.upload.onprogress = e => {
				if (e.lengthComputable)
					setProgress(Math.round((e.loaded / e.total) * 100))
			}
			xhr.onload = () => (xhr.status === 200 ? resolve() : reject())
			xhr.onerror = reject
			xhr.send(file)
		})

	const handleUpload = async () => {
		if (!file) return

		try {
			setStatus(UploadStatus.FetchingTicket)

			const { data: ticketData } = await getTicket({
				variables: { fileName: file.name, contentType: file.type }
			})

			if (!ticketData?.getVideoUploadTicket) throw new Error('No ticket')

			const { uploadUrl, fileKey, videoId } =
				ticketData.getVideoUploadTicket

			setStatus(UploadStatus.Uploading)
			await uploadToS3(uploadUrl, file)

			setStatus(UploadStatus.Confirming)
			await confirmUpload({
				variables: {
					input: { fileKey, videoId, contentType: file.type }
				}
			})

			setStatus(UploadStatus.Done)
			toast.success('Видео успешно загружено')
			onUploadComplete?.(fileKey)
		} catch {
			setStatus(UploadStatus.Error)
			toast.error('Ошибка загрузки видео')
		}
	}

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const selected = acceptedFiles[0]
		if (!selected) return
		setFile(selected)
		setStatus(UploadStatus.Idle)
		setProgress(0)
	}, [])

	const statusLabel =
		{
			[UploadStatus.FetchingTicket]: 'Подготовка...',
			[UploadStatus.Uploading]: `Загрузка ${progress}%`,
			[UploadStatus.Confirming]: 'Завершение...'
		}[
			status as
				| UploadStatus.FetchingTicket
				| UploadStatus.Uploading
				| UploadStatus.Confirming
		] ?? 'Загрузить'

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'video/*': [] },
		maxFiles: 1,
		disabled: !!file || isLoading
	})

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
			title='Загрузить видео'
			size='md'
			variant='default'
			closeOnBackdrop={!isLoading}
			footer={
				<>
					<Button
						onClick={handleClose}
						disabled={isLoading}
						variant='secondary'
					>
						Отмена
					</Button>
					{!isDone ? (
						<Button
							onClick={handleUpload}
							disabled={!file || isLoading}
							loading={isLoading}
							variant='default'
							startIcon={!isLoading ? <CloudUpload /> : undefined}
						>
							{statusLabel}
						</Button>
					) : (
						<Button onClick={handleClose} variant='default'>
							Готово
						</Button>
					)}
				</>
			}
		>
			<div className='flex flex-col gap-4'>
				<div
					{...getRootProps()}
					className={cn(
						'flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 transition-all duration-200',
						!file && !isLoading && 'cursor-pointer',
						isDragActive
							? 'border-primary bg-primary/5 scale-[1.01]'
							: file
								? 'border-accent/40 bg-accent/5'
								: 'border-border hover:border-primary/50 hover:bg-secondary/20'
					)}
				>
					<input {...getInputProps()} />

					{file ? (
						<>
							<FileVideo className='text-accent h-10 w-10' />
							<div className='text-center'>
								<Typography
									variant='body-2'
									className='text-foreground'
								>
									{file.name}
								</Typography>
								<Typography variant='body-3'>
									{(file.size / 1024 / 1024).toFixed(1)} МБ
								</Typography>
							</div>
							{!isLoading && !isDone && (
								<button
									type='button'
									onClick={e => {
										e.stopPropagation()
										setFile(null)
										setStatus(UploadStatus.Idle)
									}}
									className='text-muted-foreground hover:text-destructive flex items-center gap-1 text-xs transition-colors'
								>
									<X className='h-3 w-3' /> Удалить
								</button>
							)}
						</>
					) : (
						<>
							<CloudUpload className='text-muted-foreground h-10 w-10' />
							<div className='text-center'>
								<Typography
									variant='body-2'
									className='text-foreground'
								>
									{isDragActive
										? 'Отпустите файл здесь'
										: 'Перетащите видео или нажмите для выбора'}
								</Typography>
								<Typography variant='body-3'>
									MP4, MOV, AVI, MKV — до 10 ГБ
								</Typography>
							</div>
						</>
					)}
				</div>

				{status === UploadStatus.Uploading && (
					<div className='space-y-1.5'>
						<div className='flex justify-between'>
							<Typography variant='body-3'>
								Загрузка...
							</Typography>
							<Typography variant='body-3'>
								{progress}%
							</Typography>
						</div>
						<div className='bg-secondary h-1.5 w-full overflow-hidden rounded-full'>
							<div
								className='from-primary to-accent h-full rounded-full bg-linear-to-r transition-all duration-300'
								style={{ width: `${progress}%` }}
							/>
						</div>
					</div>
				)}

				{status === UploadStatus.Confirming && (
					<div className='border-border bg-secondary/20 flex items-center gap-2 rounded-xl border px-4 py-3'>
						<span className='border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent' />
						<Typography variant='body-3'>
							Подтверждение загрузки...
						</Typography>
					</div>
				)}

				{isDone && (
					<div className='border-accent/30 bg-accent/10 flex items-center gap-2 rounded-xl border px-4 py-3'>
						<CloudUpload className='text-accent h-4 w-4 shrink-0' />
						<Typography variant='body-3' className='text-accent'>
							Видео загружено и поставлено в очередь обработки
						</Typography>
					</div>
				)}

				{status === UploadStatus.Error && (
					<div className='border-destructive/30 bg-destructive/10 flex items-center gap-2 rounded-xl border px-4 py-3'>
						<X className='text-destructive h-4 w-4 shrink-0' />
						<Typography
							variant='body-3'
							className='text-destructive'
						>
							Ошибка загрузки. Попробуйте ещё раз.
						</Typography>
					</div>
				)}
			</div>
		</Modal>
	)
}
