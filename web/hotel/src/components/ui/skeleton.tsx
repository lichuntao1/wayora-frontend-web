import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("hotel:bg-accent hotel:animate-pulse hotel:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
