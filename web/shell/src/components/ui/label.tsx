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
        "shell:flex shell:items-center shell:gap-2 shell:text-sm shell:leading-none shell:font-medium shell:select-none shell:group-data-[disabled=true]:pointer-events-none shell:group-data-[disabled=true]:opacity-50 shell:peer-disabled:cursor-not-allowed shell:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
