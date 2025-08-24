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
        "UI:flex UI:h-full UI:w-full UI:data-[panel-group-direction=vertical]:flex-col",
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
        "UI:bg-border UI:focus-visible:ring-ring UI:relative UI:flex UI:w-px UI:items-center UI:justify-center UI:after:absolute UI:after:inset-y-0 UI:after:left-1/2 UI:after:w-1 UI:after:-translate-x-1/2 UI:focus-visible:ring-1 UI:focus-visible:ring-offset-1 UI:focus-visible:outline-hidden UI:data-[panel-group-direction=vertical]:h-px UI:data-[panel-group-direction=vertical]:w-full UI:data-[panel-group-direction=vertical]:after:left-0 UI:data-[panel-group-direction=vertical]:after:h-1 UI:data-[panel-group-direction=vertical]:after:w-full UI:data-[panel-group-direction=vertical]:after:translate-x-0 UI:data-[panel-group-direction=vertical]:after:-translate-y-1/2 UI:[&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="UI:bg-border UI:z-10 UI:flex UI:h-4 UI:w-3 UI:items-center UI:justify-center UI:rounded-xs UI:border">
          <GripVerticalIcon className="UI:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
