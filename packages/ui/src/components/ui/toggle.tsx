import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "UI:inline-flex UI:items-center UI:justify-center UI:gap-2 UI:rounded-md UI:text-sm UI:font-medium UI:hover:bg-muted UI:hover:text-muted-foreground UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:data-[state=on]:bg-accent UI:data-[state=on]:text-accent-foreground UI:[&_svg]:pointer-events-none UI:[&_svg:not([class*=size-])]:size-4 UI:[&_svg]:shrink-0 UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:focus-visible:ring-[3px] UI:outline-none UI:transition-[color,box-shadow] UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "UI:bg-transparent",
        outline:
          "UI:border UI:border-input UI:bg-transparent UI:shadow-xs UI:hover:bg-accent UI:hover:text-accent-foreground",
      },
      size: {
        default: "UI:h-9 UI:px-2 UI:min-w-9",
        sm: "UI:h-8 UI:px-1.5 UI:min-w-8",
        lg: "UI:h-10 UI:px-2.5 UI:min-w-10",
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
