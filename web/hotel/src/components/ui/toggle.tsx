import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "hotel:inline-flex hotel:items-center hotel:justify-center hotel:gap-2 hotel:rounded-md hotel:text-sm hotel:font-medium hotel:hover:bg-muted hotel:hover:text-muted-foreground hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:data-[state=on]:bg-accent hotel:data-[state=on]:text-accent-foreground hotel:[&_svg]:pointer-events-none hotel:[&_svg:not([class*=size-])]:size-4 hotel:[&_svg]:shrink-0 hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:focus-visible:ring-[3px] hotel:outline-none hotel:transition-[color,box-shadow] hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "hotel:bg-transparent",
        outline:
          "hotel:border hotel:border-input hotel:bg-transparent hotel:shadow-xs hotel:hover:bg-accent hotel:hover:text-accent-foreground",
      },
      size: {
        default: "hotel:h-9 hotel:px-2 hotel:min-w-9",
        sm: "hotel:h-8 hotel:px-1.5 hotel:min-w-8",
        lg: "hotel:h-10 hotel:px-2.5 hotel:min-w-10",
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
