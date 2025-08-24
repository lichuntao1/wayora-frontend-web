"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("plan:flex plan:flex-col plan:gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "plan:bg-muted plan:text-muted-foreground plan:inline-flex plan:h-9 plan:w-fit plan:items-center plan:justify-center plan:rounded-lg plan:p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "plan:data-[state=active]:bg-background plan:dark:data-[state=active]:text-foreground plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:focus-visible:outline-ring plan:dark:data-[state=active]:border-input plan:dark:data-[state=active]:bg-input/30 plan:text-foreground plan:dark:text-muted-foreground plan:inline-flex plan:h-[calc(100%-1px)] plan:flex-1 plan:items-center plan:justify-center plan:gap-1.5 plan:rounded-md plan:border plan:border-transparent plan:px-2 plan:py-1 plan:text-sm plan:font-medium plan:whitespace-nowrap plan:transition-[color,box-shadow] plan:focus-visible:ring-[3px] plan:focus-visible:outline-1 plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:data-[state=active]:shadow-sm plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("plan:flex-1 plan:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
