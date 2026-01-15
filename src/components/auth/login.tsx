"use client"
import Link from 'next/link';
import classes from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client/react';
import { LoginUserDocument } from '@/shared/gql/graphql';
import { toast } from 'sonner';
import { AuthWrapper } from './AuthWrapper';
import { LoginSchema, TypeLoginSchema } from '@/schemes/auth/login.schema';



export function LoginForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const [isShowTwoFactor, setIsShowFactor] = useState(false)
    const router = useRouter()
    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            login: '',
            password: '',
        },
        mode: "onChange"
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = form;

    const [loginUser, { loading }] = useMutation(LoginUserDocument, {
        onCompleted: (data) => {
            if (data.loginUser) {
                toast.success('Вход выполнен успешно!');
                router.push('/');
            }
        },
        onError() {
            toast.error('Неверный логин или пароль');
        },
    });

    const onSubmit = async (values: TypeLoginSchema) => {
        if (!recaptchaToken) {
            toast.error('Пожалуйста, пройдите reCAPTCHA');
            return;
        }

        await loginUser({
            variables: {
                data: {
                    login: values.login,
                    password: values.password,
                    pin: null,
                },
            },
            context: {
                headers: {
                    recaptcha: recaptchaToken,
                },
            },
        });
    };

    return (
        <AuthWrapper
            heading="Войти"
            description="Чтобы войти на сайт введите ваш email и пароль"
            backButtonLabel="Еще нет аккаунта? Регистрация"
            backButtonHref="/auth/register"
            isShowSocial
        >
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                {isShowTwoFactor && (
                    <div className={classes.formGroup}>
                        <h4 className={classes.formGroupLabel}>Код</h4>
                        <div>
                            <input
                                className={classes.formGroupInput}
                                placeholder="123456"
                                type="number"
                                disabled={loading}
                                {...register("pin")}
                            />
                        </div>
                        {errors.pin && <div className={classes.errors}>{errors.pin.message}</div>}
                    </div>
                )}
                {!isShowTwoFactor && (
                    <>
                        <div className={classes.formGroup}>
                            <h4 className={classes.formGroupLabel}>Почта</h4>
                            <div>
                                <input
                                    className={classes.formGroupInput}
                                    placeholder="ivan@example.com или username"
                                    type="login"
                                    disabled={loading}
                                    {...register("login")}
                                />
                            </div>
                            {errors.login && <div className={classes.errors}>{errors.login.message}</div>}
                        </div>
                        <div className={classes.formGroup}>
                            <div>
                                <h4 className={classes.formGroupLabel}>Пароль</h4>
                            </div>
                            <div>
                                <input
                                    className={classes.formGroupInput}
                                    placeholder="******"
                                    type="password"
                                    disabled={loading}
                                    {...register("password")}
                                />
                                <Link
                                    href="/auth/reset-password"
                                    className={classes.backButton}
                                >
                                    Забыли пароль?
                                </Link>
                            </div>
                            {errors.password && <div className={classes.errors}>{errors.password.message}</div>}
                        </div>
                    </>
                )}
                <button type="submit" className={classes.button}>
                    Войти в аккаунт
                </button>
            </form>
        </AuthWrapper>
    );
}