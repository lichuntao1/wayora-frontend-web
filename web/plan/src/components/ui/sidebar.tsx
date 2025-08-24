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
            "plan:group/sidebar-wrapper plan:has-data-[variant=inset]:bg-sidebar plan:flex plan:min-h-svh plan:w-full",
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
          "plan:bg-sidebar plan:text-sidebar-foreground plan:flex plan:h-full plan:w-(--sidebar-width) plan:flex-col",
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
          className="plan:bg-sidebar plan:text-sidebar-foreground plan:w-(--sidebar-width) plan:p-0 plan:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="plan:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="plan:flex plan:h-full plan:w-full plan:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="plan:group plan:peer plan:text-sidebar-foreground plan:hidden plan:md:block"
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
          "plan:relative plan:w-(--sidebar-width) plan:bg-transparent plan:transition-[width] plan:duration-200 plan:ease-linear",
          "plan:group-data-[collapsible=offcanvas]:w-0",
          "plan:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "plan:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "plan:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "plan:fixed plan:inset-y-0 plan:z-10 plan:hidden plan:h-svh plan:w-(--sidebar-width) plan:transition-[left,right,width] plan:duration-200 plan:ease-linear plan:md:flex",
          side === "left"
            ? "plan:left-0 plan:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "plan:right-0 plan:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "plan:p-2 plan:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "plan:group-data-[collapsible=icon]:w-(--sidebar-width-icon) plan:group-data-[side=left]:border-r plan:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="plan:bg-sidebar plan:group-data-[variant=floating]:border-sidebar-border plan:flex plan:h-full plan:w-full plan:flex-col plan:group-data-[variant=floating]:rounded-lg plan:group-data-[variant=floating]:border plan:group-data-[variant=floating]:shadow-sm"
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
      className={cn("plan:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="plan:sr-only">Toggle Sidebar</span>
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
        "plan:hover:after:bg-sidebar-border plan:absolute plan:inset-y-0 plan:z-20 plan:hidden plan:w-4 plan:-translate-x-1/2 plan:transition-all plan:ease-linear plan:group-data-[side=left]:-right-4 plan:group-data-[side=right]:left-0 plan:after:absolute plan:after:inset-y-0 plan:after:left-1/2 plan:after:w-[2px] plan:sm:flex",
        "plan:in-data-[side=left]:cursor-w-resize plan:in-data-[side=right]:cursor-e-resize",
        "plan:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize plan:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "plan:hover:group-data-[collapsible=offcanvas]:bg-sidebar plan:group-data-[collapsible=offcanvas]:translate-x-0 plan:group-data-[collapsible=offcanvas]:after:left-full",
        "plan:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "plan:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
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
        "plan:bg-background plan:relative plan:flex plan:w-full plan:flex-1 plan:flex-col",
        "plan:md:peer-data-[variant=inset]:m-2 plan:md:peer-data-[variant=inset]:ml-0 plan:md:peer-data-[variant=inset]:rounded-xl plan:md:peer-data-[variant=inset]:shadow-sm plan:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
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
      className={cn("plan:bg-background plan:h-8 plan:w-full plan:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("plan:flex plan:flex-col plan:gap-2 plan:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("plan:flex plan:flex-col plan:gap-2 plan:p-2", className)}
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
      className={cn("plan:bg-sidebar-border plan:mx-2 plan:w-auto", className)}
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
        "plan:flex plan:min-h-0 plan:flex-1 plan:flex-col plan:gap-2 plan:overflow-auto plan:group-data-[collapsible=icon]:overflow-hidden",
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
      className={cn("plan:relative plan:flex plan:w-full plan:min-w-0 plan:flex-col plan:p-2", className)}
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
        "plan:text-sidebar-foreground/70 plan:ring-sidebar-ring plan:flex plan:h-8 plan:shrink-0 plan:items-center plan:rounded-md plan:px-2 plan:text-xs plan:font-medium plan:outline-hidden plan:transition-[margin,opacity] plan:duration-200 plan:ease-linear plan:focus-visible:ring-2 plan:[&>svg]:size-4 plan:[&>svg]:shrink-0",
        "plan:group-data-[collapsible=icon]:-mt-8 plan:group-data-[collapsible=icon]:opacity-0",
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
        "plan:text-sidebar-foreground plan:ring-sidebar-ring plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground plan:absolute plan:top-3.5 plan:right-3 plan:flex plan:aspect-square plan:w-5 plan:items-center plan:justify-center plan:rounded-md plan:p-0 plan:outline-hidden plan:transition-transform plan:focus-visible:ring-2 plan:[&>svg]:size-4 plan:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "plan:after:absolute plan:after:-inset-2 plan:md:after:hidden",
        "plan:group-data-[collapsible=icon]:hidden",
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
      className={cn("plan:w-full plan:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("plan:flex plan:w-full plan:min-w-0 plan:flex-col plan:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("plan:group/menu-item plan:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "plan:peer/menu-button plan:flex plan:w-full plan:items-center plan:gap-2 plan:overflow-hidden plan:rounded-md plan:p-2 plan:text-left plan:text-sm plan:outline-hidden plan:ring-sidebar-ring plan:transition-[width,height,padding] plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground plan:focus-visible:ring-2 plan:active:bg-sidebar-accent plan:active:text-sidebar-accent-foreground plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:group-has-data-[sidebar=menu-action]/menu-item:pr-8 plan:aria-disabled:pointer-events-none plan:aria-disabled:opacity-50 plan:data-[active=true]:bg-sidebar-accent plan:data-[active=true]:font-medium plan:data-[active=true]:text-sidebar-accent-foreground plan:data-[state=open]:hover:bg-sidebar-accent plan:data-[state=open]:hover:text-sidebar-accent-foreground plan:group-data-[collapsible=icon]:size-8! plan:group-data-[collapsible=icon]:p-2! plan:[&>span:last-child]:truncate plan:[&>svg]:size-4 plan:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground",
        outline:
          "plan:bg-background plan:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground plan:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "plan:h-8 plan:text-sm",
        sm: "plan:h-7 plan:text-xs",
        lg: "plan:h-12 plan:text-sm plan:group-data-[collapsible=icon]:p-0!",
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
        "plan:text-sidebar-foreground plan:ring-sidebar-ring plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground plan:peer-hover/menu-button:text-sidebar-accent-foreground plan:absolute plan:top-1.5 plan:right-1 plan:flex plan:aspect-square plan:w-5 plan:items-center plan:justify-center plan:rounded-md plan:p-0 plan:outline-hidden plan:transition-transform plan:focus-visible:ring-2 plan:[&>svg]:size-4 plan:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "plan:after:absolute plan:after:-inset-2 plan:md:after:hidden",
        "plan:peer-data-[size=sm]/menu-button:top-1",
        "plan:peer-data-[size=default]/menu-button:top-1.5",
        "plan:peer-data-[size=lg]/menu-button:top-2.5",
        "plan:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "plan:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground plan:group-focus-within/menu-item:opacity-100 plan:group-hover/menu-item:opacity-100 plan:data-[state=open]:opacity-100 plan:md:opacity-0",
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
        "plan:text-sidebar-foreground plan:pointer-events-none plan:absolute plan:right-1 plan:flex plan:h-5 plan:min-w-5 plan:items-center plan:justify-center plan:rounded-md plan:px-1 plan:text-xs plan:font-medium plan:tabular-nums plan:select-none",
        "plan:peer-hover/menu-button:text-sidebar-accent-foreground plan:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "plan:peer-data-[size=sm]/menu-button:top-1",
        "plan:peer-data-[size=default]/menu-button:top-1.5",
        "plan:peer-data-[size=lg]/menu-button:top-2.5",
        "plan:group-data-[collapsible=icon]:hidden",
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
      className={cn("plan:flex plan:h-8 plan:items-center plan:gap-2 plan:rounded-md plan:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="plan:size-4 plan:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="plan:h-4 plan:max-w-(--skeleton-width) plan:flex-1"
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
        "plan:border-sidebar-border plan:mx-3.5 plan:flex plan:min-w-0 plan:translate-x-px plan:flex-col plan:gap-1 plan:border-l plan:px-2.5 plan:py-0.5",
        "plan:group-data-[collapsible=icon]:hidden",
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
      className={cn("plan:group/menu-sub-item plan:relative", className)}
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
        "plan:text-sidebar-foreground plan:ring-sidebar-ring plan:hover:bg-sidebar-accent plan:hover:text-sidebar-accent-foreground plan:active:bg-sidebar-accent plan:active:text-sidebar-accent-foreground plan:[&>svg]:text-sidebar-accent-foreground plan:flex plan:h-7 plan:min-w-0 plan:-translate-x-px plan:items-center plan:gap-2 plan:overflow-hidden plan:rounded-md plan:px-2 plan:outline-hidden plan:focus-visible:ring-2 plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:aria-disabled:pointer-events-none plan:aria-disabled:opacity-50 plan:[&>span:last-child]:truncate plan:[&>svg]:size-4 plan:[&>svg]:shrink-0",
        "plan:data-[active=true]:bg-sidebar-accent plan:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "plan:text-xs",
        size === "md" && "plan:text-sm",
        "plan:group-data-[collapsible=icon]:hidden",
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
