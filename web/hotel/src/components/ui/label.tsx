"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "hotel:flex hotel:items-center hotel:gap-2 hotel:text-sm hotel:leading-none hotel:font-medium hotel:select-none hotel:group-data-[disabled=true]:pointer-events-none hotel:group-data-[disabled=true]:opacity-50 hotel:peer-disabled:cursor-not-allowed hotel:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
