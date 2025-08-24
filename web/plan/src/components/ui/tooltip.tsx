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
          "plan:bg-primary plan:text-primary-foreground plan:animate-in plan:fade-in-0 plan:zoom-in-95 plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=closed]:zoom-out-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:z-50 plan:w-fit plan:origin-(--radix-tooltip-content-transform-origin) plan:rounded-md plan:px-3 plan:py-1.5 plan:text-xs plan:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="plan:bg-primary plan:fill-primary plan:z-50 plan:size-2.5 plan:translate-y-[calc(-50%_-_2px)] plan:rotate-45 plan:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
