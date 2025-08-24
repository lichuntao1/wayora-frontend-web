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
      className={cn("plan:grid plan:gap-3", className)}
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
        "plan:border-input plan:text-primary plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:dark:bg-input/30 plan:aspect-square plan:size-4 plan:shrink-0 plan:rounded-full plan:border plan:shadow-xs plan:transition-[color,box-shadow] plan:outline-none plan:focus-visible:ring-[3px] plan:disabled:cursor-not-allowed plan:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="plan:relative plan:flex plan:items-center plan:justify-center"
      >
        <CircleIcon className="plan:fill-primary plan:absolute plan:top-1/2 plan:left-1/2 plan:size-2 plan:-translate-x-1/2 plan:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
