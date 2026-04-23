import { Language } from '@/shared/gql/graphql'

export function buildTranslations<T extends { language: Language }>(
	languages: Language[],
	server: T[],
	mapper: (lang: Language, server?: T) => any
) {
	const map = Object.fromEntries(server.map(t => [t.language.toUpperCase(), t]))

	return languages.map(lang => mapper(lang, map[lang]))
}
