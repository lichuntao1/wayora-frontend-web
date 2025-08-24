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
          "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:w-64 hotel:origin-(--radix-hover-card-content-transform-origin) hotel:rounded-md hotel:border hotel:p-4 hotel:shadow-md hotel:outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
