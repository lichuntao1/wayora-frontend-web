import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "hotel:relative hotel:w-full hotel:rounded-lg hotel:border hotel:px-4 hotel:py-3 hotel:text-sm hotel:grid hotel:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] hotel:grid-cols-[0_1fr] hotel:has-[>svg]:gap-x-3 hotel:gap-y-0.5 hotel:items-start hotel:[&>svg]:size-4 hotel:[&>svg]:translate-y-0.5 hotel:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "hotel:bg-card hotel:text-card-foreground",
        destructive:
          "hotel:text-destructive hotel:bg-card hotel:[&>svg]:text-current hotel:*:data-[slot=alert-description]:text-destructive/90",
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
        "hotel:col-start-2 hotel:line-clamp-1 hotel:min-h-4 hotel:font-medium hotel:tracking-tight",
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
        "hotel:text-muted-foreground hotel:col-start-2 hotel:grid hotel:justify-items-start hotel:gap-1 hotel:text-sm hotel:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
