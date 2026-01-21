import { OTPInput, SlotProps } from 'input-otp'
import { LuMessageCircleWarning } from 'react-icons/lu'
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
        <div className="flex flex-col gap-2 w-full items-center">
            <label className="text-sm font-semibold text-primary self-start">
                {label}
            </label>

            <OTPInput
                maxLength={length}
                value={value}
                onChange={onChange}
                disabled={disabled}
                containerClassName="group flex items-center gap-2 has-[:disabled]:opacity-50"
                render={({ slots }) => (
                    <div className="flex gap-2">
                        {slots.map((slot, idx) => (
                            <Slot key={idx} {...slot} isError={!!error} />
                        ))}
                    </div>
                )}
            />

            {error && (
                <div className="flex items-center gap-1 text-destructive self-start mt-1">
                    <LuMessageCircleWarning className="size-4" />
                    <span className="text-xs font-medium">{error}</span>
                </div>
            )}
        </div>
    )
}

function Slot(props: SlotProps & { isError?: boolean }) {
    return (
        <div
            className={cn(
                "relative w-12 h-14 bg-secondary-dark border-2 border-border rounded-xl flex items-center justify-center text-xl font-semibold text-secondary-foreground transition-all duration-200",
                props.char !== null && "border-accent",
                props.isActive && "border-accent ring-2 ring-accent/20",
                props.isError && "border-destructive text-destructive"
            )}
        >
            {props.char}
            {props.isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-6 w-px bg-primary animate-caret-blink" />
                </div>
            )}
        </div>
    )
}