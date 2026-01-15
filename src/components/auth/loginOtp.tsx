"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react';
import { SendOtpDocument, VerifyOtpDocument } from '@/shared/gql/graphql';
import { toast } from 'sonner';
import { AuthWrapper } from './AuthWrapper';
import { loginSchema, TypeLoginSchema } from '@/schemes/auth/login.schema';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Input } from '../ui/input';

type InputType = 'email' | 'phone';

export function LoginOtpForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [isShowTwoFactor, setIsShowFactor] = useState(false)
    const [inputType, setInputType] = useState<InputType>('email')
    const [code, setCode] = useState<string[]>(Array(6).fill(''))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const router = useRouter()

    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            phone: "",
            code: ""
        },
        mode: "onChange"
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
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

    const handleCodeChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; // Только цифры

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Автофокус на следующий input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newCode = pastedData.split('');
        setCode([...newCode, ...Array(6 - newCode.length).fill('')]);
        inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
    };

    const onSubmitSendOtp = async (values: TypeLoginSchema) => {

        const identifier = inputType === 'email' ? values.email : values.phone;

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
    };

    const onSubmitVerifyOtp = async () => {
        const codeString = code.join('');
        if (codeString.length !== 6) {
            toast.error('Введите 6-значный код');
            return;
        }

        const identifier = inputType === 'email' ? getValues('email') : getValues('phone');

        await verifyOtp({
            variables: {
                input: {
                    type: inputType,
                    identifier: identifier || '',
                    code: codeString
                },
            },
        });
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
                onSubmit={handleSubmit(isShowTwoFactor ? onSubmitVerifyOtp : onSubmitSendOtp)}
                className="flex flex-col gap-4"
            >
                {isShowTwoFactor ? (
                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold text-primary text-left">
                            Код подтверждения
                        </label>
                        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-12 h-14 bg-secondary-dark border-2 border-border rounded-xl text-center text-xl font-semibold text-secondary-foreground outline-none transition-all duration-200 focus:border-accent focus:bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    disabled={loading}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsShowFactor(false)}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                        >
                            Изменить email/телефон
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Переключатель типа ввода */}
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

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-primary text-left">
                                {inputType === 'email' ? 'Email' : 'Номер телефона'}
                            </label>
                            {inputType === 'email' ? (
                                <Input
                                    placeholder="ivan@example.com"
                                    type="email"
                                    disabled={loading}
                                    {...register("email")}
                                />

                            ) : (
                                <Input
                                    placeholder="79991234567"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    disabled={loading}
                                    {...register("phone")}
                                />
                            )}
                            {inputType === 'email' && errors.email && (
                                <span className="text-destructive text-xs text-left mt-1">
                                    {errors.email.message}
                                </span>
                            )}
                            {inputType === 'phone' && errors.phone && (
                                <span className="text-destructive text-xs text-left mt-1">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
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