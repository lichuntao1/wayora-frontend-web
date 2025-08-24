import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "plan:relative plan:w-full plan:rounded-lg plan:border plan:px-4 plan:py-3 plan:text-sm plan:grid plan:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] plan:grid-cols-[0_1fr] plan:has-[>svg]:gap-x-3 plan:gap-y-0.5 plan:items-start plan:[&>svg]:size-4 plan:[&>svg]:translate-y-0.5 plan:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "plan:bg-card plan:text-card-foreground",
        destructive:
          "plan:text-destructive plan:bg-card plan:[&>svg]:text-current plan:*:data-[slot=alert-description]:text-destructive/90",
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
        "plan:col-start-2 plan:line-clamp-1 plan:min-h-4 plan:font-medium plan:tracking-tight",
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
        "plan:text-muted-foreground plan:col-start-2 plan:grid plan:justify-items-start plan:gap-1 plan:text-sm plan:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
