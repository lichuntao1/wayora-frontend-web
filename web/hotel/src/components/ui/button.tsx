import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "hotel:inline-flex hotel:items-center hotel:justify-center hotel:gap-2 hotel:whitespace-nowrap hotel:rounded-md hotel:text-sm hotel:font-medium hotel:transition-all hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg:not([class*=size-])]:size-4 hotel:shrink-0 hotel:[&_svg]:shrink-0 hotel:outline-none hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:focus-visible:ring-[3px] hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "hotel:bg-primary hotel:text-primary-foreground hotel:shadow-xs hotel:hover:bg-primary/90",
        destructive:
          "hotel:bg-destructive hotel:text-white hotel:shadow-xs hotel:hover:bg-destructive/90 hotel:focus-visible:ring-destructive/20 hotel:dark:focus-visible:ring-destructive/40 hotel:dark:bg-destructive/60",
        outline:
          "hotel:border hotel:bg-background hotel:shadow-xs hotel:hover:bg-accent hotel:hover:text-accent-foreground hotel:dark:bg-input/30 hotel:dark:border-input hotel:dark:hover:bg-input/50",
        secondary:
          "hotel:bg-secondary hotel:text-secondary-foreground hotel:shadow-xs hotel:hover:bg-secondary/80",
        ghost:
          "hotel:hover:bg-accent hotel:hover:text-accent-foreground hotel:dark:hover:bg-accent/50",
        link: "hotel:text-primary hotel:underline-offset-4 hotel:hover:underline",
      },
      size: {
        default: "hotel:h-9 hotel:px-4 hotel:py-2 hotel:has-[>svg]:px-3",
        sm: "hotel:h-8 hotel:rounded-md hotel:gap-1.5 hotel:px-3 hotel:has-[>svg]:px-2.5",
        lg: "hotel:h-10 hotel:rounded-md hotel:px-6 hotel:has-[>svg]:px-4",
        icon: "hotel:size-9",
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
