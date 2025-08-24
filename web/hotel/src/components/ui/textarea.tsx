import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "hotel:border-input hotel:placeholder:text-muted-foreground hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:dark:bg-input/30 hotel:flex hotel:field-sizing-content hotel:min-h-16 hotel:w-full hotel:rounded-md hotel:border hotel:bg-transparent hotel:px-3 hotel:py-2 hotel:text-base hotel:shadow-xs hotel:transition-[color,box-shadow] hotel:outline-none hotel:focus-visible:ring-[3px] hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50 hotel:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
