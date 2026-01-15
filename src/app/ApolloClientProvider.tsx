'use client'

import type { PropsWithChildren } from 'react'
import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/shared/apolo-client';

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
