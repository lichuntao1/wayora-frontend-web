import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "plan:border-input plan:placeholder:text-muted-foreground plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:dark:bg-input/30 plan:flex plan:field-sizing-content plan:min-h-16 plan:w-full plan:rounded-md plan:border plan:bg-transparent plan:px-3 plan:py-2 plan:text-base plan:shadow-xs plan:transition-[color,box-shadow] plan:outline-none plan:focus-visible:ring-[3px] plan:disabled:cursor-not-allowed plan:disabled:opacity-50 plan:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
