import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            defaultValue: 'Аноним',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'attachedTo',
            type: 'select',
            required: true,
            options: [
                { label: 'К Стримеру', value: 'to-streamer' },
                { label: 'К Эпохе', value: 'to-epoch' },
                { label: 'К Событию/Стриму', value: 'to-event' },
            ],
            defaultValue: 'to-event',
        },
        {
            name: 'streamerLink',
            type: 'relationship',
            relationTo: 'streamers',
            admin: {
                condition: (data) => data?.attachedTo === 'to-streamer',
            },
        },
        {
            name: 'epochLink',
            type: 'relationship',
            relationTo: 'epochs',
            admin: {
                condition: (data) => data?.attachedTo === 'to-epoch',
            },
        },
        {
            name: 'eventLink',
            type: 'relationship',
            relationTo: 'events',
            admin: {
                condition: (data) => data?.attachedTo === 'to-event',
            },
        },
    ],
}