import { print } from 'graphql'
import { type Metadata } from 'next'

import { CategoriesVideo } from '@/components/category/categoriesVideo/categoriesVideo'

import { SERVER_URL } from '@/libs/constants/url.constants'
import { GetCategoriesDocument, type GetCategoriesQuery } from '@/shared/gql/graphql'

async function AllCategoryVideo() {
	try {
		const query = print(GetCategoriesDocument)
		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query }),
			next: {
				revalidate: 60,
				tags: ['categories-video']
			}
		})
		const data = await response.json()

		return {
			categories: data.data.getCategories as GetCategoriesQuery['getCategories']
		}
	} catch (error) {
		console.log(error)
		throw new Error('Ошибка при получении категорий')
	}
}

export const metadata: Metadata = {
	title: 'Категории'
}

export default async function CulturePage() {
	const { categories } = await AllCategoryVideo()
	return <CategoriesVideo initialData={categories} />
}
