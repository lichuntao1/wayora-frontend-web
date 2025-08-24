import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "hotel:file:text-foreground hotel:placeholder:text-muted-foreground hotel:selection:bg-primary hotel:selection:text-primary-foreground hotel:dark:bg-input/30 hotel:border-input hotel:flex hotel:h-9 hotel:w-full hotel:min-w-0 hotel:rounded-md hotel:border hotel:bg-transparent hotel:px-3 hotel:py-1 hotel:text-base hotel:shadow-xs hotel:transition-[color,box-shadow] hotel:outline-none hotel:file:inline-flex hotel:file:h-7 hotel:file:border-0 hotel:file:bg-transparent hotel:file:text-sm hotel:file:font-medium hotel:disabled:pointer-events-none hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50 hotel:md:text-sm",
        "hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:focus-visible:ring-[3px]",
        "hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
