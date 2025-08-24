import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:fixed hotel:inset-0 hotel:z-50 hotel:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "hotel:bg-background hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:fixed hotel:top-[50%] hotel:left-[50%] hotel:z-50 hotel:grid hotel:w-full hotel:max-w-[calc(100%-2rem)] hotel:translate-x-[-50%] hotel:translate-y-[-50%] hotel:gap-4 hotel:rounded-lg hotel:border hotel:p-6 hotel:shadow-lg hotel:duration-200 hotel:sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="hotel:ring-offset-background hotel:focus:ring-ring hotel:data-[state=open]:bg-accent hotel:data-[state=open]:text-muted-foreground hotel:absolute hotel:top-4 hotel:right-4 hotel:rounded-xs hotel:opacity-70 hotel:transition-opacity hotel:hover:opacity-100 hotel:focus:ring-2 hotel:focus:ring-offset-2 hotel:focus:outline-hidden hotel:disabled:pointer-events-none hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4"
          >
            <XIcon />
            <span className="hotel:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("hotel:flex hotel:flex-col hotel:gap-2 hotel:text-center hotel:sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "hotel:flex hotel:flex-col-reverse hotel:gap-2 hotel:sm:flex-row hotel:sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("hotel:text-lg hotel:leading-none hotel:font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("hotel:text-muted-foreground hotel:text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
