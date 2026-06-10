import type { CollectionConfig } from 'payload'

export const Streamers: CollectionConfig = {
	slug: 'streamers',
	admin: {
		useAsTitle: 'name'
	},
	fields: [
		{
			name: 'name',
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
			name: 'realName',
			type: 'text'
		},
		{
			name: 'nicknames',
			type: 'array',
			labels: {
				singular: 'Никнейм',
				plural: 'Доп. никнеймы'
			},
			fields: [
				{
					name: 'nickname',
					type: 'text',
					required: true
				}
			]
		},
		{
			name: 'biography',
			type: 'richText'
		},
		{
			name: 'avatar',
			type: 'upload',
			relationTo: 'media'
		},
		{
			name: 'banner',
			type: 'upload',
			relationTo: 'media',
			label: 'Баннер (постер профиля)',
			admin: {
				description:
					'Картинка-постер для шапки. Желательно соотношение ~21:9 или 16:9, минимальный размер 1600×720. Будет обрезана и скруглена.'
			}
		},
		{
			name: 'theme',
			type: 'select',
			label: 'Базовая тема профиля',
			defaultValue: 'archive',
			options: [
				{ label: 'Archive', value: 'archive' },
				{ label: 'Creator', value: 'creator' },
				{ label: 'Esports', value: 'esports' }
			]
		},
		{
			name: 'streamerVisualConfig',
			type: 'group',
			label: 'Визуальный стиль персонажа',
			fields: [
				{
					name: 'profileLayout',
					type: 'select',
					options: [
						{ label: 'Бенто сетка', value: 'bento' },
						{ label: 'Таймлайн на всю ширину', value: 'fullwidth-timeline' },
						{ label: 'Классическая Вики', value: 'classic-wiki' }
					],
					defaultValue: 'bento'
				},
				{
					name: 'cardStyle',
					type: 'select',
					options: [
						{ label: 'Clean (Аккуратный)', value: 'clean-card' },
						{ label: 'Chaos (Глитч/Помехи)', value: 'chaos-glitch' },
						{ label: 'Brutal (Жирные рамки)', value: 'brutal-flat' },
						{ label: 'Retro (Окна Win98)', value: 'retro-box' }
					],
					defaultValue: 'clean-card'
				},
				{
					name: 'vibeAccent',
					type: 'select',
					label: 'Характер персонажа (Цветовой акцент)',
					options: [
						{ label: 'По умолчанию (Тема страницы)', value: 'default' },
						{ label: 'Toxic / Danger (Мемный/Опасный)', value: 'danger' },
						{ label: 'Legendary (Золотой/Олдфаг)', value: 'legendary' },
						{ label: 'Muted (Второстепенный/Серый)', value: 'muted' }
					],
					defaultValue: 'default'
				}
			]
		},
		{
			name: 'blocks',
			type: 'blocks',
			blocks: [
				{
					slug: 'hero',
					fields: [
						{ name: 'title', type: 'text' },
						{ name: 'subtitle', type: 'text' }
					]
				},
				{
					slug: 'youtubeEmbed',
					fields: [
						{ name: 'url', type: 'text' },
						{ name: 'caption', type: 'text' }
					]
				},
				{
					slug: 'quote',
					fields: [
						{ name: 'text', type: 'text' },
						{ name: 'author', type: 'text' }
					]
				}
			]
		},
		{
			name: 'squads',
			type: 'join',
			collection: 'squad-members',
			on: 'streamer'
		},
		{
			name: 'epochs',
			type: 'join',
			collection: 'epoch-participants',
			on: 'streamer'
		}
	]
}
