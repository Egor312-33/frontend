import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'

const CMS_URL = process.env.CMS_URL ?? 'http://localhost:3001/api/graphql'
const CMS_API_KEY = process.env.CMS_API_KEY

type CacheConfig = { revalidate?: number; tags?: string[] }

export async function payloadQuery<TResult, TVariables>(
	document: TypedDocumentNode<TResult, TVariables>,
	...args: TVariables extends Record<string, never>
		? [variables?: undefined, cache?: CacheConfig]
		: [variables: TVariables, cache?: CacheConfig]
): Promise<TResult> {
	const [variables, cache] = args

	const res = await fetch(CMS_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `users API-Key ${CMS_API_KEY}`
		},
		body: JSON.stringify({ query: print(document), variables }),
		...(cache ? { next: cache } : { cache: 'no-store' as const })
	})

	const json = await res.json()
	if (json.errors) throw new Error(json.errors[0].message)
	return json.data as TResult
}
