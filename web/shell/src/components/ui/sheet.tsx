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
        "shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:fixed shell:inset-0 shell:z-50 shell:bg-black/50",
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
          "shell:bg-background shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:fixed shell:z-50 shell:flex shell:flex-col shell:gap-4 shell:shadow-lg shell:transition shell:ease-in-out shell:data-[state=closed]:duration-300 shell:data-[state=open]:duration-500",
          side === "right" &&
            "shell:data-[state=closed]:slide-out-to-right shell:data-[state=open]:slide-in-from-right shell:inset-y-0 shell:right-0 shell:h-full shell:w-3/4 shell:border-l shell:sm:max-w-sm",
          side === "left" &&
            "shell:data-[state=closed]:slide-out-to-left shell:data-[state=open]:slide-in-from-left shell:inset-y-0 shell:left-0 shell:h-full shell:w-3/4 shell:border-r shell:sm:max-w-sm",
          side === "top" &&
            "shell:data-[state=closed]:slide-out-to-top shell:data-[state=open]:slide-in-from-top shell:inset-x-0 shell:top-0 shell:h-auto shell:border-b",
          side === "bottom" &&
            "shell:data-[state=closed]:slide-out-to-bottom shell:data-[state=open]:slide-in-from-bottom shell:inset-x-0 shell:bottom-0 shell:h-auto shell:border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="shell:ring-offset-background shell:focus:ring-ring shell:data-[state=open]:bg-secondary shell:absolute shell:top-4 shell:right-4 shell:rounded-xs shell:opacity-70 shell:transition-opacity shell:hover:opacity-100 shell:focus:ring-2 shell:focus:ring-offset-2 shell:focus:outline-hidden shell:disabled:pointer-events-none">
          <XIcon className="shell:size-4" />
          <span className="shell:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("shell:flex shell:flex-col shell:gap-1.5 shell:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("shell:mt-auto shell:flex shell:flex-col shell:gap-2 shell:p-4", className)}
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
      className={cn("shell:text-foreground shell:font-semibold", className)}
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
      className={cn("shell:text-muted-foreground shell:text-sm", className)}
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
