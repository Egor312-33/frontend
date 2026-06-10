import { OTPInput, SlotProps } from 'input-otp'
import { MessageCircleWarning } from 'lucide-react'

import { cn } from '../lib/utils'

interface OtpInputProps {
	label: string
	value: string
	onChange: (value: string) => void
	error?: string
	disabled?: boolean
	length?: number
}

export const OtpInput = ({ label, value, onChange, error, disabled, length = 6 }: OtpInputProps) => {
	return (
		<div className='flex w-full flex-col items-center gap-2'>
			<label className='text-primary self-start text-sm font-semibold'>{label}</label>

			<OTPInput
				maxLength={length}
				value={value}
				onChange={onChange}
				disabled={disabled}
				containerClassName='group flex items-center gap-2 has-[:disabled]:opacity-50'
				render={({ slots }) => (
					<div className='flex gap-2'>
						{slots.map((slot, idx) => (
							<Slot key={idx} {...slot} isError={!!error} />
						))}
					</div>
				)}
			/>

			{error && (
				<div className='text-destructive mt-1 flex items-center gap-1 self-start'>
					<MessageCircleWarning className='size-4' />
					<span className='text-xs font-medium'>{error}</span>
				</div>
			)}
		</div>
	)
}

function Slot(props: SlotProps & { isError?: boolean }) {
	return (
		<div
			className={cn(
				'bg-secondary-dark border-border text-secondary-foreground relative flex h-14 w-12 items-center justify-center rounded-xl border-2 text-xl font-semibold transition-all duration-200',
				props.char !== null && 'border-accent',
				props.isActive && 'border-accent ring-accent/20 ring-2',
				props.isError && 'border-destructive text-destructive'
			)}
		>
			{props.char}
			{props.isActive && (
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
					<div className='bg-primary animate-caret-blink h-6 w-px' />
				</div>
			)}
		</div>
	)
}
