import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "plan:inline-flex plan:items-center plan:justify-center plan:gap-2 plan:whitespace-nowrap plan:rounded-md plan:text-sm plan:font-medium plan:transition-all plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg:not([class*=size-])]:size-4 plan:shrink-0 plan:[&_svg]:shrink-0 plan:outline-none plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:focus-visible:ring-[3px] plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "plan:bg-primary plan:text-primary-foreground plan:shadow-xs plan:hover:bg-primary/90",
        destructive:
          "plan:bg-destructive plan:text-white plan:shadow-xs plan:hover:bg-destructive/90 plan:focus-visible:ring-destructive/20 plan:dark:focus-visible:ring-destructive/40 plan:dark:bg-destructive/60",
        outline:
          "plan:border plan:bg-background plan:shadow-xs plan:hover:bg-accent plan:hover:text-accent-foreground plan:dark:bg-input/30 plan:dark:border-input plan:dark:hover:bg-input/50",
        secondary:
          "plan:bg-secondary plan:text-secondary-foreground plan:shadow-xs plan:hover:bg-secondary/80",
        ghost:
          "plan:hover:bg-accent plan:hover:text-accent-foreground plan:dark:hover:bg-accent/50",
        link: "plan:text-primary plan:underline-offset-4 plan:hover:underline",
      },
      size: {
        default: "plan:h-9 plan:px-4 plan:py-2 plan:has-[>svg]:px-3",
        sm: "plan:h-8 plan:rounded-md plan:gap-1.5 plan:px-3 plan:has-[>svg]:px-2.5",
        lg: "plan:h-10 plan:rounded-md plan:px-6 plan:has-[>svg]:px-4",
        icon: "plan:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
