import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "shell:inline-flex shell:items-center shell:justify-center shell:gap-2 shell:rounded-md shell:text-sm shell:font-medium shell:hover:bg-muted shell:hover:text-muted-foreground shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:data-[state=on]:bg-accent shell:data-[state=on]:text-accent-foreground shell:[&_svg]:pointer-events-none shell:[&_svg:not([class*=size-])]:size-4 shell:[&_svg]:shrink-0 shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:focus-visible:ring-[3px] shell:outline-none shell:transition-[color,box-shadow] shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "shell:bg-transparent",
        outline:
          "shell:border shell:border-input shell:bg-transparent shell:shadow-xs shell:hover:bg-accent shell:hover:text-accent-foreground",
      },
      size: {
        default: "shell:h-9 shell:px-2 shell:min-w-9",
        sm: "shell:h-8 shell:px-1.5 shell:min-w-8",
        lg: "shell:h-10 shell:px-2.5 shell:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
