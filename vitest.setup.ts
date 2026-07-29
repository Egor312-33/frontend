import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver

vi.mock('next-intl', async () => {
	const actual = await vi.importActual<typeof import('next-intl')>('next-intl')
	const t = Object.assign((key: string) => key, {
		raw: (key: string) => key,
		rich: (key: string) => key,
		markup: (key: string) => key
	})
	return {
		...actual,
		useTranslations: () => t,
		useLocale: () => 'ru',
		useNow: () => new Date(),
		useTimeZone: () => 'UTC'
	}
})

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
})
