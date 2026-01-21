import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string()
        .email({ message: 'validation.invalidEmail' })
        .optional()
        .or(z.literal('')),

    phone: z.string()
        .min(10, { message: 'validation.invalidPhone' })
        .regex(/^\d+$/, { message: 'validation.phoneDigitsOnly' })
        .optional()
        .or(z.literal('')),

    code: z.string()
        .length(6, { message: 'validation.codeLength' })
        .regex(/^\d+$/, { message: 'validation.codeDigitsOnly' })
        .optional()
        .or(z.literal(''))
})

export type TypeLoginSchema = z.infer<typeof loginSchema>