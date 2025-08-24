import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:fixed plan:inset-0 plan:z-50 plan:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "plan:bg-background plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:fixed plan:z-50 plan:flex plan:flex-col plan:gap-4 plan:shadow-lg plan:transition plan:ease-in-out plan:data-[state=closed]:duration-300 plan:data-[state=open]:duration-500",
          side === "right" &&
            "plan:data-[state=closed]:slide-out-to-right plan:data-[state=open]:slide-in-from-right plan:inset-y-0 plan:right-0 plan:h-full plan:w-3/4 plan:border-l plan:sm:max-w-sm",
          side === "left" &&
            "plan:data-[state=closed]:slide-out-to-left plan:data-[state=open]:slide-in-from-left plan:inset-y-0 plan:left-0 plan:h-full plan:w-3/4 plan:border-r plan:sm:max-w-sm",
          side === "top" &&
            "plan:data-[state=closed]:slide-out-to-top plan:data-[state=open]:slide-in-from-top plan:inset-x-0 plan:top-0 plan:h-auto plan:border-b",
          side === "bottom" &&
            "plan:data-[state=closed]:slide-out-to-bottom plan:data-[state=open]:slide-in-from-bottom plan:inset-x-0 plan:bottom-0 plan:h-auto plan:border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="plan:ring-offset-background plan:focus:ring-ring plan:data-[state=open]:bg-secondary plan:absolute plan:top-4 plan:right-4 plan:rounded-xs plan:opacity-70 plan:transition-opacity plan:hover:opacity-100 plan:focus:ring-2 plan:focus:ring-offset-2 plan:focus:outline-hidden plan:disabled:pointer-events-none">
          <XIcon className="plan:size-4" />
          <span className="plan:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("plan:flex plan:flex-col plan:gap-1.5 plan:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("plan:mt-auto plan:flex plan:flex-col plan:gap-2 plan:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("plan:text-foreground plan:font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("plan:text-muted-foreground plan:text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
