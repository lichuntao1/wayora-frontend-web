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
      className={cn("UI:grid UI:gap-3", className)}
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
        "UI:border-input UI:text-primary UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:dark:bg-input/30 UI:aspect-square UI:size-4 UI:shrink-0 UI:rounded-full UI:border UI:shadow-xs UI:transition-[color,box-shadow] UI:outline-none UI:focus-visible:ring-[3px] UI:disabled:cursor-not-allowed UI:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="UI:relative UI:flex UI:items-center UI:justify-center"
      >
        <CircleIcon className="UI:fill-primary UI:absolute UI:top-1/2 UI:left-1/2 UI:size-2 UI:-translate-x-1/2 UI:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
