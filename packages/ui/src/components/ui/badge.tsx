import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "UI:inline-flex UI:items-center UI:justify-center UI:rounded-md UI:border UI:px-2 UI:py-0.5 UI:text-xs UI:font-medium UI:w-fit UI:whitespace-nowrap UI:shrink-0 UI:[&>svg]:size-3 UI:gap-1 UI:[&>svg]:pointer-events-none UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:focus-visible:ring-[3px] UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:transition-[color,box-shadow] UI:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "UI:border-transparent UI:bg-primary UI:text-primary-foreground UI:[a&]:hover:bg-primary/90",
        secondary:
          "UI:border-transparent UI:bg-secondary UI:text-secondary-foreground UI:[a&]:hover:bg-secondary/90",
        destructive:
          "UI:border-transparent UI:bg-destructive UI:text-white UI:[a&]:hover:bg-destructive/90 UI:focus-visible:ring-destructive/20 UI:dark:focus-visible:ring-destructive/40 UI:dark:bg-destructive/60",
        outline:
          "UI:text-foreground UI:[a&]:hover:bg-accent UI:[a&]:hover:text-accent-foreground",
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
