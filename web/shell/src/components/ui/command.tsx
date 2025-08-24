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
        "shell:bg-popover shell:text-popover-foreground shell:flex shell:h-full shell:w-full shell:flex-col shell:overflow-hidden shell:rounded-md",
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
      <DialogHeader className="shell:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("shell:overflow-hidden shell:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="shell:[&_[cmdk-group-heading]]:text-muted-foreground shell:**:data-[slot=command-input-wrapper]:h-12 shell:[&_[cmdk-group-heading]]:px-2 shell:[&_[cmdk-group-heading]]:font-medium shell:[&_[cmdk-group]]:px-2 shell:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 shell:[&_[cmdk-input-wrapper]_svg]:h-5 shell:[&_[cmdk-input-wrapper]_svg]:w-5 shell:[&_[cmdk-input]]:h-12 shell:[&_[cmdk-item]]:px-2 shell:[&_[cmdk-item]]:py-3 shell:[&_[cmdk-item]_svg]:h-5 shell:[&_[cmdk-item]_svg]:w-5">
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
      className="shell:flex shell:h-9 shell:items-center shell:gap-2 shell:border-b shell:px-3"
    >
      <SearchIcon className="shell:size-4 shell:shrink-0 shell:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "shell:placeholder:text-muted-foreground shell:flex shell:h-10 shell:w-full shell:rounded-md shell:bg-transparent shell:py-3 shell:text-sm shell:outline-hidden shell:disabled:cursor-not-allowed shell:disabled:opacity-50",
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
        "shell:max-h-[300px] shell:scroll-py-1 shell:overflow-x-hidden shell:overflow-y-auto",
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
      className="shell:py-6 shell:text-center shell:text-sm"
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
        "shell:text-foreground shell:[&_[cmdk-group-heading]]:text-muted-foreground shell:overflow-hidden shell:p-1 shell:[&_[cmdk-group-heading]]:px-2 shell:[&_[cmdk-group-heading]]:py-1.5 shell:[&_[cmdk-group-heading]]:text-xs shell:[&_[cmdk-group-heading]]:font-medium",
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
      className={cn("shell:bg-border shell:-mx-1 shell:h-px", className)}
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
        "shell:data-[selected=true]:bg-accent shell:data-[selected=true]:text-accent-foreground shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:px-2 shell:py-1.5 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled=true]:pointer-events-none shell:data-[disabled=true]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
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
        "shell:text-muted-foreground shell:ml-auto shell:text-xs shell:tracking-widest",
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
