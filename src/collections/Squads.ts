import type { CollectionConfig } from 'payload'

export const Squads: CollectionConfig = {
	slug: 'squads',
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
			name: 'logo',
			type: 'upload',
			required: true,
			relationTo: 'media'
		},
		{
			name: 'banner',
			type: 'upload',
			relationTo: 'media',
			label: 'Баннер',
			admin: {
				description: 'Баннер сквада. Рекомендуется соотношение 21:9 или 16:9.'
			}
		},
		{
			name: 'history',
			type: 'richText'
		},
		{
			name: 'members',
			type: 'join',
			collection: 'squad-members',
			on: 'squad'
		},
		{
			name: 'epochs',
			type: 'join',
			collection: 'epochs',
			on: 'squad'
		}
	]
}
