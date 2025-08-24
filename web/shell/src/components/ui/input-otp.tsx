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
      className={cn("shell:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("shell:flex shell:items-center", className)}
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
        "shell:data-[active=true]:border-ring shell:data-[active=true]:ring-ring/50 shell:data-[active=true]:aria-invalid:ring-destructive/20 shell:dark:data-[active=true]:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:data-[active=true]:aria-invalid:border-destructive shell:dark:bg-input/30 shell:border-input shell:relative shell:flex shell:h-9 shell:w-9 shell:items-center shell:justify-center shell:border-y shell:border-r shell:text-sm shell:shadow-xs shell:transition-all shell:outline-none shell:first:rounded-l-md shell:first:border-l shell:last:rounded-r-md shell:data-[active=true]:z-10 shell:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="shell:pointer-events-none shell:absolute shell:inset-0 shell:flex shell:items-center shell:justify-center">
          <div className="shell:animate-caret-blink shell:bg-foreground shell:h-4 shell:w-px shell:duration-1000" />
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
