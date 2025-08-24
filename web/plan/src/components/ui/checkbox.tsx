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
        "plan:peer plan:border-input plan:dark:bg-input/30 plan:data-[state=checked]:bg-primary plan:data-[state=checked]:text-primary-foreground plan:dark:data-[state=checked]:bg-primary plan:data-[state=checked]:border-primary plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:size-4 plan:shrink-0 plan:rounded-[4px] plan:border plan:shadow-xs plan:transition-shadow plan:outline-none plan:focus-visible:ring-[3px] plan:disabled:cursor-not-allowed plan:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="plan:flex plan:items-center plan:justify-center plan:text-current plan:transition-none"
      >
        <CheckIcon className="plan:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
