
import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'

const config: CodegenConfig = {
    schema: process.env.NEXT_PUBLIC_SERVER_URL,
    documents: ['./src/**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        './src/shared/gql/': {
            preset: 'client',
            config: {
                apolloClientVersion: 4,
            },
            presetConfig: {
                fragmentMasking: {
                    bareResult: true
                }
            }
        },

    },
}
export default config