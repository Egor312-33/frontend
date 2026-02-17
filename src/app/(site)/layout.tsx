
import { type ReactNode } from 'react'
import Test from './test'


interface SiteLayoutProps {
    children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {

    return (
        <Test>
            {children}
        </Test>

    )
}