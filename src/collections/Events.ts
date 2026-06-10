import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
	slug: 'events',
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
			name: 'date',
			type: 'date',
			required: true
		},
		{
			name: 'description',
			type: 'textarea',
			label: 'Краткое описание',
			admin: {
				description:
					'1-2 предложения: что случилось, почему это важно. Показывается в карточке таймлайна как превью.'
			}
		},
		{
			name: 'type',
			type: 'select',
			required: true,
			defaultValue: 'stream',
			label: 'Тип события',
			options: [
				{ label: 'Стрим', value: 'stream' },
				{ label: 'Поход', value: 'trip' },
				{ label: 'Турнир', value: 'tournament' },
				{ label: 'Коллаборация', value: 'collab' },
				{ label: 'Анонс', value: 'announcement' }
			]
		},
		{
			name: 'epoch',
			type: 'relationship',
			relationTo: 'epochs',
			required: true
		},
		{
			name: 'grid',
			type: 'relationship',
			relationTo: 'stream-grids',
			label: 'Сетка (марафон, турнир и т.д.)',
			admin: {
				description: 'Оставь пустым если это одиночный стрим'
			}
		},
		{
			name: 'streamersPresent',
			type: 'relationship',
			relationTo: 'streamers',
			hasMany: true,
			admin: {
				description: 'Кто присутствовал на этом событии'
			}
		},
		{
			name: 'eventUiConfig',
			type: 'group',
			label: 'Дизайн карточки события',
			fields: [
				{
					name: 'layoutTemplate',
					type: 'select',
					options: [
						{ label: 'Ретро-марафон (Лента событий)', value: 'retro-marathon' },
						{ label: 'Chaos Инцидент (Слом сетки)', value: 'chaos-incident' },
						{ label: 'Clean Стрим (Обычный плеер)', value: 'clean-stream' },
						{ label: 'Brutal Алерт (Жесткая плашка)', value: 'brutal-alert' }
					],
					defaultValue: 'clean-stream'
				},
				{
					name: 'eventVibe',
					type: 'select',
					label: 'Статус/Вайб события',
					options: [
						{ label: 'Обычный (Стандартный цвет темы)', value: 'normal' },

						{ label: 'Важное происшествие (Акцентный/Яркий)', value: 'highlight' },

						{ label: 'Трэш / Безумие (Критический/Предупреждающий)', value: 'alert' },

						{ label: 'Архивный / Скучный', value: 'muted' }
					],
					defaultValue: 'normal'
				}
			]
		},
		{
			name: 'contentBlocks',
			type: 'blocks',
			label: 'Контент внутри события (Медиа-кубики)',
			blocks: [
				{
					slug: 'eventYoutube',
					fields: [
						{ name: 'url', type: 'text', required: true },
						{ name: 'caption', type: 'text' }
					]
				},
				{
					slug: 'eventQuote',
					fields: [
						{ name: 'text', type: 'text', required: true },
						{ name: 'author', type: 'text' }
					]
				},
				{
					slug: 'eventReport',
					fields: [
						{ name: 'title', type: 'text' },
						{ name: 'htmlReport', type: 'richText' }
					]
				}
			]
		}
	]
}
