import type { Metadata } from 'next'

import { LoginForm } from '@/components/auth/login'

export const metadata: Metadata = {
    title: 'Войти'
}

export default function LoginPage() {
    return <LoginForm />
}
