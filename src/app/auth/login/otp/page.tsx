import type { Metadata } from 'next'

import { LoginOtpForm } from '@/components/auth/loginOtp'

export const metadata: Metadata = {
    title: 'Войти'
}

export default function LoginPage() {
    return <LoginOtpForm />
}
