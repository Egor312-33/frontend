import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { EpochParticipants } from './collections/EpochParticipants'
import { Epochs } from './collections/Epochs'
import { Events } from './collections/Events'
import { Media } from './collections/Media'
import { Reviews } from './collections/Reviews'
import { SquadMembers } from './collections/SquadMembers'
import { Squads } from './collections/Squads'
import { StreamGrids } from './collections/StreamGrids'
import { Streamers } from './collections/Streamers'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname)
		}
	},
	collections: [
		Users,
		Media,
		Streamers,
		Events,
		Squads,
		Epochs,
		Reviews,
		StreamGrids,
		SquadMembers,
		EpochParticipants
	],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts')
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL || ''
		}
	}),
	sharp,
	plugins: []
})
