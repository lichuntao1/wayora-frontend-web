import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "UI:border-input UI:placeholder:text-muted-foreground UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:dark:bg-input/30 UI:flex UI:field-sizing-content UI:min-h-16 UI:w-full UI:rounded-md UI:border UI:bg-transparent UI:px-3 UI:py-2 UI:text-base UI:shadow-xs UI:transition-[color,box-shadow] UI:outline-none UI:focus-visible:ring-[3px] UI:disabled:cursor-not-allowed UI:disabled:opacity-50 UI:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
