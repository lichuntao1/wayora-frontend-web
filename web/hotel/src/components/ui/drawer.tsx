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
        "hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:fixed hotel:inset-0 hotel:z-50 hotel:bg-black/50",
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
          "hotel:group/drawer-content hotel:bg-background hotel:fixed hotel:z-50 hotel:flex hotel:h-auto hotel:flex-col",
          "hotel:data-[vaul-drawer-direction=top]:inset-x-0 hotel:data-[vaul-drawer-direction=top]:top-0 hotel:data-[vaul-drawer-direction=top]:mb-24 hotel:data-[vaul-drawer-direction=top]:max-h-[80vh] hotel:data-[vaul-drawer-direction=top]:rounded-b-lg hotel:data-[vaul-drawer-direction=top]:border-b",
          "hotel:data-[vaul-drawer-direction=bottom]:inset-x-0 hotel:data-[vaul-drawer-direction=bottom]:bottom-0 hotel:data-[vaul-drawer-direction=bottom]:mt-24 hotel:data-[vaul-drawer-direction=bottom]:max-h-[80vh] hotel:data-[vaul-drawer-direction=bottom]:rounded-t-lg hotel:data-[vaul-drawer-direction=bottom]:border-t",
          "hotel:data-[vaul-drawer-direction=right]:inset-y-0 hotel:data-[vaul-drawer-direction=right]:right-0 hotel:data-[vaul-drawer-direction=right]:w-3/4 hotel:data-[vaul-drawer-direction=right]:border-l hotel:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "hotel:data-[vaul-drawer-direction=left]:inset-y-0 hotel:data-[vaul-drawer-direction=left]:left-0 hotel:data-[vaul-drawer-direction=left]:w-3/4 hotel:data-[vaul-drawer-direction=left]:border-r hotel:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="hotel:bg-muted hotel:mx-auto hotel:mt-4 hotel:hidden hotel:h-2 hotel:w-[100px] hotel:shrink-0 hotel:rounded-full hotel:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
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
        "hotel:flex hotel:flex-col hotel:gap-0.5 hotel:p-4 hotel:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center hotel:group-data-[vaul-drawer-direction=top]/drawer-content:text-center hotel:md:gap-1.5 hotel:md:text-left",
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
      className={cn("hotel:mt-auto hotel:flex hotel:flex-col hotel:gap-2 hotel:p-4", className)}
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
      className={cn("hotel:text-foreground hotel:font-semibold", className)}
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
      className={cn("hotel:text-muted-foreground hotel:text-sm", className)}
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
