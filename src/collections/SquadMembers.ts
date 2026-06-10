import type { CollectionConfig } from 'payload'

export const SquadMembers: CollectionConfig = {
	slug: 'squad-members',
	admin: { useAsTitle: 'id' },
	fields: [
		{
			name: 'streamer',
			type: 'relationship',
			relationTo: 'streamers',
			required: true
		},
		{
			name: 'squad',
			type: 'relationship',
			relationTo: 'squads',
			required: true
		},
		{
			name: 'role',
			type: 'select',
			options: [
				{ label: 'Лидер', value: 'leader' },
				{ label: 'Основной состав', value: 'core' },
				{ label: 'Второстепенный', value: 'secondary' },
				{ label: 'Бывший участник', value: 'ex-member' }
			]
		},
		{
			name: 'joinDate',
			type: 'date'
		},
		{
			name: 'leaveDate',
			type: 'date'
		}
	]
}
