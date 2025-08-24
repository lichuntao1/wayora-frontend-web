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
            "shell:group/sidebar-wrapper shell:has-data-[variant=inset]:bg-sidebar shell:flex shell:min-h-svh shell:w-full",
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
          "shell:bg-sidebar shell:text-sidebar-foreground shell:flex shell:h-full shell:w-(--sidebar-width) shell:flex-col",
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
          className="shell:bg-sidebar shell:text-sidebar-foreground shell:w-(--sidebar-width) shell:p-0 shell:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="shell:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="shell:flex shell:h-full shell:w-full shell:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="shell:group shell:peer shell:text-sidebar-foreground shell:hidden shell:md:block"
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
          "shell:relative shell:w-(--sidebar-width) shell:bg-transparent shell:transition-[width] shell:duration-200 shell:ease-linear",
          "shell:group-data-[collapsible=offcanvas]:w-0",
          "shell:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "shell:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "shell:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "shell:fixed shell:inset-y-0 shell:z-10 shell:hidden shell:h-svh shell:w-(--sidebar-width) shell:transition-[left,right,width] shell:duration-200 shell:ease-linear shell:md:flex",
          side === "left"
            ? "shell:left-0 shell:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "shell:right-0 shell:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "shell:p-2 shell:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "shell:group-data-[collapsible=icon]:w-(--sidebar-width-icon) shell:group-data-[side=left]:border-r shell:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="shell:bg-sidebar shell:group-data-[variant=floating]:border-sidebar-border shell:flex shell:h-full shell:w-full shell:flex-col shell:group-data-[variant=floating]:rounded-lg shell:group-data-[variant=floating]:border shell:group-data-[variant=floating]:shadow-sm"
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
      className={cn("shell:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="shell:sr-only">Toggle Sidebar</span>
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
        "shell:hover:after:bg-sidebar-border shell:absolute shell:inset-y-0 shell:z-20 shell:hidden shell:w-4 shell:-translate-x-1/2 shell:transition-all shell:ease-linear shell:group-data-[side=left]:-right-4 shell:group-data-[side=right]:left-0 shell:after:absolute shell:after:inset-y-0 shell:after:left-1/2 shell:after:w-[2px] shell:sm:flex",
        "shell:in-data-[side=left]:cursor-w-resize shell:in-data-[side=right]:cursor-e-resize",
        "shell:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize shell:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "shell:hover:group-data-[collapsible=offcanvas]:bg-sidebar shell:group-data-[collapsible=offcanvas]:translate-x-0 shell:group-data-[collapsible=offcanvas]:after:left-full",
        "shell:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "shell:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
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
        "shell:bg-background shell:relative shell:flex shell:w-full shell:flex-1 shell:flex-col",
        "shell:md:peer-data-[variant=inset]:m-2 shell:md:peer-data-[variant=inset]:ml-0 shell:md:peer-data-[variant=inset]:rounded-xl shell:md:peer-data-[variant=inset]:shadow-sm shell:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
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
      className={cn("shell:bg-background shell:h-8 shell:w-full shell:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("shell:flex shell:flex-col shell:gap-2 shell:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("shell:flex shell:flex-col shell:gap-2 shell:p-2", className)}
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
      className={cn("shell:bg-sidebar-border shell:mx-2 shell:w-auto", className)}
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
        "shell:flex shell:min-h-0 shell:flex-1 shell:flex-col shell:gap-2 shell:overflow-auto shell:group-data-[collapsible=icon]:overflow-hidden",
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
      className={cn("shell:relative shell:flex shell:w-full shell:min-w-0 shell:flex-col shell:p-2", className)}
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
        "shell:text-sidebar-foreground/70 shell:ring-sidebar-ring shell:flex shell:h-8 shell:shrink-0 shell:items-center shell:rounded-md shell:px-2 shell:text-xs shell:font-medium shell:outline-hidden shell:transition-[margin,opacity] shell:duration-200 shell:ease-linear shell:focus-visible:ring-2 shell:[&>svg]:size-4 shell:[&>svg]:shrink-0",
        "shell:group-data-[collapsible=icon]:-mt-8 shell:group-data-[collapsible=icon]:opacity-0",
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
        "shell:text-sidebar-foreground shell:ring-sidebar-ring shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground shell:absolute shell:top-3.5 shell:right-3 shell:flex shell:aspect-square shell:w-5 shell:items-center shell:justify-center shell:rounded-md shell:p-0 shell:outline-hidden shell:transition-transform shell:focus-visible:ring-2 shell:[&>svg]:size-4 shell:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "shell:after:absolute shell:after:-inset-2 shell:md:after:hidden",
        "shell:group-data-[collapsible=icon]:hidden",
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
      className={cn("shell:w-full shell:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("shell:flex shell:w-full shell:min-w-0 shell:flex-col shell:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("shell:group/menu-item shell:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "shell:peer/menu-button shell:flex shell:w-full shell:items-center shell:gap-2 shell:overflow-hidden shell:rounded-md shell:p-2 shell:text-left shell:text-sm shell:outline-hidden shell:ring-sidebar-ring shell:transition-[width,height,padding] shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground shell:focus-visible:ring-2 shell:active:bg-sidebar-accent shell:active:text-sidebar-accent-foreground shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:group-has-data-[sidebar=menu-action]/menu-item:pr-8 shell:aria-disabled:pointer-events-none shell:aria-disabled:opacity-50 shell:data-[active=true]:bg-sidebar-accent shell:data-[active=true]:font-medium shell:data-[active=true]:text-sidebar-accent-foreground shell:data-[state=open]:hover:bg-sidebar-accent shell:data-[state=open]:hover:text-sidebar-accent-foreground shell:group-data-[collapsible=icon]:size-8! shell:group-data-[collapsible=icon]:p-2! shell:[&>span:last-child]:truncate shell:[&>svg]:size-4 shell:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground",
        outline:
          "shell:bg-background shell:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground shell:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "shell:h-8 shell:text-sm",
        sm: "shell:h-7 shell:text-xs",
        lg: "shell:h-12 shell:text-sm shell:group-data-[collapsible=icon]:p-0!",
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
        "shell:text-sidebar-foreground shell:ring-sidebar-ring shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground shell:peer-hover/menu-button:text-sidebar-accent-foreground shell:absolute shell:top-1.5 shell:right-1 shell:flex shell:aspect-square shell:w-5 shell:items-center shell:justify-center shell:rounded-md shell:p-0 shell:outline-hidden shell:transition-transform shell:focus-visible:ring-2 shell:[&>svg]:size-4 shell:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "shell:after:absolute shell:after:-inset-2 shell:md:after:hidden",
        "shell:peer-data-[size=sm]/menu-button:top-1",
        "shell:peer-data-[size=default]/menu-button:top-1.5",
        "shell:peer-data-[size=lg]/menu-button:top-2.5",
        "shell:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "shell:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground shell:group-focus-within/menu-item:opacity-100 shell:group-hover/menu-item:opacity-100 shell:data-[state=open]:opacity-100 shell:md:opacity-0",
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
        "shell:text-sidebar-foreground shell:pointer-events-none shell:absolute shell:right-1 shell:flex shell:h-5 shell:min-w-5 shell:items-center shell:justify-center shell:rounded-md shell:px-1 shell:text-xs shell:font-medium shell:tabular-nums shell:select-none",
        "shell:peer-hover/menu-button:text-sidebar-accent-foreground shell:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "shell:peer-data-[size=sm]/menu-button:top-1",
        "shell:peer-data-[size=default]/menu-button:top-1.5",
        "shell:peer-data-[size=lg]/menu-button:top-2.5",
        "shell:group-data-[collapsible=icon]:hidden",
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
      className={cn("shell:flex shell:h-8 shell:items-center shell:gap-2 shell:rounded-md shell:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="shell:size-4 shell:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="shell:h-4 shell:max-w-(--skeleton-width) shell:flex-1"
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
        "shell:border-sidebar-border shell:mx-3.5 shell:flex shell:min-w-0 shell:translate-x-px shell:flex-col shell:gap-1 shell:border-l shell:px-2.5 shell:py-0.5",
        "shell:group-data-[collapsible=icon]:hidden",
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
      className={cn("shell:group/menu-sub-item shell:relative", className)}
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
        "shell:text-sidebar-foreground shell:ring-sidebar-ring shell:hover:bg-sidebar-accent shell:hover:text-sidebar-accent-foreground shell:active:bg-sidebar-accent shell:active:text-sidebar-accent-foreground shell:[&>svg]:text-sidebar-accent-foreground shell:flex shell:h-7 shell:min-w-0 shell:-translate-x-px shell:items-center shell:gap-2 shell:overflow-hidden shell:rounded-md shell:px-2 shell:outline-hidden shell:focus-visible:ring-2 shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:aria-disabled:pointer-events-none shell:aria-disabled:opacity-50 shell:[&>span:last-child]:truncate shell:[&>svg]:size-4 shell:[&>svg]:shrink-0",
        "shell:data-[active=true]:bg-sidebar-accent shell:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "shell:text-xs",
        size === "md" && "shell:text-sm",
        "shell:group-data-[collapsible=icon]:hidden",
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
