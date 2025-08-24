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
        "hotel:bg-popover hotel:text-popover-foreground hotel:flex hotel:h-full hotel:w-full hotel:flex-col hotel:overflow-hidden hotel:rounded-md",
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
      <DialogHeader className="hotel:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("hotel:overflow-hidden hotel:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="hotel:[&_[cmdk-group-heading]]:text-muted-foreground hotel:**:data-[slot=command-input-wrapper]:h-12 hotel:[&_[cmdk-group-heading]]:px-2 hotel:[&_[cmdk-group-heading]]:font-medium hotel:[&_[cmdk-group]]:px-2 hotel:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 hotel:[&_[cmdk-input-wrapper]_svg]:h-5 hotel:[&_[cmdk-input-wrapper]_svg]:w-5 hotel:[&_[cmdk-input]]:h-12 hotel:[&_[cmdk-item]]:px-2 hotel:[&_[cmdk-item]]:py-3 hotel:[&_[cmdk-item]_svg]:h-5 hotel:[&_[cmdk-item]_svg]:w-5">
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
      className="hotel:flex hotel:h-9 hotel:items-center hotel:gap-2 hotel:border-b hotel:px-3"
    >
      <SearchIcon className="hotel:size-4 hotel:shrink-0 hotel:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "hotel:placeholder:text-muted-foreground hotel:flex hotel:h-10 hotel:w-full hotel:rounded-md hotel:bg-transparent hotel:py-3 hotel:text-sm hotel:outline-hidden hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50",
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
        "hotel:max-h-[300px] hotel:scroll-py-1 hotel:overflow-x-hidden hotel:overflow-y-auto",
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
      className="hotel:py-6 hotel:text-center hotel:text-sm"
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
        "hotel:text-foreground hotel:[&_[cmdk-group-heading]]:text-muted-foreground hotel:overflow-hidden hotel:p-1 hotel:[&_[cmdk-group-heading]]:px-2 hotel:[&_[cmdk-group-heading]]:py-1.5 hotel:[&_[cmdk-group-heading]]:text-xs hotel:[&_[cmdk-group-heading]]:font-medium",
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
      className={cn("hotel:bg-border hotel:-mx-1 hotel:h-px", className)}
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
        "hotel:data-[selected=true]:bg-accent hotel:data-[selected=true]:text-accent-foreground hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled=true]:pointer-events-none hotel:data-[disabled=true]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
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
        "hotel:text-muted-foreground hotel:ml-auto hotel:text-xs hotel:tracking-widest",
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
