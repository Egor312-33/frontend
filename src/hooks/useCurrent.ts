'use client'

import { useQuery } from '@apollo/client/react'

import { GetAccountDocument } from '@/shared/gql/graphql'

export function useCurrent() {
	const { data, loading, error, refetch } = useQuery(GetAccountDocument, {
		fetchPolicy: 'cache-and-network'
	})

	return {
		user: data?.GetAccount ?? null,
		isLoadingProfile: loading,
		refetch,
		isError: Boolean(error)
	}
}
