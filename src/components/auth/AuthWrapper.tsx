
import Link from 'next/link'
import { type PropsWithChildren } from 'react'
import Typography from '../ui/typography'

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
                <Typography variant='title-1' tag='h3'> {heading} </Typography>
                {description && (
                    <Typography variant='sub-title' tag='p'>{description}</Typography>
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
                    <Typography variant='sub-title' hover='default'>
                        <Link
                            href={backButtonHref}
                        >
                            {backButtonLabel}
                        </Link>
                    </Typography>
                )}
            </div>
        </div>
    );
}