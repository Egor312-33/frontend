import { useQuery } from '@apollo/client/react'
import { Checkbox } from '@headlessui/react'
import { Tag } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/components/lib/utils'
import Typography from '@/components/ui/typography'

import { type VideoSettingsFormData } from '@/schemes/dashboard/content/video-settings.schema'
import { GetCategoriesVideoDocument, TargetType } from '@/shared/gql/graphql'

export function SettingDescribeVideoInfo() {
	const {
		register,
		formState: { errors }
	} = useFormContext<VideoSettingsFormData>()

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col gap-1.5'>
				<label className='text-foreground text-sm font-medium'>Название</label>
				<input
					{...register('title')}
					type='text'
					placeholder='Введите название видео'
					className={cn(
						'bg-input border-border text-foreground placeholder:text-muted-foreground w-full rounded-xl border px-3 py-2.5 text-sm transition-colors',
						'focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none',
						errors.title && 'border-destructive focus:border-destructive focus:ring-destructive/20'
					)}
				/>
				{errors.title && (
					<span className='text-destructive flex items-center gap-1 text-xs'>⚠ {errors.title.message}</span>
				)}
			</div>

			<div className='flex flex-col gap-1.5'>
				<label className='text-foreground text-sm font-medium'>Описание</label>
				<textarea
					{...register('description')}
					placeholder='Добавьте описание к вашему видео'
					rows={4}
					className={cn(
						'bg-input border-border text-foreground placeholder:text-muted-foreground w-full resize-y rounded-xl border px-3 py-2.5 text-sm transition-colors',
						'focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none'
					)}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<label className='text-foreground text-sm font-medium'>Категории</label>
				<CategoriesBlock />
			</div>
		</div>
	)
}

function CategoriesBlock() {
	const { register } = useFormContext<VideoSettingsFormData>()

	const { data, loading } = useQuery(GetCategoriesVideoDocument, {
		variables: { targets: [TargetType.Video] }
	})

	const categories = data?.getCategories ?? []

	if (loading) {
		return (
			<div className='flex flex-wrap gap-2'>
				{[1, 2, 3, 4].map(i => (
					<div key={i} className='bg-muted h-8 w-20 animate-pulse rounded-lg' />
				))}
			</div>
		)
	}

	if (!categories.length) {
		return (
			<div className='border-border bg-muted/30 flex items-center gap-3 rounded-xl border border-dashed px-4 py-5'>
				<Tag className='text-muted-foreground h-5 w-5 shrink-0' />
				<Typography variant='body-3'>Категории не найдены</Typography>
			</div>
		)
	}

	return (
		<div className='flex flex-wrap gap-2'>
			{categories.map(cat => {
				const title = cat.translations?.[0]?.title ?? 'Без названия'
				return (
					<label key={cat.id} className='cursor-pointer'>
						<Checkbox />
						<input type='checkbox' value={cat.id} {...register('categoryIds')} className='peer hidden' />
						<span
							className={cn(
								'block rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all duration-200',
								'border-border text-muted-foreground hover:border-primary/40',
								'peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary'
							)}
						>
							{title}
						</span>
					</label>
				)
			})}
		</div>
	)
}
