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
        "hotel:peer hotel:border-input hotel:dark:bg-input/30 hotel:data-[state=checked]:bg-primary hotel:data-[state=checked]:text-primary-foreground hotel:dark:data-[state=checked]:bg-primary hotel:data-[state=checked]:border-primary hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:size-4 hotel:shrink-0 hotel:rounded-[4px] hotel:border hotel:shadow-xs hotel:transition-shadow hotel:outline-none hotel:focus-visible:ring-[3px] hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="hotel:flex hotel:items-center hotel:justify-center hotel:text-current hotel:transition-none"
      >
        <CheckIcon className="hotel:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
