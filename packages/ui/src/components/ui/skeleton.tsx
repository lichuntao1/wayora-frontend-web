import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("UI:bg-accent UI:animate-pulse UI:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
