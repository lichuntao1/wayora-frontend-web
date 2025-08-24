import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "shell:file:text-foreground shell:placeholder:text-muted-foreground shell:selection:bg-primary shell:selection:text-primary-foreground shell:dark:bg-input/30 shell:border-input shell:flex shell:h-9 shell:w-full shell:min-w-0 shell:rounded-md shell:border shell:bg-transparent shell:px-3 shell:py-1 shell:text-base shell:shadow-xs shell:transition-[color,box-shadow] shell:outline-none shell:file:inline-flex shell:file:h-7 shell:file:border-0 shell:file:bg-transparent shell:file:text-sm shell:file:font-medium shell:disabled:pointer-events-none shell:disabled:cursor-not-allowed shell:disabled:opacity-50 shell:md:text-sm",
        "shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:focus-visible:ring-[3px]",
        "shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
