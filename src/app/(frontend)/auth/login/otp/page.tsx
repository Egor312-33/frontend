import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { LoginOtpForm } from '@/components/auth/otp/loginOtp'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'auth.login.metadata' })
	return {
		title: t('title'),
		description: t('description')
	}
}

export default async function LoginPage() {
	const t = await getTranslations('auth.login.wrapper')
	return (
		<AuthWrapper
			heading={t('heading')}
			description={t('description')}
			backButtonLabel={t('backButtonLabel')}
			backButtonHref='/auth/register'
			isShowSocial
		>
			<LoginOtpForm />
		</AuthWrapper>
	)
}
