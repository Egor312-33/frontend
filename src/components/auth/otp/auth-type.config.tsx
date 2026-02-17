import { Mail, Phone } from 'lucide-react'
import { JSX } from 'react'

import { AuthType } from '@/shared/gql/graphql'

export type SupportedAuthType = AuthType.Email | AuthType.Phone

export const AUTH_TYPE_CONFIG = {
	[AuthType.Email]: {
		label: 'email.label',
		placeholder: 'ivan@example.com',
		type: 'email',
		icon: <Mail />,
		fieldName: 'email',
		changeLabel: 'code.label'
	},
	[AuthType.Phone]: {
		label: 'phone.label',
		placeholder: '79991234567',
		type: 'tel',
		icon: <Phone />,
		fieldName: 'phone',
		changeLabel: 'code.label'
	}
} satisfies Record<
	SupportedAuthType,
	{
		label: string
		placeholder: string
		type: string
		icon: JSX.Element
		fieldName: 'email' | 'phone'
		changeLabel: string
	}
>
