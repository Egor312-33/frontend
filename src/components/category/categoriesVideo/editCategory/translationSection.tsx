import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/components/lib/utils'
import { Input } from '@/components/ui/input'

import type { TypeCategorySchema } from '@/schemes/category/category.schema'
import { Language } from '@/shared/gql/graphql'

interface TranslationSectionProps {
	index: number
	language: Language
	slugError?: string
	onEnTitleChange?: (v: string) => void
}

export function TranslationSection({ index, language, slugError, onEnTitleChange }: TranslationSectionProps) {
	const t = useTranslations('language')
	const {
		register,
		formState: { errors }
	} = useFormContext<TypeCategorySchema>()

	const titleErr = errors.translations?.[index]?.title
	const isEn = language === Language.En

	const titleReg = register(`translations.${index}.title`)

	return (
		<div className='flex flex-col gap-3'>
			<div className='flex items-center gap-2'>
				<span
					className={cn(
						'rounded-md px-2 py-0.5 text-xs font-semibold',
						isEn ? 'bg-primary/15 text-primary' : 'bg-secondary text-secondary-foreground'
					)}
				>
					{t(language.toLowerCase())}
				</span>
				<div className='border-border h-px flex-1 border-t' />
			</div>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<Input
					{...titleReg}
					label='Название'
					placeholder='Введите название'
					error={titleErr?.message ?? slugError}
					onChange={e => {
						titleReg.onChange(e)
						onEnTitleChange?.(e.target.value)
					}}
				/>

				<div className='flex flex-col gap-1.5'>
					<label className='text-foreground text-sm font-semibold'>Описание</label>
					<textarea
						{...register(`translations.${index}.description`)}
						rows={3}
						placeholder='Введите описание'
						className={cn(
							'bg-input border-border text-foreground placeholder:text-muted-foreground',
							'w-full resize-none rounded-xl border-2 px-4 py-2.5 text-sm transition-all duration-200 outline-none',
							'focus:border-accent'
						)}
					/>
				</div>
			</div>
		</div>
	)
}
