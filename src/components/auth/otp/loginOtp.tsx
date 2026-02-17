'use client'
import { useMutation } from '@apollo/client/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

import { cn } from '../../lib/utils'
import { OtpInput } from '../../ui/OtpInput'
import { Input } from '../../ui/input'
import Typography from '../../ui/typography'

import { AUTH_TYPE_CONFIG, type SupportedAuthType } from './auth-type.config'
import { type TypeLoginSchema, loginSchema } from '@/schemes/auth/login.schema'
import {
	AuthType,
	SendOtpDocument,
	VerifyOtpDocument
} from '@/shared/gql/graphql'

export function LoginOtpForm() {
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
	const [isShowTwoFactor, setIsShowFactor] = useState(false)
	const [inputType, setInputType] = useState<SupportedAuthType>(
		AuthType.Email
	)
	const router = useRouter()

	const t = useTranslations('auth.login.otp')
	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			phone: '',
			code: ''
		},
		mode: 'onChange'
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setError
	} = form

	const currentConfig = useMemo(
		() => AUTH_TYPE_CONFIG[inputType],
		[inputType]
	)

	const [sendOtp, { loading: sendingOtp }] = useMutation(SendOtpDocument, {
		onCompleted: data => {
			if (data.sendOtp) {
				toast.success(t('sendotp.successMessage'))
				setIsShowFactor(true)
			}
		},
		onError() {
			toast.error(t('sendotp.errorMessage'))
		}
	})

	const [verifyOtp, { loading: verifyingOtp }] = useMutation(
		VerifyOtpDocument,
		{
			onCompleted: data => {
				if (data.verifyOtp?.accessToken) {
					toast.success(t('verifyotp.successMessage'))
					router.replace('/')
				}
			},
			onError() {
				toast.error(t('verifyotp.errorMessage'))
			}
		}
	)

	const onSubmitOtp = async (values: TypeLoginSchema) => {
		const fieldName = currentConfig.fieldName
		const identifier = values[fieldName]

		if (!isShowTwoFactor) {
			if (!identifier || identifier.trim() === '') {
				setError(fieldName, {
					type: 'manual',
					message: 'validation.required'
				})
				return
			}
			await sendOtp({
				variables: {
					input: {
						type: inputType,
						identifier: identifier || ''
					}
				},
				context: {
					headers: {
						recaptcha: recaptchaToken
					}
				}
			})
		} else if (values.code) {
			await verifyOtp({
				variables: {
					input: {
						type: inputType,
						identifier: identifier || '',
						code: values.code
					}
				}
			})
		}
	}

	const loading = sendingOtp || verifyingOtp

	return (
		<form
			onSubmit={handleSubmit(onSubmitOtp)}
			className='flex flex-col gap-4'
		>
			{isShowTwoFactor ? (
				<div className='flex flex-col items-center gap-4'>
					<Controller
						control={control}
						name='code'
						render={({ field }) => (
							<OtpInput
								label={t('code.label')}
								value={field.value || ''}
								onChange={field.onChange}
								error={
									errors.code?.message
										? t(errors.code.message as string)
										: undefined
								}
								disabled={loading}
								length={6}
							/>
						)}
					/>
					<Typography
						onClick={() => setIsShowFactor(false)}
						variant='sub-title'
						hover='default'
						className='cursor-pointer'
					>
						{t(currentConfig.changeLabel)}
					</Typography>
				</div>
			) : (
				<>
					<div className='bg-muted/50 border-border flex gap-2 rounded-xl border p-1'>
						{(
							Object.entries(AUTH_TYPE_CONFIG) as [
								SupportedAuthType,
								(typeof AUTH_TYPE_CONFIG)[SupportedAuthType]
							][]
						).map(([type, config]) => (
							<button
								key={type}
								type='button'
								onClick={() => setInputType(type)}
								className={cn(
									'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200',
									inputType === type
										? 'bg-primary text-primary-foreground shadow-md'
										: 'text-muted-foreground hover:text-foreground'
								)}
							>
								{config.icon}
								{t(config.label)}
							</button>
						))}
					</div>

					<Input
						label={t(currentConfig.label)}
						placeholder={currentConfig.placeholder}
						type={currentConfig.type}
						icon={currentConfig.icon}
						error={
							errors[currentConfig.fieldName]
								? t(
										errors[currentConfig.fieldName]
											?.message as string
									)
								: undefined
						}
						disabled={loading}
						{...register(currentConfig.fieldName)}
					/>
				</>
			)}

			<Button
				type='submit'
				className='mt-2 w-full'
				loading={loading}
				disabled={loading}
			>
				{isShowTwoFactor ? t('code.confirm') : t('code.get')}
			</Button>
		</form>
	)
}
