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
      className={cn("plan:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("plan:flex plan:items-center", className)}
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
        "plan:data-[active=true]:border-ring plan:data-[active=true]:ring-ring/50 plan:data-[active=true]:aria-invalid:ring-destructive/20 plan:dark:data-[active=true]:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:data-[active=true]:aria-invalid:border-destructive plan:dark:bg-input/30 plan:border-input plan:relative plan:flex plan:h-9 plan:w-9 plan:items-center plan:justify-center plan:border-y plan:border-r plan:text-sm plan:shadow-xs plan:transition-all plan:outline-none plan:first:rounded-l-md plan:first:border-l plan:last:rounded-r-md plan:data-[active=true]:z-10 plan:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="plan:pointer-events-none plan:absolute plan:inset-0 plan:flex plan:items-center plan:justify-center">
          <div className="plan:animate-caret-blink plan:bg-foreground plan:h-4 plan:w-px plan:duration-1000" />
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
