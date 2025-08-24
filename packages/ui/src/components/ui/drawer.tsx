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
        "UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:fixed UI:inset-0 UI:z-50 UI:bg-black/50",
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
          "UI:group/drawer-content UI:bg-background UI:fixed UI:z-50 UI:flex UI:h-auto UI:flex-col",
          "UI:data-[vaul-drawer-direction=top]:inset-x-0 UI:data-[vaul-drawer-direction=top]:top-0 UI:data-[vaul-drawer-direction=top]:mb-24 UI:data-[vaul-drawer-direction=top]:max-h-[80vh] UI:data-[vaul-drawer-direction=top]:rounded-b-lg UI:data-[vaul-drawer-direction=top]:border-b",
          "UI:data-[vaul-drawer-direction=bottom]:inset-x-0 UI:data-[vaul-drawer-direction=bottom]:bottom-0 UI:data-[vaul-drawer-direction=bottom]:mt-24 UI:data-[vaul-drawer-direction=bottom]:max-h-[80vh] UI:data-[vaul-drawer-direction=bottom]:rounded-t-lg UI:data-[vaul-drawer-direction=bottom]:border-t",
          "UI:data-[vaul-drawer-direction=right]:inset-y-0 UI:data-[vaul-drawer-direction=right]:right-0 UI:data-[vaul-drawer-direction=right]:w-3/4 UI:data-[vaul-drawer-direction=right]:border-l UI:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "UI:data-[vaul-drawer-direction=left]:inset-y-0 UI:data-[vaul-drawer-direction=left]:left-0 UI:data-[vaul-drawer-direction=left]:w-3/4 UI:data-[vaul-drawer-direction=left]:border-r UI:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="UI:bg-muted UI:mx-auto UI:mt-4 UI:hidden UI:h-2 UI:w-[100px] UI:shrink-0 UI:rounded-full UI:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
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
        "UI:flex UI:flex-col UI:gap-0.5 UI:p-4 UI:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center UI:group-data-[vaul-drawer-direction=top]/drawer-content:text-center UI:md:gap-1.5 UI:md:text-left",
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
      className={cn("UI:mt-auto UI:flex UI:flex-col UI:gap-2 UI:p-4", className)}
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
      className={cn("UI:text-foreground UI:font-semibold", className)}
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
      className={cn("UI:text-muted-foreground UI:text-sm", className)}
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
