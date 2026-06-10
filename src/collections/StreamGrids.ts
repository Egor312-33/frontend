import type { CollectionConfig } from 'payload'

export const StreamGrids: CollectionConfig = {
	slug: 'stream-grids',
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title', 'type', 'dateStart', 'dateEnd'],
		group: 'Контент'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			label: 'Название сетки'
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true
		},
		{
			name: 'type',
			type: 'select',
			required: true,
			defaultValue: 'marathon',
			label: 'Тип сетки',
			options: [
				{ label: 'Марафон', value: 'marathon' },
				{ label: 'Турнир', value: 'tournament' },
				{ label: 'Серия', value: 'series' },
				{ label: 'Коллаб', value: 'collab' },
				{ label: 'Фестиваль', value: 'festival' }
			]
		},
		{
			name: 'description',
			type: 'richText',
			label: 'Описание'
		},
		{
			name: 'dateStart',
			type: 'date',
			label: 'Дата начала'
		},
		{
			name: 'dateEnd',
			type: 'date',
			label: 'Дата окончания'
		},
		{
			name: 'cover',
			type: 'upload',
			relationTo: 'media',
			label: 'Обложка (опционально)'
		},
		{
			name: 'events',
			type: 'join',
			collection: 'events',
			on: 'grid',
			label: 'Стримы / события в сетке'
		},
		{
			name: 'participants',
			type: 'array',
			labels: {
				singular: 'Участник сетки',
				plural: 'Участники сетки'
			},
			admin: {
				description:
					'Стримеры, состоящие в этой сетке. Если стример не в списке — сетка НЕ покажется у него на странице.'
			},
			fields: [
				{
					name: 'streamer',
					type: 'relationship',
					relationTo: 'streamers',
					required: true
				},
				{
					name: 'role',
					type: 'select',
					required: true,
					defaultValue: 'participant',
					options: [
						{ label: 'Организатор', value: 'organizer' },
						{ label: 'Главный стример', value: 'headliner' },
						{ label: 'Участник', value: 'participant' },
						{ label: 'Гость', value: 'guest' }
					]
				},
				{
					name: 'note',
					type: 'textarea'
				}
			]
		}
	]
}
