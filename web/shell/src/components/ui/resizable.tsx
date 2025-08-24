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
        "shell:flex shell:h-full shell:w-full shell:data-[panel-group-direction=vertical]:flex-col",
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
        "shell:bg-border shell:focus-visible:ring-ring shell:relative shell:flex shell:w-px shell:items-center shell:justify-center shell:after:absolute shell:after:inset-y-0 shell:after:left-1/2 shell:after:w-1 shell:after:-translate-x-1/2 shell:focus-visible:ring-1 shell:focus-visible:ring-offset-1 shell:focus-visible:outline-hidden shell:data-[panel-group-direction=vertical]:h-px shell:data-[panel-group-direction=vertical]:w-full shell:data-[panel-group-direction=vertical]:after:left-0 shell:data-[panel-group-direction=vertical]:after:h-1 shell:data-[panel-group-direction=vertical]:after:w-full shell:data-[panel-group-direction=vertical]:after:translate-x-0 shell:data-[panel-group-direction=vertical]:after:-translate-y-1/2 shell:[&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="shell:bg-border shell:z-10 shell:flex shell:h-4 shell:w-3 shell:items-center shell:justify-center shell:rounded-xs shell:border">
          <GripVerticalIcon className="shell:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
