'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormModal } from '@/components/ui/modal/formModal'
import Typography from '@/components/ui/typography'

import { SettingDescribeVideoInfo } from './settingDescribeVideoInfo'
import { SettingsAccessVideoInfo } from './settingsAccessVideoInfo'
import { type VideoSettingTabId, VideoSettingsTabNav } from './videoSettingsTabNav'
import { type VideoSettingsFormData, VideoSettingsSchema } from '@/schemes/dashboard/content/video-settings.schema'
import { Access, GetSettingVideoBySlugDocument, UpdateSettingsVideoDocument } from '@/shared/gql/graphql'

interface VideoSettingsModalProps {
	slug: string
	isOpen: boolean
	onClose: () => void
}

export function VideoSettingsInfo({ slug, isOpen, onClose }: VideoSettingsModalProps) {
	const [activeTab, setActiveTab] = useState<VideoSettingTabId>('info')

	const { data, loading } = useQuery(GetSettingVideoBySlugDocument, {
		variables: { slug },
		skip: !isOpen || !slug
	})

	const video = data?.getSettingVideoBySlug

	const [updateVideo, { loading: isSaving }] = useMutation(UpdateSettingsVideoDocument, {
		onCompleted() {
			toast.success('Настройки видео сохранены')
			onClose()
		},
		onError(error) {
			toast.error(`Ошибка сохранения: ${error.message}`)
		}
	})

	const handleSubmit = (formData: VideoSettingsFormData) => {
		updateVideo({
			variables: {
				slug,
				categoryId: formData.categoryIds,
				input: {
					title: formData.title,
					description: formData.description,
					access: formData.access
				}
			}
		})
	}

	return (
		<FormModal
			isOpen={isOpen}
			onClose={onClose}
			formTitle={video?.title ?? 'Настройки видео'}
			confirmText='Сохранить'
			cancelText='Отмена'
			schema={VideoSettingsSchema}
			isLoading={loading || isSaving}
			defaultValues={{
				title: video?.title ?? '',
				description: video?.description ?? '',
				access: video?.access ?? Access.Private,
				categoryIds: video?.categories?.map(c => c.id) ?? []
			}}
			onFormSubmit={handleSubmit}
		>
			<VideoSettingsTabNav active={activeTab} onChange={setActiveTab} />
			<div className='min-h-70'>
				{activeTab === 'info' && <SettingDescribeVideoInfo />}
				{activeTab === 'access' && <SettingsAccessVideoInfo />}
				{activeTab === 'text' && <TextTab />}
			</div>
		</FormModal>
	)
}

function TextTab() {
	return (
		<div className='border-border bg-muted/30 flex flex-col items-center gap-3 rounded-xl border border-dashed px-4 py-10 text-center'>
			<Typography variant='body-2' className='text-foreground'>
				Текстовая информация
			</Typography>
			<Typography variant='body-3'>Раздел находится в разработке</Typography>
		</div>
	)
}
