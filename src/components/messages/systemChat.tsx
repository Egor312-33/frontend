'use client'

import { useQuery, useSubscription } from '@apollo/client/react'
import { Lock, ShieldAlert } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/ui/loading'
import Typography from '@/components/ui/typography'

import { useCryptoKeys } from '@/hooks/useCryptoKeys'
import {
    GetUserSystemMessagesDocument,
    SecurityNotificationDocument
} from '@/shared/gql/graphql'
import { decryptAllMessages, decryptChatKey, decryptMessage, type DecryptedMessage } from './decryptMessages'


interface SystemChatProps {
	chatId: string
}

export function SystemChat({ chatId }: SystemChatProps) {
	const keys = useCryptoKeys()
	const [messages, setMessages]     = useState<DecryptedMessage[]>([])
	const [aesKey, setAesKey]         = useState<CryptoKey | null>(null)
	const [decrypting, setDecrypting] = useState(false)

	// Запрос истории — отправляем публичный ключ
	const { data, loading, error } = useQuery(GetUserSystemMessagesDocument, {
		variables:   { publicKey: keys?.publicKeyPem ?? '' },
		skip:        !keys,
		fetchPolicy: 'network-only' // каждый раз новая пара ключей
	})

	// Расшифровываем историю когда пришли данные
	useEffect(() => {
		if (!data?.getUserSystemMessages || !keys) return
		const { encryptedChatKey, messages: raw } = data.getUserSystemMessages

		setDecrypting(true)
		decryptAllMessages(raw, encryptedChatKey, keys.privateKey)
			.then(async decrypted => {
				setMessages(decrypted.sort(
					(a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
				))
				// Сохраняем AES ключ для расшифровки новых сообщений из подписки
				const ck = await decryptChatKey(encryptedChatKey, keys.privateKey)
				setAesKey(ck)
			})
			.finally(() => setDecrypting(false))
	}, [data, keys])

	// Подписка на новые системные сообщения
	useSubscription(SecurityNotificationDocument, {
		skip: !aesKey,
		onData: async ({ data: sub }) => {
			const notif = sub.data?.securityNotification
			if (!notif || !aesKey) return

			const text = await decryptMessage(
				notif.content,
				notif.iv,
				notif.authTag,
				aesKey
			)

			setMessages(prev => [
				...prev,
				{
					id:        notif.messageId,
					text,
					createdAt: new Date().toISOString(),
					senderId:  'SYSTEM'
				}
			])
		}
	})

	if (!keys || loading || decrypting) return <Loading />

	if (error) return (
		<div className='flex flex-col items-center gap-3 py-16 text-center'>
			<ShieldAlert className='text-destructive h-10 w-10' />
			<Typography variant='body-2' className='text-destructive'>
				Ошибка загрузки сообщений
			</Typography>
		</div>
	)

	return (
		<div className='flex h-full flex-col'>
			{/* Заголовок */}
			<div className='border-border flex items-center gap-3 border-b px-6 py-4'>
				<div className='bg-primary/10 border-primary/30 flex h-10 w-10 items-center justify-center rounded-full border'>
					<Lock className='text-primary h-5 w-5' />
				</div>
				<div>
					<Typography variant='body-2' className='text-foreground font-semibold'>
						Системные уведомления
					</Typography>
					<Typography variant='body-3' className='text-muted-foreground'>
						Сообщения зашифрованы end-to-end
					</Typography>
				</div>
			</div>

			{/* Список сообщений */}
			<div className='flex flex-1 flex-col gap-3 overflow-y-auto px-6 py-4'>
				{messages.length === 0 ? (
					<div className='flex flex-col items-center gap-3 py-16 text-center'>
						<Lock className='text-muted-foreground h-10 w-10' />
						<Typography variant='body-3'>Нет сообщений</Typography>
					</div>
				) : (
					messages.map(msg => (
						<MessageBubble key={msg.id} message={msg} />
					))
				)}
			</div>
		</div>
	)
}

function MessageBubble({ message }: { message: DecryptedMessage }) {
	const date = new Date(message.createdAt)
	const time = date.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
	const day  = date.toLocaleDateString('ru', { day: 'numeric', month: 'long' })

	return (
		<div className='flex flex-col gap-1'>
			<div className='bg-secondary border-border max-w-[85%] rounded-2xl rounded-tl-sm border px-4 py-3'>
				<div className='mb-1 flex items-center gap-2'>
					<Lock className='text-primary h-3 w-3 shrink-0' />
					<span className='text-primary text-xs font-semibold'>Система безопасности</span>
				</div>
				<Typography variant='body-3' className='text-foreground whitespace-pre-wrap'>
					{message.text}
				</Typography>
			</div>
			<span className='text-muted-foreground px-1 text-[11px]'>
				{day}, {time}
			</span>
		</div>
	)
}