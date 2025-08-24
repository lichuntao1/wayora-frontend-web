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
      className={cn("shell:flex shell:flex-col shell:gap-2", className)}
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
        "shell:bg-muted shell:text-muted-foreground shell:inline-flex shell:h-9 shell:w-fit shell:items-center shell:justify-center shell:rounded-lg shell:p-[3px]",
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
        "shell:data-[state=active]:bg-background shell:dark:data-[state=active]:text-foreground shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:focus-visible:outline-ring shell:dark:data-[state=active]:border-input shell:dark:data-[state=active]:bg-input/30 shell:text-foreground shell:dark:text-muted-foreground shell:inline-flex shell:h-[calc(100%-1px)] shell:flex-1 shell:items-center shell:justify-center shell:gap-1.5 shell:rounded-md shell:border shell:border-transparent shell:px-2 shell:py-1 shell:text-sm shell:font-medium shell:whitespace-nowrap shell:transition-[color,box-shadow] shell:focus-visible:ring-[3px] shell:focus-visible:outline-1 shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:data-[state=active]:shadow-sm shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
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
      className={cn("shell:flex-1 shell:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
