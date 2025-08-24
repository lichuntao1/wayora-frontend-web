import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "shell:bg-primary shell:text-primary-foreground shell:animate-in shell:fade-in-0 shell:zoom-in-95 shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=closed]:zoom-out-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:z-50 shell:w-fit shell:origin-(--radix-tooltip-content-transform-origin) shell:rounded-md shell:px-3 shell:py-1.5 shell:text-xs shell:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="shell:bg-primary shell:fill-primary shell:z-50 shell:size-2.5 shell:translate-y-[calc(-50%_-_2px)] shell:rotate-45 shell:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
