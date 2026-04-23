import { useEffect, useRef, useState } from 'react'

interface CryptoKeys {
    publicKeyPem: string
    privateKey: CryptoKey
}

export function useCryptoKeys() {
    const [keys, setKeys] = useState<CryptoKeys | null>(null)
    const generated = useRef(false)

    useEffect(() => {
        if (generated.current) return
        generated.current = true

            ; (async () => {
                const keyPair = await crypto.subtle.generateKey(
                    {
                        name: 'RSA-OAEP',
                        modulusLength: 2048,
                        publicExponent: new Uint8Array([1, 0, 1]),
                        hash: 'SHA-256'
                    },
                    true,
                    ['encrypt', 'decrypt']
                )

                const spki = await crypto.subtle.exportKey('spki', keyPair.publicKey)
                const b64 = btoa(String.fromCharCode(...new Uint8Array(spki)))
                const publicKeyPem = `-----BEGIN PUBLIC KEY-----\n${b64.match(/.{1,64}/g)!.join('\n')}\n-----END PUBLIC KEY-----`

                setKeys({ publicKeyPem, privateKey: keyPair.privateKey })
            })()
    }, [])

    return keys
}