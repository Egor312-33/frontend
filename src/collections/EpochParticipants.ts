import type { CollectionConfig } from 'payload'

export const EpochParticipants: CollectionConfig = {
	slug: 'epoch-participants',
	fields: [
		{
			name: 'epoch',
			type: 'relationship',
			relationTo: 'epochs',
			required: true
		},
		{
			name: 'streamer',
			type: 'relationship',
			relationTo: 'streamers',
			required: true
		},
		{
			name: 'roleInEpoch',
			type: 'select',
			required: true,
			options: [
				{ label: 'Легенда эпохи', value: 'legend' },
				{ label: 'Основной состав', value: 'core-member' },
				{ label: 'Второстепенный / Приходящий', value: 'secondary' },
				{ label: 'Гость стримов', value: 'guest' },
				{ label: 'Покинул объединение', value: 'ex-member' }
			]
		},
		{
			name: 'styleStrategy',
			type: 'select',
			options: [
				{ label: 'Наследовать стиль эпохи', value: 'inherit-epoch' },
				{ label: 'Принудительно личный стиль', value: 'force-personal-style' }
			],
			defaultValue: 'inherit-epoch'
		}
	]
}
