import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "UI:group/navigation-menu UI:relative UI:flex UI:max-w-max UI:flex-1 UI:items-center UI:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "UI:group UI:flex UI:flex-1 UI:list-none UI:items-center UI:justify-center UI:gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("UI:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "UI:group UI:inline-flex UI:h-9 UI:w-max UI:items-center UI:justify-center UI:rounded-md UI:bg-background UI:px-4 UI:py-2 UI:text-sm UI:font-medium UI:hover:bg-accent UI:hover:text-accent-foreground UI:focus:bg-accent UI:focus:text-accent-foreground UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:data-[state=open]:hover:bg-accent UI:data-[state=open]:text-accent-foreground UI:data-[state=open]:focus:bg-accent UI:data-[state=open]:bg-accent/50 UI:focus-visible:ring-ring/50 UI:outline-none UI:transition-[color,box-shadow] UI:focus-visible:ring-[3px] UI:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "UI:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="UI:relative UI:top-[1px] UI:ml-1 UI:size-3 UI:transition UI:duration-300 UI:group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "UI:data-[motion^=from-]:animate-in UI:data-[motion^=to-]:animate-out UI:data-[motion^=from-]:fade-in UI:data-[motion^=to-]:fade-out UI:data-[motion=from-end]:slide-in-from-right-52 UI:data-[motion=from-start]:slide-in-from-left-52 UI:data-[motion=to-end]:slide-out-to-right-52 UI:data-[motion=to-start]:slide-out-to-left-52 UI:top-0 UI:left-0 UI:w-full UI:p-2 UI:pr-2.5 UI:md:absolute UI:md:w-auto",
        "UI:group-data-[viewport=false]/navigation-menu:bg-popover UI:group-data-[viewport=false]/navigation-menu:text-popover-foreground UI:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in UI:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out UI:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 UI:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 UI:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 UI:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 UI:group-data-[viewport=false]/navigation-menu:top-full UI:group-data-[viewport=false]/navigation-menu:mt-1.5 UI:group-data-[viewport=false]/navigation-menu:overflow-hidden UI:group-data-[viewport=false]/navigation-menu:rounded-md UI:group-data-[viewport=false]/navigation-menu:border UI:group-data-[viewport=false]/navigation-menu:shadow UI:group-data-[viewport=false]/navigation-menu:duration-200 UI:**:data-[slot=navigation-menu-link]:focus:ring-0 UI:**:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "UI:absolute UI:top-full UI:left-0 UI:isolate UI:z-50 UI:flex UI:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "UI:origin-top-center UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-90 UI:relative UI:mt-1.5 UI:h-[var(--radix-navigation-menu-viewport-height)] UI:w-full UI:overflow-hidden UI:rounded-md UI:border UI:shadow UI:md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "UI:data-[active=true]:focus:bg-accent UI:data-[active=true]:hover:bg-accent UI:data-[active=true]:bg-accent/50 UI:data-[active=true]:text-accent-foreground UI:hover:bg-accent UI:hover:text-accent-foreground UI:focus:bg-accent UI:focus:text-accent-foreground UI:focus-visible:ring-ring/50 UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:flex UI:flex-col UI:gap-1 UI:rounded-sm UI:p-2 UI:text-sm UI:transition-all UI:outline-none UI:focus-visible:ring-[3px] UI:focus-visible:outline-1 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "UI:data-[state=visible]:animate-in UI:data-[state=hidden]:animate-out UI:data-[state=hidden]:fade-out UI:data-[state=visible]:fade-in UI:top-full UI:z-[1] UI:flex UI:h-1.5 UI:items-end UI:justify-center UI:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="UI:bg-border UI:relative UI:top-[60%] UI:h-2 UI:w-2 UI:rotate-45 UI:rounded-tl-sm UI:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
