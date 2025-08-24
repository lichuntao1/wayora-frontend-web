import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "hotel:inline-flex hotel:items-center hotel:justify-center hotel:rounded-md hotel:border hotel:px-2 hotel:py-0.5 hotel:text-xs hotel:font-medium hotel:w-fit hotel:whitespace-nowrap hotel:shrink-0 hotel:[&>svg]:size-3 hotel:gap-1 hotel:[&>svg]:pointer-events-none hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:focus-visible:ring-[3px] hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:transition-[color,box-shadow] hotel:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "hotel:border-transparent hotel:bg-primary hotel:text-primary-foreground hotel:[a&]:hover:bg-primary/90",
        secondary:
          "hotel:border-transparent hotel:bg-secondary hotel:text-secondary-foreground hotel:[a&]:hover:bg-secondary/90",
        destructive:
          "hotel:border-transparent hotel:bg-destructive hotel:text-white hotel:[a&]:hover:bg-destructive/90 hotel:focus-visible:ring-destructive/20 hotel:dark:focus-visible:ring-destructive/40 hotel:dark:bg-destructive/60",
        outline:
          "hotel:text-foreground hotel:[a&]:hover:bg-accent hotel:[a&]:hover:text-accent-foreground",
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
