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
        "shell:group/navigation-menu shell:relative shell:flex shell:max-w-max shell:flex-1 shell:items-center shell:justify-center",
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
        "shell:group shell:flex shell:flex-1 shell:list-none shell:items-center shell:justify-center shell:gap-1",
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
      className={cn("shell:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "shell:group shell:inline-flex shell:h-9 shell:w-max shell:items-center shell:justify-center shell:rounded-md shell:bg-background shell:px-4 shell:py-2 shell:text-sm shell:font-medium shell:hover:bg-accent shell:hover:text-accent-foreground shell:focus:bg-accent shell:focus:text-accent-foreground shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:data-[state=open]:hover:bg-accent shell:data-[state=open]:text-accent-foreground shell:data-[state=open]:focus:bg-accent shell:data-[state=open]:bg-accent/50 shell:focus-visible:ring-ring/50 shell:outline-none shell:transition-[color,box-shadow] shell:focus-visible:ring-[3px] shell:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "shell:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="shell:relative shell:top-[1px] shell:ml-1 shell:size-3 shell:transition shell:duration-300 shell:group-data-[state=open]:rotate-180"
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
        "shell:data-[motion^=from-]:animate-in shell:data-[motion^=to-]:animate-out shell:data-[motion^=from-]:fade-in shell:data-[motion^=to-]:fade-out shell:data-[motion=from-end]:slide-in-from-right-52 shell:data-[motion=from-start]:slide-in-from-left-52 shell:data-[motion=to-end]:slide-out-to-right-52 shell:data-[motion=to-start]:slide-out-to-left-52 shell:top-0 shell:left-0 shell:w-full shell:p-2 shell:pr-2.5 shell:md:absolute shell:md:w-auto",
        "shell:group-data-[viewport=false]/navigation-menu:bg-popover shell:group-data-[viewport=false]/navigation-menu:text-popover-foreground shell:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in shell:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out shell:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 shell:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 shell:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 shell:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 shell:group-data-[viewport=false]/navigation-menu:top-full shell:group-data-[viewport=false]/navigation-menu:mt-1.5 shell:group-data-[viewport=false]/navigation-menu:overflow-hidden shell:group-data-[viewport=false]/navigation-menu:rounded-md shell:group-data-[viewport=false]/navigation-menu:border shell:group-data-[viewport=false]/navigation-menu:shadow shell:group-data-[viewport=false]/navigation-menu:duration-200 shell:**:data-[slot=navigation-menu-link]:focus:ring-0 shell:**:data-[slot=navigation-menu-link]:focus:outline-none",
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
        "shell:absolute shell:top-full shell:left-0 shell:isolate shell:z-50 shell:flex shell:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "shell:origin-top-center shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-90 shell:relative shell:mt-1.5 shell:h-[var(--radix-navigation-menu-viewport-height)] shell:w-full shell:overflow-hidden shell:rounded-md shell:border shell:shadow shell:md:w-[var(--radix-navigation-menu-viewport-width)]",
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
        "shell:data-[active=true]:focus:bg-accent shell:data-[active=true]:hover:bg-accent shell:data-[active=true]:bg-accent/50 shell:data-[active=true]:text-accent-foreground shell:hover:bg-accent shell:hover:text-accent-foreground shell:focus:bg-accent shell:focus:text-accent-foreground shell:focus-visible:ring-ring/50 shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:flex shell:flex-col shell:gap-1 shell:rounded-sm shell:p-2 shell:text-sm shell:transition-all shell:outline-none shell:focus-visible:ring-[3px] shell:focus-visible:outline-1 shell:[&_svg:not([class*=size-])]:size-4",
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
        "shell:data-[state=visible]:animate-in shell:data-[state=hidden]:animate-out shell:data-[state=hidden]:fade-out shell:data-[state=visible]:fade-in shell:top-full shell:z-[1] shell:flex shell:h-1.5 shell:items-end shell:justify-center shell:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="shell:bg-border shell:relative shell:top-[60%] shell:h-2 shell:w-2 shell:rotate-45 shell:rounded-tl-sm shell:shadow-md" />
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
