import type { CollectionConfig } from 'payload'

export const Epochs: CollectionConfig = {
	slug: 'epochs',
	admin: {
		useAsTitle: 'title'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true
		},
		{
			name: 'summary',
			type: 'textarea',
			label: 'Краткое описание',
			maxLength: 200,
			admin: {
				description: '1-2 предложения для превью на карточке таймлайна'
			}
		},
		{
			name: 'description',
			type: 'richText',
			label: 'Описание эпохи'
		},
		{
			name: 'coverImage',
			type: 'upload',
			relationTo: 'media',
			label: 'Обложка эпохи'
		},
		{
			name: 'accentColor',
			type: 'select',
			required: true,
			options: [
				{ label: 'Default', value: 'default' },
				{ label: 'Gold (Легендарная)', value: 'legendary' },
				{ label: 'Neon (Активная)', value: 'neon' },
				{ label: 'Crimson (Драматичная)', value: 'crimson' }
			],
			defaultValue: 'default'
		},
		{
			name: 'highlightEvent',
			type: 'relationship',
			relationTo: 'events',
			label: 'Ключевое событие'
		},
		{
			name: 'isFeatured',
			type: 'checkbox',
			defaultValue: false,
			label: 'Выделить эпоху'
		},
		{
			name: 'squad',
			type: 'relationship',
			relationTo: 'squads',
			required: true
		},
		{
			name: 'dateStart',
			type: 'date',
			required: true
		},
		{
			name: 'dateEnd',
			type: 'date'
		},
		{
			name: 'participants',
			type: 'join',
			collection: 'epoch-participants',
			on: 'epoch'
		},
		{
			name: 'events',
			type: 'join',
			collection: 'events',
			on: 'epoch',
			defaultLimit: 500
		}
	]
}
