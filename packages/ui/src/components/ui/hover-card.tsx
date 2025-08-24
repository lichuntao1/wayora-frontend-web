import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:w-64 UI:origin-(--radix-hover-card-content-transform-origin) UI:rounded-md UI:border UI:p-4 UI:shadow-md UI:outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
