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
        "UI:peer UI:data-[state=checked]:bg-primary UI:data-[state=unchecked]:bg-input UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:dark:data-[state=unchecked]:bg-input/80 UI:inline-flex UI:h-[1.15rem] UI:w-8 UI:shrink-0 UI:items-center UI:rounded-full UI:border UI:border-transparent UI:shadow-xs UI:transition-all UI:outline-none UI:focus-visible:ring-[3px] UI:disabled:cursor-not-allowed UI:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "UI:bg-background UI:dark:data-[state=unchecked]:bg-foreground UI:dark:data-[state=checked]:bg-primary-foreground UI:pointer-events-none UI:block UI:size-4 UI:rounded-full UI:ring-0 UI:transition-transform UI:data-[state=checked]:translate-x-[calc(100%-2px)] UI:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
