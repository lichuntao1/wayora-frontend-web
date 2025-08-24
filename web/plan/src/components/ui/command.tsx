"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "plan:bg-popover plan:text-popover-foreground plan:flex plan:h-full plan:w-full plan:flex-col plan:overflow-hidden plan:rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="plan:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("plan:overflow-hidden plan:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="plan:[&_[cmdk-group-heading]]:text-muted-foreground plan:**:data-[slot=command-input-wrapper]:h-12 plan:[&_[cmdk-group-heading]]:px-2 plan:[&_[cmdk-group-heading]]:font-medium plan:[&_[cmdk-group]]:px-2 plan:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 plan:[&_[cmdk-input-wrapper]_svg]:h-5 plan:[&_[cmdk-input-wrapper]_svg]:w-5 plan:[&_[cmdk-input]]:h-12 plan:[&_[cmdk-item]]:px-2 plan:[&_[cmdk-item]]:py-3 plan:[&_[cmdk-item]_svg]:h-5 plan:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="plan:flex plan:h-9 plan:items-center plan:gap-2 plan:border-b plan:px-3"
    >
      <SearchIcon className="plan:size-4 plan:shrink-0 plan:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "plan:placeholder:text-muted-foreground plan:flex plan:h-10 plan:w-full plan:rounded-md plan:bg-transparent plan:py-3 plan:text-sm plan:outline-hidden plan:disabled:cursor-not-allowed plan:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "plan:max-h-[300px] plan:scroll-py-1 plan:overflow-x-hidden plan:overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="plan:py-6 plan:text-center plan:text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "plan:text-foreground plan:[&_[cmdk-group-heading]]:text-muted-foreground plan:overflow-hidden plan:p-1 plan:[&_[cmdk-group-heading]]:px-2 plan:[&_[cmdk-group-heading]]:py-1.5 plan:[&_[cmdk-group-heading]]:text-xs plan:[&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("plan:bg-border plan:-mx-1 plan:h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "plan:data-[selected=true]:bg-accent plan:data-[selected=true]:text-accent-foreground plan:[&_svg:not([class*=text-])]:text-muted-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-sm plan:px-2 plan:py-1.5 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled=true]:pointer-events-none plan:data-[disabled=true]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "plan:text-muted-foreground plan:ml-auto plan:text-xs plan:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
