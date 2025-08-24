import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "shell:inline-flex shell:items-center shell:justify-center shell:gap-2 shell:whitespace-nowrap shell:rounded-md shell:text-sm shell:font-medium shell:transition-all shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg:not([class*=size-])]:size-4 shell:shrink-0 shell:[&_svg]:shrink-0 shell:outline-none shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:focus-visible:ring-[3px] shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "shell:bg-primary shell:text-primary-foreground shell:shadow-xs shell:hover:bg-primary/90",
        destructive:
          "shell:bg-destructive shell:text-white shell:shadow-xs shell:hover:bg-destructive/90 shell:focus-visible:ring-destructive/20 shell:dark:focus-visible:ring-destructive/40 shell:dark:bg-destructive/60",
        outline:
          "shell:border shell:bg-background shell:shadow-xs shell:hover:bg-accent shell:hover:text-accent-foreground shell:dark:bg-input/30 shell:dark:border-input shell:dark:hover:bg-input/50",
        secondary:
          "shell:bg-secondary shell:text-secondary-foreground shell:shadow-xs shell:hover:bg-secondary/80",
        ghost:
          "shell:hover:bg-accent shell:hover:text-accent-foreground shell:dark:hover:bg-accent/50",
        link: "shell:text-primary shell:underline-offset-4 shell:hover:underline",
      },
      size: {
        default: "shell:h-9 shell:px-4 shell:py-2 shell:has-[>svg]:px-3",
        sm: "shell:h-8 shell:rounded-md shell:gap-1.5 shell:px-3 shell:has-[>svg]:px-2.5",
        lg: "shell:h-10 shell:rounded-md shell:px-6 shell:has-[>svg]:px-4",
        icon: "shell:size-9",
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
