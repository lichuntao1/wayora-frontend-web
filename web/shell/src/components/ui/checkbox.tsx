"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "shell:peer shell:border-input shell:dark:bg-input/30 shell:data-[state=checked]:bg-primary shell:data-[state=checked]:text-primary-foreground shell:dark:data-[state=checked]:bg-primary shell:data-[state=checked]:border-primary shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:size-4 shell:shrink-0 shell:rounded-[4px] shell:border shell:shadow-xs shell:transition-shadow shell:outline-none shell:focus-visible:ring-[3px] shell:disabled:cursor-not-allowed shell:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="shell:flex shell:items-center shell:justify-center shell:text-current shell:transition-none"
      >
        <CheckIcon className="shell:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
