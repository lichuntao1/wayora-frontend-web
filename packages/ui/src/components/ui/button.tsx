import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "UI:inline-flex UI:items-center UI:justify-center UI:gap-2 UI:whitespace-nowrap UI:rounded-md UI:text-sm UI:font-medium UI:transition-all UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg:not([class*=size-])]:size-4 UI:shrink-0 UI:[&_svg]:shrink-0 UI:outline-none UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:focus-visible:ring-[3px] UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "UI:bg-primary UI:text-primary-foreground UI:shadow-xs UI:hover:bg-primary/90",
        destructive:
          "UI:bg-destructive UI:text-white UI:shadow-xs UI:hover:bg-destructive/90 UI:focus-visible:ring-destructive/20 UI:dark:focus-visible:ring-destructive/40 UI:dark:bg-destructive/60",
        outline:
          "UI:border UI:bg-background UI:shadow-xs UI:hover:bg-accent UI:hover:text-accent-foreground UI:dark:bg-input/30 UI:dark:border-input UI:dark:hover:bg-input/50",
        secondary:
          "UI:bg-secondary UI:text-secondary-foreground UI:shadow-xs UI:hover:bg-secondary/80",
        ghost:
          "UI:hover:bg-accent UI:hover:text-accent-foreground UI:dark:hover:bg-accent/50",
        link: "UI:text-primary UI:underline-offset-4 UI:hover:underline",
      },
      size: {
        default: "UI:h-9 UI:px-4 UI:py-2 UI:has-[>svg]:px-3",
        sm: "UI:h-8 UI:rounded-md UI:gap-1.5 UI:px-3 UI:has-[>svg]:px-2.5",
        lg: "UI:h-10 UI:rounded-md UI:px-6 UI:has-[>svg]:px-4",
        icon: "UI:size-9",
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
