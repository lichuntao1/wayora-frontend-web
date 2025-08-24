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
      className={cn("hotel:grid hotel:gap-3", className)}
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
        "hotel:border-input hotel:text-primary hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:dark:bg-input/30 hotel:aspect-square hotel:size-4 hotel:shrink-0 hotel:rounded-full hotel:border hotel:shadow-xs hotel:transition-[color,box-shadow] hotel:outline-none hotel:focus-visible:ring-[3px] hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="hotel:relative hotel:flex hotel:items-center hotel:justify-center"
      >
        <CircleIcon className="hotel:fill-primary hotel:absolute hotel:top-1/2 hotel:left-1/2 hotel:size-2 hotel:-translate-x-1/2 hotel:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
