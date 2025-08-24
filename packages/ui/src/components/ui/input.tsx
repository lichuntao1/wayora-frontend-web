import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "UI:file:text-foreground UI:placeholder:text-muted-foreground UI:selection:bg-primary UI:selection:text-primary-foreground UI:dark:bg-input/30 UI:border-input UI:flex UI:h-9 UI:w-full UI:min-w-0 UI:rounded-md UI:border UI:bg-transparent UI:px-3 UI:py-1 UI:text-base UI:shadow-xs UI:transition-[color,box-shadow] UI:outline-none UI:file:inline-flex UI:file:h-7 UI:file:border-0 UI:file:bg-transparent UI:file:text-sm UI:file:font-medium UI:disabled:pointer-events-none UI:disabled:cursor-not-allowed UI:disabled:opacity-50 UI:md:text-sm",
        "UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:focus-visible:ring-[3px]",
        "UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
