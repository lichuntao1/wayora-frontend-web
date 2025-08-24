import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "UI:relative UI:w-full UI:rounded-lg UI:border UI:px-4 UI:py-3 UI:text-sm UI:grid UI:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] UI:grid-cols-[0_1fr] UI:has-[>svg]:gap-x-3 UI:gap-y-0.5 UI:items-start UI:[&>svg]:size-4 UI:[&>svg]:translate-y-0.5 UI:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "UI:bg-card UI:text-card-foreground",
        destructive:
          "UI:text-destructive UI:bg-card UI:[&>svg]:text-current UI:*:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "UI:col-start-2 UI:line-clamp-1 UI:min-h-4 UI:font-medium UI:tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "UI:text-muted-foreground UI:col-start-2 UI:grid UI:justify-items-start UI:gap-1 UI:text-sm UI:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
