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
        "hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:fixed hotel:inset-0 hotel:z-50 hotel:bg-black/50",
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
          "hotel:bg-background hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:fixed hotel:z-50 hotel:flex hotel:flex-col hotel:gap-4 hotel:shadow-lg hotel:transition hotel:ease-in-out hotel:data-[state=closed]:duration-300 hotel:data-[state=open]:duration-500",
          side === "right" &&
            "hotel:data-[state=closed]:slide-out-to-right hotel:data-[state=open]:slide-in-from-right hotel:inset-y-0 hotel:right-0 hotel:h-full hotel:w-3/4 hotel:border-l hotel:sm:max-w-sm",
          side === "left" &&
            "hotel:data-[state=closed]:slide-out-to-left hotel:data-[state=open]:slide-in-from-left hotel:inset-y-0 hotel:left-0 hotel:h-full hotel:w-3/4 hotel:border-r hotel:sm:max-w-sm",
          side === "top" &&
            "hotel:data-[state=closed]:slide-out-to-top hotel:data-[state=open]:slide-in-from-top hotel:inset-x-0 hotel:top-0 hotel:h-auto hotel:border-b",
          side === "bottom" &&
            "hotel:data-[state=closed]:slide-out-to-bottom hotel:data-[state=open]:slide-in-from-bottom hotel:inset-x-0 hotel:bottom-0 hotel:h-auto hotel:border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="hotel:ring-offset-background hotel:focus:ring-ring hotel:data-[state=open]:bg-secondary hotel:absolute hotel:top-4 hotel:right-4 hotel:rounded-xs hotel:opacity-70 hotel:transition-opacity hotel:hover:opacity-100 hotel:focus:ring-2 hotel:focus:ring-offset-2 hotel:focus:outline-hidden hotel:disabled:pointer-events-none">
          <XIcon className="hotel:size-4" />
          <span className="hotel:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("hotel:flex hotel:flex-col hotel:gap-1.5 hotel:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("hotel:mt-auto hotel:flex hotel:flex-col hotel:gap-2 hotel:p-4", className)}
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
      className={cn("hotel:text-foreground hotel:font-semibold", className)}
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
      className={cn("hotel:text-muted-foreground hotel:text-sm", className)}
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
