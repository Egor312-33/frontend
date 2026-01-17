"use client"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react';
import { SendOtpDocument, VerifyOtpDocument } from '@/shared/gql/graphql';
import { toast } from 'sonner';
import { AuthWrapper } from './AuthWrapper';
import { loginSchema, type TypeLoginSchema } from '@/schemes/auth/login.schema';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Input } from '../ui/input';
import { OtpInput } from './OtpInput';
import Typography from '../ui/typography';

type InputType = 'email' | 'phone';

export function LoginOtpForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [isShowTwoFactor, setIsShowFactor] = useState(false)
    const [inputType, setInputType] = useState<InputType>('email')
    const router = useRouter()

    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            phone: "",
            code: ""
        },
        mode: "onChange",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = form;

    const [sendOtp, { loading: sendingOtp }] = useMutation(SendOtpDocument, {
        onCompleted: (data) => {
            if (data.SendOtp) {
                toast.success('Код отправлен!');
                setIsShowFactor(true);
            }
        },
        onError(error) {
            console.log(error)
            toast.error(`Ошибка отправки кода ${error}`);
        },
    });

    const [verifyOtp, { loading: verifyingOtp }] = useMutation(VerifyOtpDocument, {
        onCompleted: (data) => {
            if (data.VerifyOtp?.accessToken) {
                toast.success('Вход выполнен успешно!');
                router.push('/');
            }
        },
        onError() {
            toast.error('Неверный код');
        },
    });

    const onSubmitOtp = async (values: TypeLoginSchema) => {

        const identifier = inputType === 'email' ? values.email : values.phone;
        if (!isShowTwoFactor) {
            await sendOtp({
                variables: {
                    input: {
                        type: inputType,
                        identifier: identifier || ''
                    },
                },
                context: {
                    headers: {
                        recaptcha: recaptchaToken,
                    },
                },
            });
        } else if (values.code) {
            await verifyOtp({
                variables: {
                    input: {
                        type: inputType,
                        identifier: identifier || '',
                        code: values.code
                    },
                },
            });
        }

    };
    const loading = sendingOtp || verifyingOtp;

    return (
        <AuthWrapper
            heading="Войти"
            description="Чтобы войти на сайт введите ваш email или телефон"
            backButtonLabel="Еще нет аккаунта? Регистрация"
            backButtonHref="/auth/register"
            isShowSocial
        >
            <form
                onSubmit={handleSubmit(onSubmitOtp)}
                className="flex flex-col gap-4"
            >
                {isShowTwoFactor ? (
                    <div className="flex flex-col gap-4">
                        <Controller
                            control={control}
                            name="code"
                            render={({ field }) => (
                                <OtpInput
                                    label="Код подтверждения"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.code?.message}
                                    disabled={loading}
                                    length={6}
                                />
                            )}
                        />
                        <Typography
                            onClick={() => setIsShowFactor(false)}
                            variant='sub-title'
                            hover='default'
                        >
                            Изменить email/телефон
                        </Typography>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-2 p-1 bg-background rounded-xl border border-border">
                            <button
                                type="button"
                                onClick={() => setInputType('email')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${inputType === 'email'
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <FaEnvelope />
                                Email
                            </button>
                            <button
                                type="button"
                                onClick={() => setInputType('phone')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${inputType === 'phone'
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <FaPhone />
                                Телефон
                            </button>
                        </div>

                        <Input
                            label={inputType === 'email' ? 'Email' : 'Номер телефона'}
                            placeholder={inputType === 'email' ? 'ivan@example.com' : '79991234567'}
                            type={inputType === 'email' ? 'email' : 'tel'}
                            icon={inputType === 'email' ? <FaEnvelope /> : <FaPhone />}
                            error={inputType === 'email' ? errors.email?.message : errors.phone?.message}
                            disabled={loading}
                            {...register(inputType === 'email' ? "email" : "phone")}
                        />
                    </>
                )}

                <Button
                    type="submit"
                    className="w-full mt-2"
                    loading={loading}
                    disabled={loading}
                >
                    {isShowTwoFactor ? 'Подтвердить код' : 'Получить код'}
                </Button>
            </form>
        </AuthWrapper>
    );
}