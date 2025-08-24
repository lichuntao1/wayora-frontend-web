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
        "UI:peer UI:border-input UI:dark:bg-input/30 UI:data-[state=checked]:bg-primary UI:data-[state=checked]:text-primary-foreground UI:dark:data-[state=checked]:bg-primary UI:data-[state=checked]:border-primary UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:size-4 UI:shrink-0 UI:rounded-[4px] UI:border UI:shadow-xs UI:transition-shadow UI:outline-none UI:focus-visible:ring-[3px] UI:disabled:cursor-not-allowed UI:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="UI:flex UI:items-center UI:justify-center UI:text-current UI:transition-none"
      >
        <CheckIcon className="UI:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
