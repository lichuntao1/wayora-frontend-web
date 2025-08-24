"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[state=open]:bg-accent UI:data-[state=open]:text-accent-foreground UI:flex UI:cursor-default UI:items-center UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-hidden UI:select-none UI:data-[inset]:pl-8 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="UI:ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:min-w-[8rem] UI:origin-(--radix-context-menu-content-transform-origin) UI:overflow-hidden UI:rounded-md UI:border UI:p-1 UI:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:max-h-(--radix-context-menu-content-available-height) UI:min-w-[8rem] UI:origin-(--radix-context-menu-content-transform-origin) UI:overflow-x-hidden UI:overflow-y-auto UI:rounded-md UI:border UI:p-1 UI:shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[variant=destructive]:text-destructive UI:data-[variant=destructive]:focus:bg-destructive/10 UI:dark:data-[variant=destructive]:focus:bg-destructive/20 UI:data-[variant=destructive]:focus:text-destructive UI:data-[variant=destructive]:*:[svg]:!text-destructive UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:data-[inset]:pl-8 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="UI:size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="UI:size-2 UI:fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "UI:text-foreground UI:px-2 UI:py-1.5 UI:text-sm UI:font-medium UI:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("UI:bg-border UI:-mx-1 UI:my-1 UI:h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "UI:text-muted-foreground UI:ml-auto UI:text-xs UI:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
