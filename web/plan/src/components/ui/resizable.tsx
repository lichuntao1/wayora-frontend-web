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
        "plan:flex plan:h-full plan:w-full plan:data-[panel-group-direction=vertical]:flex-col",
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
        "plan:bg-border plan:focus-visible:ring-ring plan:relative plan:flex plan:w-px plan:items-center plan:justify-center plan:after:absolute plan:after:inset-y-0 plan:after:left-1/2 plan:after:w-1 plan:after:-translate-x-1/2 plan:focus-visible:ring-1 plan:focus-visible:ring-offset-1 plan:focus-visible:outline-hidden plan:data-[panel-group-direction=vertical]:h-px plan:data-[panel-group-direction=vertical]:w-full plan:data-[panel-group-direction=vertical]:after:left-0 plan:data-[panel-group-direction=vertical]:after:h-1 plan:data-[panel-group-direction=vertical]:after:w-full plan:data-[panel-group-direction=vertical]:after:translate-x-0 plan:data-[panel-group-direction=vertical]:after:-translate-y-1/2 plan:[&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="plan:bg-border plan:z-10 plan:flex plan:h-4 plan:w-3 plan:items-center plan:justify-center plan:rounded-xs plan:border">
          <GripVerticalIcon className="plan:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
