"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("shell:grid shell:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "shell:border-input shell:text-primary shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:dark:bg-input/30 shell:aspect-square shell:size-4 shell:shrink-0 shell:rounded-full shell:border shell:shadow-xs shell:transition-[color,box-shadow] shell:outline-none shell:focus-visible:ring-[3px] shell:disabled:cursor-not-allowed shell:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="shell:relative shell:flex shell:items-center shell:justify-center"
      >
        <CircleIcon className="shell:fill-primary shell:absolute shell:top-1/2 shell:left-1/2 shell:size-2 shell:-translate-x-1/2 shell:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
