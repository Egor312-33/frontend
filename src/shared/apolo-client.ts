import { SERVER_URL, WEBSOCKET_URL } from '@/libs/constants/url.constants';
import { CombinedGraphQLErrors, type ApolloLink } from '@apollo/client';
import { from } from '@apollo/client';
import { ApolloClient, InMemoryCache, split, Observable } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs';
import { print } from 'graphql';
import { createClient } from 'graphql-ws'
import { RefreshDocument } from './gql/graphql';

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('accessToken');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});

let isRefreshing = false;
let pendingRequests: any[] = [];

const resolvePendingRequests = (token: string | null) => {
    pendingRequests.forEach((callback) => callback(token));
    pendingRequests = [];
};

const updateOperationHeader = (operation: ApolloLink.Operation, token: string) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    }));
};

const errorLink = new ErrorLink(({ error, operation, forward }) => {
    if (CombinedGraphQLErrors.is(error)) {
        if (error.errors.some((err) => err.extensions?.httpStatus === 401)) {

            return new Observable((observer) => {
                if (isRefreshing) {
                    pendingRequests.push((token: string) => {
                        updateOperationHeader(operation, token);
                        forward(operation).subscribe(observer);
                    });
                    return;
                }

                isRefreshing = true;

                fetch(SERVER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: print(RefreshDocument) }),
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((res) => {
                        const newToken = res.data?.refresh?.accessToken;

                        if (newToken && !res.errors) {
                            localStorage.setItem('accessToken', newToken);

                            updateOperationHeader(operation, newToken);
                            forward(operation).subscribe(observer);
                            resolvePendingRequests(newToken);
                        } else {
                            throw new Error('Refresh failed');
                        }
                    })
                    .catch((err) => {
                        localStorage.removeItem('accessToken');
                        resolvePendingRequests(null);
                        observer.error(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }
    } else {
        console.error(`[Network/Protocol error]: ${error}`);
    }
});

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
        connectionParams: () => ({
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        })
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
    link: from([errorLink, authLink, splitLink]),
    cache: new InMemoryCache(),
})