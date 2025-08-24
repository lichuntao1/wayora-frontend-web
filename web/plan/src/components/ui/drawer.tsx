import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:fixed plan:inset-0 plan:z-50 plan:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "plan:group/drawer-content plan:bg-background plan:fixed plan:z-50 plan:flex plan:h-auto plan:flex-col",
          "plan:data-[vaul-drawer-direction=top]:inset-x-0 plan:data-[vaul-drawer-direction=top]:top-0 plan:data-[vaul-drawer-direction=top]:mb-24 plan:data-[vaul-drawer-direction=top]:max-h-[80vh] plan:data-[vaul-drawer-direction=top]:rounded-b-lg plan:data-[vaul-drawer-direction=top]:border-b",
          "plan:data-[vaul-drawer-direction=bottom]:inset-x-0 plan:data-[vaul-drawer-direction=bottom]:bottom-0 plan:data-[vaul-drawer-direction=bottom]:mt-24 plan:data-[vaul-drawer-direction=bottom]:max-h-[80vh] plan:data-[vaul-drawer-direction=bottom]:rounded-t-lg plan:data-[vaul-drawer-direction=bottom]:border-t",
          "plan:data-[vaul-drawer-direction=right]:inset-y-0 plan:data-[vaul-drawer-direction=right]:right-0 plan:data-[vaul-drawer-direction=right]:w-3/4 plan:data-[vaul-drawer-direction=right]:border-l plan:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "plan:data-[vaul-drawer-direction=left]:inset-y-0 plan:data-[vaul-drawer-direction=left]:left-0 plan:data-[vaul-drawer-direction=left]:w-3/4 plan:data-[vaul-drawer-direction=left]:border-r plan:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="plan:bg-muted plan:mx-auto plan:mt-4 plan:hidden plan:h-2 plan:w-[100px] plan:shrink-0 plan:rounded-full plan:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "plan:flex plan:flex-col plan:gap-0.5 plan:p-4 plan:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center plan:group-data-[vaul-drawer-direction=top]/drawer-content:text-center plan:md:gap-1.5 plan:md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("plan:mt-auto plan:flex plan:flex-col plan:gap-2 plan:p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("plan:text-foreground plan:font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("plan:text-muted-foreground plan:text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
