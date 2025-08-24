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
        "UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:fixed UI:inset-0 UI:z-50 UI:bg-black/50",
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
          "UI:bg-background UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:fixed UI:z-50 UI:flex UI:flex-col UI:gap-4 UI:shadow-lg UI:transition UI:ease-in-out UI:data-[state=closed]:duration-300 UI:data-[state=open]:duration-500",
          side === "right" &&
            "UI:data-[state=closed]:slide-out-to-right UI:data-[state=open]:slide-in-from-right UI:inset-y-0 UI:right-0 UI:h-full UI:w-3/4 UI:border-l UI:sm:max-w-sm",
          side === "left" &&
            "UI:data-[state=closed]:slide-out-to-left UI:data-[state=open]:slide-in-from-left UI:inset-y-0 UI:left-0 UI:h-full UI:w-3/4 UI:border-r UI:sm:max-w-sm",
          side === "top" &&
            "UI:data-[state=closed]:slide-out-to-top UI:data-[state=open]:slide-in-from-top UI:inset-x-0 UI:top-0 UI:h-auto UI:border-b",
          side === "bottom" &&
            "UI:data-[state=closed]:slide-out-to-bottom UI:data-[state=open]:slide-in-from-bottom UI:inset-x-0 UI:bottom-0 UI:h-auto UI:border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="UI:ring-offset-background UI:focus:ring-ring UI:data-[state=open]:bg-secondary UI:absolute UI:top-4 UI:right-4 UI:rounded-xs UI:opacity-70 UI:transition-opacity UI:hover:opacity-100 UI:focus:ring-2 UI:focus:ring-offset-2 UI:focus:outline-hidden UI:disabled:pointer-events-none">
          <XIcon className="UI:size-4" />
          <span className="UI:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("UI:flex UI:flex-col UI:gap-1.5 UI:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("UI:mt-auto UI:flex UI:flex-col UI:gap-2 UI:p-4", className)}
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
      className={cn("UI:text-foreground UI:font-semibold", className)}
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
      className={cn("UI:text-muted-foreground UI:text-sm", className)}
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
