import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "plan:inline-flex plan:items-center plan:justify-center plan:rounded-md plan:border plan:px-2 plan:py-0.5 plan:text-xs plan:font-medium plan:w-fit plan:whitespace-nowrap plan:shrink-0 plan:[&>svg]:size-3 plan:gap-1 plan:[&>svg]:pointer-events-none plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:focus-visible:ring-[3px] plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:transition-[color,box-shadow] plan:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "plan:border-transparent plan:bg-primary plan:text-primary-foreground plan:[a&]:hover:bg-primary/90",
        secondary:
          "plan:border-transparent plan:bg-secondary plan:text-secondary-foreground plan:[a&]:hover:bg-secondary/90",
        destructive:
          "plan:border-transparent plan:bg-destructive plan:text-white plan:[a&]:hover:bg-destructive/90 plan:focus-visible:ring-destructive/20 plan:dark:focus-visible:ring-destructive/40 plan:dark:bg-destructive/60",
        outline:
          "plan:text-foreground plan:[a&]:hover:bg-accent plan:[a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
