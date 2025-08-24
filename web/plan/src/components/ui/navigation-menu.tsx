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
        "plan:group/navigation-menu plan:relative plan:flex plan:max-w-max plan:flex-1 plan:items-center plan:justify-center",
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
        "plan:group plan:flex plan:flex-1 plan:list-none plan:items-center plan:justify-center plan:gap-1",
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
      className={cn("plan:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "plan:group plan:inline-flex plan:h-9 plan:w-max plan:items-center plan:justify-center plan:rounded-md plan:bg-background plan:px-4 plan:py-2 plan:text-sm plan:font-medium plan:hover:bg-accent plan:hover:text-accent-foreground plan:focus:bg-accent plan:focus:text-accent-foreground plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:data-[state=open]:hover:bg-accent plan:data-[state=open]:text-accent-foreground plan:data-[state=open]:focus:bg-accent plan:data-[state=open]:bg-accent/50 plan:focus-visible:ring-ring/50 plan:outline-none plan:transition-[color,box-shadow] plan:focus-visible:ring-[3px] plan:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "plan:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="plan:relative plan:top-[1px] plan:ml-1 plan:size-3 plan:transition plan:duration-300 plan:group-data-[state=open]:rotate-180"
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
        "plan:data-[motion^=from-]:animate-in plan:data-[motion^=to-]:animate-out plan:data-[motion^=from-]:fade-in plan:data-[motion^=to-]:fade-out plan:data-[motion=from-end]:slide-in-from-right-52 plan:data-[motion=from-start]:slide-in-from-left-52 plan:data-[motion=to-end]:slide-out-to-right-52 plan:data-[motion=to-start]:slide-out-to-left-52 plan:top-0 plan:left-0 plan:w-full plan:p-2 plan:pr-2.5 plan:md:absolute plan:md:w-auto",
        "plan:group-data-[viewport=false]/navigation-menu:bg-popover plan:group-data-[viewport=false]/navigation-menu:text-popover-foreground plan:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in plan:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out plan:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 plan:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 plan:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 plan:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 plan:group-data-[viewport=false]/navigation-menu:top-full plan:group-data-[viewport=false]/navigation-menu:mt-1.5 plan:group-data-[viewport=false]/navigation-menu:overflow-hidden plan:group-data-[viewport=false]/navigation-menu:rounded-md plan:group-data-[viewport=false]/navigation-menu:border plan:group-data-[viewport=false]/navigation-menu:shadow plan:group-data-[viewport=false]/navigation-menu:duration-200 plan:**:data-[slot=navigation-menu-link]:focus:ring-0 plan:**:data-[slot=navigation-menu-link]:focus:outline-none",
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
        "plan:absolute plan:top-full plan:left-0 plan:isolate plan:z-50 plan:flex plan:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "plan:origin-top-center plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-90 plan:relative plan:mt-1.5 plan:h-[var(--radix-navigation-menu-viewport-height)] plan:w-full plan:overflow-hidden plan:rounded-md plan:border plan:shadow plan:md:w-[var(--radix-navigation-menu-viewport-width)]",
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
        "plan:data-[active=true]:focus:bg-accent plan:data-[active=true]:hover:bg-accent plan:data-[active=true]:bg-accent/50 plan:data-[active=true]:text-accent-foreground plan:hover:bg-accent plan:hover:text-accent-foreground plan:focus:bg-accent plan:focus:text-accent-foreground plan:focus-visible:ring-ring/50 plan:[&_svg:not([class*=text-])]:text-muted-foreground plan:flex plan:flex-col plan:gap-1 plan:rounded-sm plan:p-2 plan:text-sm plan:transition-all plan:outline-none plan:focus-visible:ring-[3px] plan:focus-visible:outline-1 plan:[&_svg:not([class*=size-])]:size-4",
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
        "plan:data-[state=visible]:animate-in plan:data-[state=hidden]:animate-out plan:data-[state=hidden]:fade-out plan:data-[state=visible]:fade-in plan:top-full plan:z-[1] plan:flex plan:h-1.5 plan:items-end plan:justify-center plan:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="plan:bg-border plan:relative plan:top-[60%] plan:h-2 plan:w-2 plan:rotate-45 plan:rounded-tl-sm plan:shadow-md" />
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
