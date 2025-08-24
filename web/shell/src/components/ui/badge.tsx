import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "shell:inline-flex shell:items-center shell:justify-center shell:rounded-md shell:border shell:px-2 shell:py-0.5 shell:text-xs shell:font-medium shell:w-fit shell:whitespace-nowrap shell:shrink-0 shell:[&>svg]:size-3 shell:gap-1 shell:[&>svg]:pointer-events-none shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:focus-visible:ring-[3px] shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:transition-[color,box-shadow] shell:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "shell:border-transparent shell:bg-primary shell:text-primary-foreground shell:[a&]:hover:bg-primary/90",
        secondary:
          "shell:border-transparent shell:bg-secondary shell:text-secondary-foreground shell:[a&]:hover:bg-secondary/90",
        destructive:
          "shell:border-transparent shell:bg-destructive shell:text-white shell:[a&]:hover:bg-destructive/90 shell:focus-visible:ring-destructive/20 shell:dark:focus-visible:ring-destructive/40 shell:dark:bg-destructive/60",
        outline:
          "shell:text-foreground shell:[a&]:hover:bg-accent shell:[a&]:hover:text-accent-foreground",
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
