import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "shell:border-input shell:placeholder:text-muted-foreground shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:dark:bg-input/30 shell:flex shell:field-sizing-content shell:min-h-16 shell:w-full shell:rounded-md shell:border shell:bg-transparent shell:px-3 shell:py-2 shell:text-base shell:shadow-xs shell:transition-[color,box-shadow] shell:outline-none shell:focus-visible:ring-[3px] shell:disabled:cursor-not-allowed shell:disabled:opacity-50 shell:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
