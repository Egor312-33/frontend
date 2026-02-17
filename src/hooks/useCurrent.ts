"use client"

import { GetAccountDocument } from '@/shared/gql/graphql';
import { useQuery, } from '@apollo/client/react';

export function useCurrent() {
    const { data, loading, error, refetch } = useQuery(GetAccountDocument, {
        fetchPolicy: "network-only",
    });

    return {
        user: data?.GetAccount ?? null,
        isLoadingProfile: loading,
        refetch,
        isError: Boolean(error),
    };
}