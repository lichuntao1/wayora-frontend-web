"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "hotel:group/sidebar-wrapper hotel:has-data-[variant=inset]:bg-sidebar hotel:flex hotel:min-h-svh hotel:w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "hotel:bg-sidebar hotel:text-sidebar-foreground hotel:flex hotel:h-full hotel:w-(--sidebar-width) hotel:flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="hotel:bg-sidebar hotel:text-sidebar-foreground hotel:w-(--sidebar-width) hotel:p-0 hotel:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="hotel:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="hotel:flex hotel:h-full hotel:w-full hotel:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="hotel:group hotel:peer hotel:text-sidebar-foreground hotel:hidden hotel:md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "hotel:relative hotel:w-(--sidebar-width) hotel:bg-transparent hotel:transition-[width] hotel:duration-200 hotel:ease-linear",
          "hotel:group-data-[collapsible=offcanvas]:w-0",
          "hotel:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "hotel:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "hotel:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "hotel:fixed hotel:inset-y-0 hotel:z-10 hotel:hidden hotel:h-svh hotel:w-(--sidebar-width) hotel:transition-[left,right,width] hotel:duration-200 hotel:ease-linear hotel:md:flex",
          side === "left"
            ? "hotel:left-0 hotel:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "hotel:right-0 hotel:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "hotel:p-2 hotel:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "hotel:group-data-[collapsible=icon]:w-(--sidebar-width-icon) hotel:group-data-[side=left]:border-r hotel:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="hotel:bg-sidebar hotel:group-data-[variant=floating]:border-sidebar-border hotel:flex hotel:h-full hotel:w-full hotel:flex-col hotel:group-data-[variant=floating]:rounded-lg hotel:group-data-[variant=floating]:border hotel:group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("hotel:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="hotel:sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hotel:hover:after:bg-sidebar-border hotel:absolute hotel:inset-y-0 hotel:z-20 hotel:hidden hotel:w-4 hotel:-translate-x-1/2 hotel:transition-all hotel:ease-linear hotel:group-data-[side=left]:-right-4 hotel:group-data-[side=right]:left-0 hotel:after:absolute hotel:after:inset-y-0 hotel:after:left-1/2 hotel:after:w-[2px] hotel:sm:flex",
        "hotel:in-data-[side=left]:cursor-w-resize hotel:in-data-[side=right]:cursor-e-resize",
        "hotel:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize hotel:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hotel:hover:group-data-[collapsible=offcanvas]:bg-sidebar hotel:group-data-[collapsible=offcanvas]:translate-x-0 hotel:group-data-[collapsible=offcanvas]:after:left-full",
        "hotel:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "hotel:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "hotel:bg-background hotel:relative hotel:flex hotel:w-full hotel:flex-1 hotel:flex-col",
        "hotel:md:peer-data-[variant=inset]:m-2 hotel:md:peer-data-[variant=inset]:ml-0 hotel:md:peer-data-[variant=inset]:rounded-xl hotel:md:peer-data-[variant=inset]:shadow-sm hotel:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("hotel:bg-background hotel:h-8 hotel:w-full hotel:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("hotel:flex hotel:flex-col hotel:gap-2 hotel:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("hotel:flex hotel:flex-col hotel:gap-2 hotel:p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("hotel:bg-sidebar-border hotel:mx-2 hotel:w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "hotel:flex hotel:min-h-0 hotel:flex-1 hotel:flex-col hotel:gap-2 hotel:overflow-auto hotel:group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("hotel:relative hotel:flex hotel:w-full hotel:min-w-0 hotel:flex-col hotel:p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "hotel:text-sidebar-foreground/70 hotel:ring-sidebar-ring hotel:flex hotel:h-8 hotel:shrink-0 hotel:items-center hotel:rounded-md hotel:px-2 hotel:text-xs hotel:font-medium hotel:outline-hidden hotel:transition-[margin,opacity] hotel:duration-200 hotel:ease-linear hotel:focus-visible:ring-2 hotel:[&>svg]:size-4 hotel:[&>svg]:shrink-0",
        "hotel:group-data-[collapsible=icon]:-mt-8 hotel:group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "hotel:text-sidebar-foreground hotel:ring-sidebar-ring hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground hotel:absolute hotel:top-3.5 hotel:right-3 hotel:flex hotel:aspect-square hotel:w-5 hotel:items-center hotel:justify-center hotel:rounded-md hotel:p-0 hotel:outline-hidden hotel:transition-transform hotel:focus-visible:ring-2 hotel:[&>svg]:size-4 hotel:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "hotel:after:absolute hotel:after:-inset-2 hotel:md:after:hidden",
        "hotel:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("hotel:w-full hotel:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("hotel:flex hotel:w-full hotel:min-w-0 hotel:flex-col hotel:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("hotel:group/menu-item hotel:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "hotel:peer/menu-button hotel:flex hotel:w-full hotel:items-center hotel:gap-2 hotel:overflow-hidden hotel:rounded-md hotel:p-2 hotel:text-left hotel:text-sm hotel:outline-hidden hotel:ring-sidebar-ring hotel:transition-[width,height,padding] hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground hotel:focus-visible:ring-2 hotel:active:bg-sidebar-accent hotel:active:text-sidebar-accent-foreground hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:group-has-data-[sidebar=menu-action]/menu-item:pr-8 hotel:aria-disabled:pointer-events-none hotel:aria-disabled:opacity-50 hotel:data-[active=true]:bg-sidebar-accent hotel:data-[active=true]:font-medium hotel:data-[active=true]:text-sidebar-accent-foreground hotel:data-[state=open]:hover:bg-sidebar-accent hotel:data-[state=open]:hover:text-sidebar-accent-foreground hotel:group-data-[collapsible=icon]:size-8! hotel:group-data-[collapsible=icon]:p-2! hotel:[&>span:last-child]:truncate hotel:[&>svg]:size-4 hotel:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground",
        outline:
          "hotel:bg-background hotel:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground hotel:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "hotel:h-8 hotel:text-sm",
        sm: "hotel:h-7 hotel:text-xs",
        lg: "hotel:h-12 hotel:text-sm hotel:group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "hotel:text-sidebar-foreground hotel:ring-sidebar-ring hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground hotel:peer-hover/menu-button:text-sidebar-accent-foreground hotel:absolute hotel:top-1.5 hotel:right-1 hotel:flex hotel:aspect-square hotel:w-5 hotel:items-center hotel:justify-center hotel:rounded-md hotel:p-0 hotel:outline-hidden hotel:transition-transform hotel:focus-visible:ring-2 hotel:[&>svg]:size-4 hotel:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "hotel:after:absolute hotel:after:-inset-2 hotel:md:after:hidden",
        "hotel:peer-data-[size=sm]/menu-button:top-1",
        "hotel:peer-data-[size=default]/menu-button:top-1.5",
        "hotel:peer-data-[size=lg]/menu-button:top-2.5",
        "hotel:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "hotel:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground hotel:group-focus-within/menu-item:opacity-100 hotel:group-hover/menu-item:opacity-100 hotel:data-[state=open]:opacity-100 hotel:md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "hotel:text-sidebar-foreground hotel:pointer-events-none hotel:absolute hotel:right-1 hotel:flex hotel:h-5 hotel:min-w-5 hotel:items-center hotel:justify-center hotel:rounded-md hotel:px-1 hotel:text-xs hotel:font-medium hotel:tabular-nums hotel:select-none",
        "hotel:peer-hover/menu-button:text-sidebar-accent-foreground hotel:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "hotel:peer-data-[size=sm]/menu-button:top-1",
        "hotel:peer-data-[size=default]/menu-button:top-1.5",
        "hotel:peer-data-[size=lg]/menu-button:top-2.5",
        "hotel:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("hotel:flex hotel:h-8 hotel:items-center hotel:gap-2 hotel:rounded-md hotel:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="hotel:size-4 hotel:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="hotel:h-4 hotel:max-w-(--skeleton-width) hotel:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "hotel:border-sidebar-border hotel:mx-3.5 hotel:flex hotel:min-w-0 hotel:translate-x-px hotel:flex-col hotel:gap-1 hotel:border-l hotel:px-2.5 hotel:py-0.5",
        "hotel:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("hotel:group/menu-sub-item hotel:relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "hotel:text-sidebar-foreground hotel:ring-sidebar-ring hotel:hover:bg-sidebar-accent hotel:hover:text-sidebar-accent-foreground hotel:active:bg-sidebar-accent hotel:active:text-sidebar-accent-foreground hotel:[&>svg]:text-sidebar-accent-foreground hotel:flex hotel:h-7 hotel:min-w-0 hotel:-translate-x-px hotel:items-center hotel:gap-2 hotel:overflow-hidden hotel:rounded-md hotel:px-2 hotel:outline-hidden hotel:focus-visible:ring-2 hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:aria-disabled:pointer-events-none hotel:aria-disabled:opacity-50 hotel:[&>span:last-child]:truncate hotel:[&>svg]:size-4 hotel:[&>svg]:shrink-0",
        "hotel:data-[active=true]:bg-sidebar-accent hotel:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "hotel:text-xs",
        size === "md" && "hotel:text-sm",
        "hotel:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
