import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
	ignoreNoDocuments: true,
	generates: {
		'./src/shared/gql/server/': {
			schema: process.env.NEXT_PUBLIC_SERVER_URL,
			documents: ['./src/shared/server/**/*.graphql'],
			preset: 'client',
			config: {
				apolloClientVersion: 4
			},
			presetConfig: {
				fragmentMasking: {
					bareResult: true
				}
			}
		},
		'./src/shared/gql/cms/': {
			schema: process.env.CMS_URL,
			documents: ['./src/shared/cms/**/*.graphql'],
			preset: 'client',
			config: {
				apolloClientVersion: 4
			},
			presetConfig: {
				fragmentMasking: {
					bareResult: true
				}
			}
		}
	}
}
export default config
