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
        "plan:flex plan:items-center plan:gap-2 plan:text-sm plan:leading-none plan:font-medium plan:select-none plan:group-data-[disabled=true]:pointer-events-none plan:group-data-[disabled=true]:opacity-50 plan:peer-disabled:cursor-not-allowed plan:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
