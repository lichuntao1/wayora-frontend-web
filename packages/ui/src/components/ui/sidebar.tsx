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
            "UI:group/sidebar-wrapper UI:has-data-[variant=inset]:bg-sidebar UI:flex UI:min-h-svh UI:w-full",
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
          "UI:bg-sidebar UI:text-sidebar-foreground UI:flex UI:h-full UI:w-(--sidebar-width) UI:flex-col",
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
          className="UI:bg-sidebar UI:text-sidebar-foreground UI:w-(--sidebar-width) UI:p-0 UI:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="UI:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="UI:flex UI:h-full UI:w-full UI:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="UI:group UI:peer UI:text-sidebar-foreground UI:hidden UI:md:block"
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
          "UI:relative UI:w-(--sidebar-width) UI:bg-transparent UI:transition-[width] UI:duration-200 UI:ease-linear",
          "UI:group-data-[collapsible=offcanvas]:w-0",
          "UI:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "UI:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "UI:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "UI:fixed UI:inset-y-0 UI:z-10 UI:hidden UI:h-svh UI:w-(--sidebar-width) UI:transition-[left,right,width] UI:duration-200 UI:ease-linear UI:md:flex",
          side === "left"
            ? "UI:left-0 UI:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "UI:right-0 UI:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "UI:p-2 UI:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "UI:group-data-[collapsible=icon]:w-(--sidebar-width-icon) UI:group-data-[side=left]:border-r UI:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="UI:bg-sidebar UI:group-data-[variant=floating]:border-sidebar-border UI:flex UI:h-full UI:w-full UI:flex-col UI:group-data-[variant=floating]:rounded-lg UI:group-data-[variant=floating]:border UI:group-data-[variant=floating]:shadow-sm"
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
      className={cn("UI:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="UI:sr-only">Toggle Sidebar</span>
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
        "UI:hover:after:bg-sidebar-border UI:absolute UI:inset-y-0 UI:z-20 UI:hidden UI:w-4 UI:-translate-x-1/2 UI:transition-all UI:ease-linear UI:group-data-[side=left]:-right-4 UI:group-data-[side=right]:left-0 UI:after:absolute UI:after:inset-y-0 UI:after:left-1/2 UI:after:w-[2px] UI:sm:flex",
        "UI:in-data-[side=left]:cursor-w-resize UI:in-data-[side=right]:cursor-e-resize",
        "UI:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize UI:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "UI:hover:group-data-[collapsible=offcanvas]:bg-sidebar UI:group-data-[collapsible=offcanvas]:translate-x-0 UI:group-data-[collapsible=offcanvas]:after:left-full",
        "UI:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "UI:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
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
        "UI:bg-background UI:relative UI:flex UI:w-full UI:flex-1 UI:flex-col",
        "UI:md:peer-data-[variant=inset]:m-2 UI:md:peer-data-[variant=inset]:ml-0 UI:md:peer-data-[variant=inset]:rounded-xl UI:md:peer-data-[variant=inset]:shadow-sm UI:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
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
      className={cn("UI:bg-background UI:h-8 UI:w-full UI:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("UI:flex UI:flex-col UI:gap-2 UI:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("UI:flex UI:flex-col UI:gap-2 UI:p-2", className)}
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
      className={cn("UI:bg-sidebar-border UI:mx-2 UI:w-auto", className)}
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
        "UI:flex UI:min-h-0 UI:flex-1 UI:flex-col UI:gap-2 UI:overflow-auto UI:group-data-[collapsible=icon]:overflow-hidden",
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
      className={cn("UI:relative UI:flex UI:w-full UI:min-w-0 UI:flex-col UI:p-2", className)}
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
        "UI:text-sidebar-foreground/70 UI:ring-sidebar-ring UI:flex UI:h-8 UI:shrink-0 UI:items-center UI:rounded-md UI:px-2 UI:text-xs UI:font-medium UI:outline-hidden UI:transition-[margin,opacity] UI:duration-200 UI:ease-linear UI:focus-visible:ring-2 UI:[&>svg]:size-4 UI:[&>svg]:shrink-0",
        "UI:group-data-[collapsible=icon]:-mt-8 UI:group-data-[collapsible=icon]:opacity-0",
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
        "UI:text-sidebar-foreground UI:ring-sidebar-ring UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground UI:absolute UI:top-3.5 UI:right-3 UI:flex UI:aspect-square UI:w-5 UI:items-center UI:justify-center UI:rounded-md UI:p-0 UI:outline-hidden UI:transition-transform UI:focus-visible:ring-2 UI:[&>svg]:size-4 UI:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "UI:after:absolute UI:after:-inset-2 UI:md:after:hidden",
        "UI:group-data-[collapsible=icon]:hidden",
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
      className={cn("UI:w-full UI:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("UI:flex UI:w-full UI:min-w-0 UI:flex-col UI:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("UI:group/menu-item UI:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "UI:peer/menu-button UI:flex UI:w-full UI:items-center UI:gap-2 UI:overflow-hidden UI:rounded-md UI:p-2 UI:text-left UI:text-sm UI:outline-hidden UI:ring-sidebar-ring UI:transition-[width,height,padding] UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground UI:focus-visible:ring-2 UI:active:bg-sidebar-accent UI:active:text-sidebar-accent-foreground UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:group-has-data-[sidebar=menu-action]/menu-item:pr-8 UI:aria-disabled:pointer-events-none UI:aria-disabled:opacity-50 UI:data-[active=true]:bg-sidebar-accent UI:data-[active=true]:font-medium UI:data-[active=true]:text-sidebar-accent-foreground UI:data-[state=open]:hover:bg-sidebar-accent UI:data-[state=open]:hover:text-sidebar-accent-foreground UI:group-data-[collapsible=icon]:size-8! UI:group-data-[collapsible=icon]:p-2! UI:[&>span:last-child]:truncate UI:[&>svg]:size-4 UI:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground",
        outline:
          "UI:bg-background UI:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground UI:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "UI:h-8 UI:text-sm",
        sm: "UI:h-7 UI:text-xs",
        lg: "UI:h-12 UI:text-sm UI:group-data-[collapsible=icon]:p-0!",
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
        "UI:text-sidebar-foreground UI:ring-sidebar-ring UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground UI:peer-hover/menu-button:text-sidebar-accent-foreground UI:absolute UI:top-1.5 UI:right-1 UI:flex UI:aspect-square UI:w-5 UI:items-center UI:justify-center UI:rounded-md UI:p-0 UI:outline-hidden UI:transition-transform UI:focus-visible:ring-2 UI:[&>svg]:size-4 UI:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "UI:after:absolute UI:after:-inset-2 UI:md:after:hidden",
        "UI:peer-data-[size=sm]/menu-button:top-1",
        "UI:peer-data-[size=default]/menu-button:top-1.5",
        "UI:peer-data-[size=lg]/menu-button:top-2.5",
        "UI:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "UI:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground UI:group-focus-within/menu-item:opacity-100 UI:group-hover/menu-item:opacity-100 UI:data-[state=open]:opacity-100 UI:md:opacity-0",
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
        "UI:text-sidebar-foreground UI:pointer-events-none UI:absolute UI:right-1 UI:flex UI:h-5 UI:min-w-5 UI:items-center UI:justify-center UI:rounded-md UI:px-1 UI:text-xs UI:font-medium UI:tabular-nums UI:select-none",
        "UI:peer-hover/menu-button:text-sidebar-accent-foreground UI:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "UI:peer-data-[size=sm]/menu-button:top-1",
        "UI:peer-data-[size=default]/menu-button:top-1.5",
        "UI:peer-data-[size=lg]/menu-button:top-2.5",
        "UI:group-data-[collapsible=icon]:hidden",
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
      className={cn("UI:flex UI:h-8 UI:items-center UI:gap-2 UI:rounded-md UI:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="UI:size-4 UI:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="UI:h-4 UI:max-w-(--skeleton-width) UI:flex-1"
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
        "UI:border-sidebar-border UI:mx-3.5 UI:flex UI:min-w-0 UI:translate-x-px UI:flex-col UI:gap-1 UI:border-l UI:px-2.5 UI:py-0.5",
        "UI:group-data-[collapsible=icon]:hidden",
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
      className={cn("UI:group/menu-sub-item UI:relative", className)}
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
        "UI:text-sidebar-foreground UI:ring-sidebar-ring UI:hover:bg-sidebar-accent UI:hover:text-sidebar-accent-foreground UI:active:bg-sidebar-accent UI:active:text-sidebar-accent-foreground UI:[&>svg]:text-sidebar-accent-foreground UI:flex UI:h-7 UI:min-w-0 UI:-translate-x-px UI:items-center UI:gap-2 UI:overflow-hidden UI:rounded-md UI:px-2 UI:outline-hidden UI:focus-visible:ring-2 UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:aria-disabled:pointer-events-none UI:aria-disabled:opacity-50 UI:[&>span:last-child]:truncate UI:[&>svg]:size-4 UI:[&>svg]:shrink-0",
        "UI:data-[active=true]:bg-sidebar-accent UI:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "UI:text-xs",
        size === "md" && "UI:text-sm",
        "UI:group-data-[collapsible=icon]:hidden",
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
