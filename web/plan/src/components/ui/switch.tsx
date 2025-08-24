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
        "plan:peer plan:data-[state=checked]:bg-primary plan:data-[state=unchecked]:bg-input plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:dark:data-[state=unchecked]:bg-input/80 plan:inline-flex plan:h-[1.15rem] plan:w-8 plan:shrink-0 plan:items-center plan:rounded-full plan:border plan:border-transparent plan:shadow-xs plan:transition-all plan:outline-none plan:focus-visible:ring-[3px] plan:disabled:cursor-not-allowed plan:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "plan:bg-background plan:dark:data-[state=unchecked]:bg-foreground plan:dark:data-[state=checked]:bg-primary-foreground plan:pointer-events-none plan:block plan:size-4 plan:rounded-full plan:ring-0 plan:transition-transform plan:data-[state=checked]:translate-x-[calc(100%-2px)] plan:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
