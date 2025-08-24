"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:max-h-(--radix-dropdown-menu-content-available-height) UI:min-w-[8rem] UI:origin-(--radix-dropdown-menu-content-transform-origin) UI:overflow-x-hidden UI:overflow-y-auto UI:rounded-md UI:border UI:p-1 UI:shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
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

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="UI:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="UI:size-2 UI:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "UI:px-2 UI:py-1.5 UI:text-sm UI:font-medium UI:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("UI:bg-border UI:-mx-1 UI:my-1 UI:h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "UI:text-muted-foreground UI:ml-auto UI:text-xs UI:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[state=open]:bg-accent UI:data-[state=open]:text-accent-foreground UI:flex UI:cursor-default UI:items-center UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-hidden UI:select-none UI:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="UI:ml-auto UI:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:min-w-[8rem] UI:origin-(--radix-dropdown-menu-content-transform-origin) UI:overflow-hidden UI:rounded-md UI:border UI:p-1 UI:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
