import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "shell:relative shell:w-full shell:rounded-lg shell:border shell:px-4 shell:py-3 shell:text-sm shell:grid shell:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] shell:grid-cols-[0_1fr] shell:has-[>svg]:gap-x-3 shell:gap-y-0.5 shell:items-start shell:[&>svg]:size-4 shell:[&>svg]:translate-y-0.5 shell:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "shell:bg-card shell:text-card-foreground",
        destructive:
          "shell:text-destructive shell:bg-card shell:[&>svg]:text-current shell:*:data-[slot=alert-description]:text-destructive/90",
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
        "shell:col-start-2 shell:line-clamp-1 shell:min-h-4 shell:font-medium shell:tracking-tight",
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
        "shell:text-muted-foreground shell:col-start-2 shell:grid shell:justify-items-start shell:gap-1 shell:text-sm shell:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
