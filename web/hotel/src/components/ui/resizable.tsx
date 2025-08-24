import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "hotel:flex hotel:h-full hotel:w-full hotel:data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "hotel:bg-border hotel:focus-visible:ring-ring hotel:relative hotel:flex hotel:w-px hotel:items-center hotel:justify-center hotel:after:absolute hotel:after:inset-y-0 hotel:after:left-1/2 hotel:after:w-1 hotel:after:-translate-x-1/2 hotel:focus-visible:ring-1 hotel:focus-visible:ring-offset-1 hotel:focus-visible:outline-hidden hotel:data-[panel-group-direction=vertical]:h-px hotel:data-[panel-group-direction=vertical]:w-full hotel:data-[panel-group-direction=vertical]:after:left-0 hotel:data-[panel-group-direction=vertical]:after:h-1 hotel:data-[panel-group-direction=vertical]:after:w-full hotel:data-[panel-group-direction=vertical]:after:translate-x-0 hotel:data-[panel-group-direction=vertical]:after:-translate-y-1/2 hotel:[&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="hotel:bg-border hotel:z-10 hotel:flex hotel:h-4 hotel:w-3 hotel:items-center hotel:justify-center hotel:rounded-xs hotel:border">
          <GripVerticalIcon className="hotel:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
