export function toPopulated<T>(value: T | number | null | undefined): T | null {
	return typeof value === 'object' && value !== null ? value : null
}

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type Populated<T, D extends number> = D extends 0
	? T
	: T extends any[]
		? T extends (infer Item)[]
			? Populated<Item, Prev[D]>[]
			: never
		: T extends object
			? {
					[K in keyof T]: T[K] extends (infer Item)[]
						? Exclude<Item, number> extends never
							? T[K]
							: Populated<Exclude<Item, number>, Prev[D]>[]
						: Exclude<T[K], number> extends never
							? T[K] extends object
								? Populated<T[K], Prev[D]>
								: T[K]
							: Populated<Exclude<T[K], number>, Prev[D]>
				}
			: T
