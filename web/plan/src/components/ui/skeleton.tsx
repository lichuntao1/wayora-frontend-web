import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("plan:bg-accent plan:animate-pulse plan:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
