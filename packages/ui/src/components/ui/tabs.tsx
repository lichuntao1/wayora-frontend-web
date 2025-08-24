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
      className={cn("UI:flex UI:flex-col UI:gap-2", className)}
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
        "UI:bg-muted UI:text-muted-foreground UI:inline-flex UI:h-9 UI:w-fit UI:items-center UI:justify-center UI:rounded-lg UI:p-[3px]",
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
        "UI:data-[state=active]:bg-background UI:dark:data-[state=active]:text-foreground UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:focus-visible:outline-ring UI:dark:data-[state=active]:border-input UI:dark:data-[state=active]:bg-input/30 UI:text-foreground UI:dark:text-muted-foreground UI:inline-flex UI:h-[calc(100%-1px)] UI:flex-1 UI:items-center UI:justify-center UI:gap-1.5 UI:rounded-md UI:border UI:border-transparent UI:px-2 UI:py-1 UI:text-sm UI:font-medium UI:whitespace-nowrap UI:transition-[color,box-shadow] UI:focus-visible:ring-[3px] UI:focus-visible:outline-1 UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:data-[state=active]:shadow-sm UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
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
      className={cn("UI:flex-1 UI:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
