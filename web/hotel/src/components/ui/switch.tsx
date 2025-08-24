"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "hotel:peer hotel:data-[state=checked]:bg-primary hotel:data-[state=unchecked]:bg-input hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:dark:data-[state=unchecked]:bg-input/80 hotel:inline-flex hotel:h-[1.15rem] hotel:w-8 hotel:shrink-0 hotel:items-center hotel:rounded-full hotel:border hotel:border-transparent hotel:shadow-xs hotel:transition-all hotel:outline-none hotel:focus-visible:ring-[3px] hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "hotel:bg-background hotel:dark:data-[state=unchecked]:bg-foreground hotel:dark:data-[state=checked]:bg-primary-foreground hotel:pointer-events-none hotel:block hotel:size-4 hotel:rounded-full hotel:ring-0 hotel:transition-transform hotel:data-[state=checked]:translate-x-[calc(100%-2px)] hotel:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
