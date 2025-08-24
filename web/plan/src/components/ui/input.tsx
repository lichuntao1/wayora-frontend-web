import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "plan:file:text-foreground plan:placeholder:text-muted-foreground plan:selection:bg-primary plan:selection:text-primary-foreground plan:dark:bg-input/30 plan:border-input plan:flex plan:h-9 plan:w-full plan:min-w-0 plan:rounded-md plan:border plan:bg-transparent plan:px-3 plan:py-1 plan:text-base plan:shadow-xs plan:transition-[color,box-shadow] plan:outline-none plan:file:inline-flex plan:file:h-7 plan:file:border-0 plan:file:bg-transparent plan:file:text-sm plan:file:font-medium plan:disabled:pointer-events-none plan:disabled:cursor-not-allowed plan:disabled:opacity-50 plan:md:text-sm",
        "plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:focus-visible:ring-[3px]",
        "plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
