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
      className={cn("UI:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("UI:flex UI:items-center", className)}
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
        "UI:data-[active=true]:border-ring UI:data-[active=true]:ring-ring/50 UI:data-[active=true]:aria-invalid:ring-destructive/20 UI:dark:data-[active=true]:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:data-[active=true]:aria-invalid:border-destructive UI:dark:bg-input/30 UI:border-input UI:relative UI:flex UI:h-9 UI:w-9 UI:items-center UI:justify-center UI:border-y UI:border-r UI:text-sm UI:shadow-xs UI:transition-all UI:outline-none UI:first:rounded-l-md UI:first:border-l UI:last:rounded-r-md UI:data-[active=true]:z-10 UI:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="UI:pointer-events-none UI:absolute UI:inset-0 UI:flex UI:items-center UI:justify-center">
          <div className="UI:animate-caret-blink UI:bg-foreground UI:h-4 UI:w-px UI:duration-1000" />
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
