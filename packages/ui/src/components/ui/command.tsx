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
        "UI:bg-popover UI:text-popover-foreground UI:flex UI:h-full UI:w-full UI:flex-col UI:overflow-hidden UI:rounded-md",
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
      <DialogHeader className="UI:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("UI:overflow-hidden UI:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="UI:[&_[cmdk-group-heading]]:text-muted-foreground UI:**:data-[slot=command-input-wrapper]:h-12 UI:[&_[cmdk-group-heading]]:px-2 UI:[&_[cmdk-group-heading]]:font-medium UI:[&_[cmdk-group]]:px-2 UI:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 UI:[&_[cmdk-input-wrapper]_svg]:h-5 UI:[&_[cmdk-input-wrapper]_svg]:w-5 UI:[&_[cmdk-input]]:h-12 UI:[&_[cmdk-item]]:px-2 UI:[&_[cmdk-item]]:py-3 UI:[&_[cmdk-item]_svg]:h-5 UI:[&_[cmdk-item]_svg]:w-5">
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
      className="UI:flex UI:h-9 UI:items-center UI:gap-2 UI:border-b UI:px-3"
    >
      <SearchIcon className="UI:size-4 UI:shrink-0 UI:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "UI:placeholder:text-muted-foreground UI:flex UI:h-10 UI:w-full UI:rounded-md UI:bg-transparent UI:py-3 UI:text-sm UI:outline-hidden UI:disabled:cursor-not-allowed UI:disabled:opacity-50",
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
        "UI:max-h-[300px] UI:scroll-py-1 UI:overflow-x-hidden UI:overflow-y-auto",
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
      className="UI:py-6 UI:text-center UI:text-sm"
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
        "UI:text-foreground UI:[&_[cmdk-group-heading]]:text-muted-foreground UI:overflow-hidden UI:p-1 UI:[&_[cmdk-group-heading]]:px-2 UI:[&_[cmdk-group-heading]]:py-1.5 UI:[&_[cmdk-group-heading]]:text-xs UI:[&_[cmdk-group-heading]]:font-medium",
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
      className={cn("UI:bg-border UI:-mx-1 UI:h-px", className)}
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
        "UI:data-[selected=true]:bg-accent UI:data-[selected=true]:text-accent-foreground UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled=true]:pointer-events-none UI:data-[disabled=true]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
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
        "UI:text-muted-foreground UI:ml-auto UI:text-xs UI:tracking-widest",
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
