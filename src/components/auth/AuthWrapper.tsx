
import Link from 'next/link'
import { type PropsWithChildren } from 'react'

interface AuthWrapperProps {
    heading: string
    description?: string
    backButtonLabel?: string
    backButtonHref?: string
    isShowSocial?: boolean
}

export function AuthWrapper({
    children,
    heading,
    description,
    backButtonLabel,
    backButtonHref,
    isShowSocial = false
}: PropsWithChildren<AuthWrapperProps>) {

    return (
        <div className="w-full max-w-105 mx-auto my-12 p-6 bg-linear-to-br from-secondary to-secondary-dark border-2 border-border rounded-2xl shadow-lg flex flex-col gap-6">
            <div>
                <h3 className="text-3xl font-semibold text-primary mb-2">{heading}</h3>
                {description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                )}
            </div>
            <div className="flex flex-col gap-6">
                {isShowSocial && (
                    <div className="text-muted-foreground text-sm">Заглушка для соц. сетей</div>
                )}
                {children}
            </div>
            <div className="text-center">
                {backButtonLabel && backButtonHref && (
                    <Link
                        href={backButtonHref}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                        {backButtonLabel}
                    </Link>
                )}
            </div>
        </div>
    );
}