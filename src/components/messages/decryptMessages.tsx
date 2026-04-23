// Расшифровка сообщений системного чата

function hexToBuffer(hex: string): Uint8Array {
	const bytes = new Uint8Array(hex.length / 2)
	for (let i = 0; i < hex.length; i += 2) {
		bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16)
	}
	return bytes
}

// 1. Расшифровываем ключ чата: RSA-OAEP приватным ключом
export async function decryptChatKey(
	encryptedChatKey: string, // base64 от сервера
	privateKey: CryptoKey
): Promise<CryptoKey> {
	const encryptedBuffer = Uint8Array.from(atob(encryptedChatKey), c => c.charCodeAt(0))

	const rawKey = await crypto.subtle.decrypt(
		{ name: 'RSA-OAEP' },
		privateKey,
		encryptedBuffer
	)

	// Импортируем как AES-GCM ключ
	return crypto.subtle.importKey(
		'raw',
		rawKey,
		{ name: 'AES-GCM' },
		false,
		['decrypt']
	)
}

// 2. Расшифровываем одно сообщение: AES-256-GCM
export async function decryptMessage(
	content:   string, // hex
	iv:        string, // hex
	authTag:   string, // hex
	aesKey:    CryptoKey
): Promise<string> {
	const ivBuffer      = hexToBuffer(iv)
	const contentBuffer = hexToBuffer(content)
	const tagBuffer     = hexToBuffer(authTag)

	// Web Crypto ожидает: ciphertext + authTag слиты вместе
	const combined = new Uint8Array(contentBuffer.length + tagBuffer.length)
	combined.set(contentBuffer)
	combined.set(tagBuffer, contentBuffer.length)

	const decrypted = await crypto.subtle.decrypt(
		{ name: 'AES-GCM', iv: ivBuffer, tagLength: 128 },
		aesKey,
		combined
	)

	return new TextDecoder().decode(decrypted)
}

export interface DecryptedMessage {
	id:        string
	text:      string
	createdAt: string
	senderId:  string
}

// 3. Расшифровываем все сообщения из ответа
export async function decryptAllMessages(
	messages:         Array<{
		id: string
		content: string
		initialVector: string
		authTag: string
		createdAt: string
		senderId: string
	}>,
	encryptedChatKey: string,
	privateKey:       CryptoKey
): Promise<DecryptedMessage[]> {
	const aesKey = await decryptChatKey(encryptedChatKey, privateKey)

	return Promise.all(
		messages.map(async msg => ({
			id:        msg.id,
			createdAt: msg.createdAt,
			senderId:  msg.senderId,
			text:      await decryptMessage(msg.content, msg.initialVector, msg.authTag, aesKey)
		}))
	)
}