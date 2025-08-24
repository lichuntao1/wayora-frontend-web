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
        "shell:peer shell:data-[state=checked]:bg-primary shell:data-[state=unchecked]:bg-input shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:dark:data-[state=unchecked]:bg-input/80 shell:inline-flex shell:h-[1.15rem] shell:w-8 shell:shrink-0 shell:items-center shell:rounded-full shell:border shell:border-transparent shell:shadow-xs shell:transition-all shell:outline-none shell:focus-visible:ring-[3px] shell:disabled:cursor-not-allowed shell:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "shell:bg-background shell:dark:data-[state=unchecked]:bg-foreground shell:dark:data-[state=checked]:bg-primary-foreground shell:pointer-events-none shell:block shell:size-4 shell:rounded-full shell:ring-0 shell:transition-transform shell:data-[state=checked]:translate-x-[calc(100%-2px)] shell:data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
