'use client'

import { useApolloClient, useQuery } from '@apollo/client/react'
import { FolderPlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Loading } from '@/components/ui/loading'
import Typography from '@/components/ui/typography'

import { useCurrent } from '@/hooks/useCurrent'

import { CategoryCard } from './categoryCard'
import { CreateCategory } from './editCategory/createCategory'
import { GetCategoriesDocument, type GetCategoriesQuery, Role } from '@/shared/gql/graphql'

interface CategoriesVideoProps {
	initialData: GetCategoriesQuery['getCategories']
}
export function CategoriesVideo({ initialData }: CategoriesVideoProps) {
	const t = useTranslations('category.video')
	const [isCreateOpen, setIsCreateOpen] = useState(false)

	const { user, isLoadingProfile } = useCurrent()

	const client = useApolloClient()
	useEffect(() => {
		client.cache.writeQuery({
			query: GetCategoriesDocument,
			data: { getCategories: initialData }
		})
	}, [])

	const { data } = useQuery(GetCategoriesDocument, {
		fetchPolicy: 'cache-first'
	})
	const categories = data?.getCategories ?? initialData ?? []

	if (isLoadingProfile) return <Loading />

	return (
		<div className='min-h-screen px-6 py-8'>
			<div className='mb-8 flex items-start justify-between gap-4'>
				<div>
					<Typography variant='title-1' tag='h1' className='text-title'>
						{t('heading.header')}
					</Typography>
					<Typography variant='sub-title' tag='p'>
						{t('heading.placeholder')}
					</Typography>
				</div>
				{user?.role === Role.Admin && (
					<Button
						variant='default'
						startIcon={<FolderPlus className='h-4 w-4' />}
						onClick={() => setIsCreateOpen(true)}
					>
						{t('heading.adminButton')}
					</Button>
				)}
			</div>

			{categories.length === 0 ? (
				<div className='border-border bg-muted/20 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-20 text-center'>
					<FolderPlus className='text-muted-foreground h-10 w-10' />
					<Typography variant='body-2' className='text-foreground'>
						Категорий пока нет
					</Typography>
				</div>
			) : (
				<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
					{categories.map(cat => (
						<CategoryCard
							key={cat.slug}
							slug={cat.slug}
							thumbnailUrl={cat.thumbnailUrl}
							title={cat.translations?.[0]?.title ?? 'Без названия'}
						/>
					))}
				</div>
			)}

			<CreateCategory isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
		</div>
	)
}
