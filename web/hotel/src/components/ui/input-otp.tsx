"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("hotel:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("hotel:flex hotel:items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "hotel:data-[active=true]:border-ring hotel:data-[active=true]:ring-ring/50 hotel:data-[active=true]:aria-invalid:ring-destructive/20 hotel:dark:data-[active=true]:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:data-[active=true]:aria-invalid:border-destructive hotel:dark:bg-input/30 hotel:border-input hotel:relative hotel:flex hotel:h-9 hotel:w-9 hotel:items-center hotel:justify-center hotel:border-y hotel:border-r hotel:text-sm hotel:shadow-xs hotel:transition-all hotel:outline-none hotel:first:rounded-l-md hotel:first:border-l hotel:last:rounded-r-md hotel:data-[active=true]:z-10 hotel:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="hotel:pointer-events-none hotel:absolute hotel:inset-0 hotel:flex hotel:items-center hotel:justify-center">
          <div className="hotel:animate-caret-blink hotel:bg-foreground hotel:h-4 hotel:w-px hotel:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
