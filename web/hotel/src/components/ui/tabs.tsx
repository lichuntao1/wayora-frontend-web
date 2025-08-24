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
      className={cn("hotel:flex hotel:flex-col hotel:gap-2", className)}
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
        "hotel:bg-muted hotel:text-muted-foreground hotel:inline-flex hotel:h-9 hotel:w-fit hotel:items-center hotel:justify-center hotel:rounded-lg hotel:p-[3px]",
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
        "hotel:data-[state=active]:bg-background hotel:dark:data-[state=active]:text-foreground hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:focus-visible:outline-ring hotel:dark:data-[state=active]:border-input hotel:dark:data-[state=active]:bg-input/30 hotel:text-foreground hotel:dark:text-muted-foreground hotel:inline-flex hotel:h-[calc(100%-1px)] hotel:flex-1 hotel:items-center hotel:justify-center hotel:gap-1.5 hotel:rounded-md hotel:border hotel:border-transparent hotel:px-2 hotel:py-1 hotel:text-sm hotel:font-medium hotel:whitespace-nowrap hotel:transition-[color,box-shadow] hotel:focus-visible:ring-[3px] hotel:focus-visible:outline-1 hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:data-[state=active]:shadow-sm hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
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
      className={cn("hotel:flex-1 hotel:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
