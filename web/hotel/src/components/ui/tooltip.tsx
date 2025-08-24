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
          "hotel:bg-primary hotel:text-primary-foreground hotel:animate-in hotel:fade-in-0 hotel:zoom-in-95 hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:w-fit hotel:origin-(--radix-tooltip-content-transform-origin) hotel:rounded-md hotel:px-3 hotel:py-1.5 hotel:text-xs hotel:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="hotel:bg-primary hotel:fill-primary hotel:z-50 hotel:size-2.5 hotel:translate-y-[calc(-50%_-_2px)] hotel:rotate-45 hotel:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
