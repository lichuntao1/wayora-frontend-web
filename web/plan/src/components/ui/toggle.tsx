import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "plan:inline-flex plan:items-center plan:justify-center plan:gap-2 plan:rounded-md plan:text-sm plan:font-medium plan:hover:bg-muted plan:hover:text-muted-foreground plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:data-[state=on]:bg-accent plan:data-[state=on]:text-accent-foreground plan:[&_svg]:pointer-events-none plan:[&_svg:not([class*=size-])]:size-4 plan:[&_svg]:shrink-0 plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:focus-visible:ring-[3px] plan:outline-none plan:transition-[color,box-shadow] plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "plan:bg-transparent",
        outline:
          "plan:border plan:border-input plan:bg-transparent plan:shadow-xs plan:hover:bg-accent plan:hover:text-accent-foreground",
      },
      size: {
        default: "plan:h-9 plan:px-2 plan:min-w-9",
        sm: "plan:h-8 plan:px-1.5 plan:min-w-8",
        lg: "plan:h-10 plan:px-2.5 plan:min-w-10",
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
