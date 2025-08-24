import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("shell:bg-accent shell:animate-pulse shell:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
