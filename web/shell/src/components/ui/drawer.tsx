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
        "shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:fixed shell:inset-0 shell:z-50 shell:bg-black/50",
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
          "shell:group/drawer-content shell:bg-background shell:fixed shell:z-50 shell:flex shell:h-auto shell:flex-col",
          "shell:data-[vaul-drawer-direction=top]:inset-x-0 shell:data-[vaul-drawer-direction=top]:top-0 shell:data-[vaul-drawer-direction=top]:mb-24 shell:data-[vaul-drawer-direction=top]:max-h-[80vh] shell:data-[vaul-drawer-direction=top]:rounded-b-lg shell:data-[vaul-drawer-direction=top]:border-b",
          "shell:data-[vaul-drawer-direction=bottom]:inset-x-0 shell:data-[vaul-drawer-direction=bottom]:bottom-0 shell:data-[vaul-drawer-direction=bottom]:mt-24 shell:data-[vaul-drawer-direction=bottom]:max-h-[80vh] shell:data-[vaul-drawer-direction=bottom]:rounded-t-lg shell:data-[vaul-drawer-direction=bottom]:border-t",
          "shell:data-[vaul-drawer-direction=right]:inset-y-0 shell:data-[vaul-drawer-direction=right]:right-0 shell:data-[vaul-drawer-direction=right]:w-3/4 shell:data-[vaul-drawer-direction=right]:border-l shell:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "shell:data-[vaul-drawer-direction=left]:inset-y-0 shell:data-[vaul-drawer-direction=left]:left-0 shell:data-[vaul-drawer-direction=left]:w-3/4 shell:data-[vaul-drawer-direction=left]:border-r shell:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="shell:bg-muted shell:mx-auto shell:mt-4 shell:hidden shell:h-2 shell:w-[100px] shell:shrink-0 shell:rounded-full shell:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
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
        "shell:flex shell:flex-col shell:gap-0.5 shell:p-4 shell:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center shell:group-data-[vaul-drawer-direction=top]/drawer-content:text-center shell:md:gap-1.5 shell:md:text-left",
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
      className={cn("shell:mt-auto shell:flex shell:flex-col shell:gap-2 shell:p-4", className)}
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
      className={cn("shell:text-foreground shell:font-semibold", className)}
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
      className={cn("shell:text-muted-foreground shell:text-sm", className)}
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
