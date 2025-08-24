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
        "hotel:group/navigation-menu hotel:relative hotel:flex hotel:max-w-max hotel:flex-1 hotel:items-center hotel:justify-center",
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
        "hotel:group hotel:flex hotel:flex-1 hotel:list-none hotel:items-center hotel:justify-center hotel:gap-1",
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
      className={cn("hotel:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "hotel:group hotel:inline-flex hotel:h-9 hotel:w-max hotel:items-center hotel:justify-center hotel:rounded-md hotel:bg-background hotel:px-4 hotel:py-2 hotel:text-sm hotel:font-medium hotel:hover:bg-accent hotel:hover:text-accent-foreground hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:data-[state=open]:hover:bg-accent hotel:data-[state=open]:text-accent-foreground hotel:data-[state=open]:focus:bg-accent hotel:data-[state=open]:bg-accent/50 hotel:focus-visible:ring-ring/50 hotel:outline-none hotel:transition-[color,box-shadow] hotel:focus-visible:ring-[3px] hotel:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "hotel:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="hotel:relative hotel:top-[1px] hotel:ml-1 hotel:size-3 hotel:transition hotel:duration-300 hotel:group-data-[state=open]:rotate-180"
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
        "hotel:data-[motion^=from-]:animate-in hotel:data-[motion^=to-]:animate-out hotel:data-[motion^=from-]:fade-in hotel:data-[motion^=to-]:fade-out hotel:data-[motion=from-end]:slide-in-from-right-52 hotel:data-[motion=from-start]:slide-in-from-left-52 hotel:data-[motion=to-end]:slide-out-to-right-52 hotel:data-[motion=to-start]:slide-out-to-left-52 hotel:top-0 hotel:left-0 hotel:w-full hotel:p-2 hotel:pr-2.5 hotel:md:absolute hotel:md:w-auto",
        "hotel:group-data-[viewport=false]/navigation-menu:bg-popover hotel:group-data-[viewport=false]/navigation-menu:text-popover-foreground hotel:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in hotel:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out hotel:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 hotel:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 hotel:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 hotel:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 hotel:group-data-[viewport=false]/navigation-menu:top-full hotel:group-data-[viewport=false]/navigation-menu:mt-1.5 hotel:group-data-[viewport=false]/navigation-menu:overflow-hidden hotel:group-data-[viewport=false]/navigation-menu:rounded-md hotel:group-data-[viewport=false]/navigation-menu:border hotel:group-data-[viewport=false]/navigation-menu:shadow hotel:group-data-[viewport=false]/navigation-menu:duration-200 hotel:**:data-[slot=navigation-menu-link]:focus:ring-0 hotel:**:data-[slot=navigation-menu-link]:focus:outline-none",
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
        "hotel:absolute hotel:top-full hotel:left-0 hotel:isolate hotel:z-50 hotel:flex hotel:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "hotel:origin-top-center hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-90 hotel:relative hotel:mt-1.5 hotel:h-[var(--radix-navigation-menu-viewport-height)] hotel:w-full hotel:overflow-hidden hotel:rounded-md hotel:border hotel:shadow hotel:md:w-[var(--radix-navigation-menu-viewport-width)]",
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
        "hotel:data-[active=true]:focus:bg-accent hotel:data-[active=true]:hover:bg-accent hotel:data-[active=true]:bg-accent/50 hotel:data-[active=true]:text-accent-foreground hotel:hover:bg-accent hotel:hover:text-accent-foreground hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:focus-visible:ring-ring/50 hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:flex hotel:flex-col hotel:gap-1 hotel:rounded-sm hotel:p-2 hotel:text-sm hotel:transition-all hotel:outline-none hotel:focus-visible:ring-[3px] hotel:focus-visible:outline-1 hotel:[&_svg:not([class*=size-])]:size-4",
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
        "hotel:data-[state=visible]:animate-in hotel:data-[state=hidden]:animate-out hotel:data-[state=hidden]:fade-out hotel:data-[state=visible]:fade-in hotel:top-full hotel:z-[1] hotel:flex hotel:h-1.5 hotel:items-end hotel:justify-center hotel:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="hotel:bg-border hotel:relative hotel:top-[60%] hotel:h-2 hotel:w-2 hotel:rotate-45 hotel:rounded-tl-sm hotel:shadow-md" />
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
