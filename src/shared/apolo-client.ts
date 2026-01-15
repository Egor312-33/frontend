
import { SERVER_URL, WEBSOCKET_URL } from '@/libs/constants/url.constants';
import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs';
import { createClient } from 'graphql-ws'

const httpLink = new UploadHttpLink({
    uri: SERVER_URL,
    credentials: 'include',
    headers: {
        'apollo-require-preflight': 'true'
    }
})
const wsLink = new GraphQLWsLink(
    createClient({
        url: WEBSOCKET_URL,
        retryAttempts: 5,
        shouldRetry: () => true,
    })
)

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)

        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})
