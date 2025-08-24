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
          "shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:z-50 shell:max-h-(--radix-dropdown-menu-content-available-height) shell:min-w-[8rem] shell:origin-(--radix-dropdown-menu-content-transform-origin) shell:overflow-x-hidden shell:overflow-y-auto shell:rounded-md shell:border shell:p-1 shell:shadow-md",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:data-[variant=destructive]:text-destructive shell:data-[variant=destructive]:focus:bg-destructive/10 shell:dark:data-[variant=destructive]:focus:bg-destructive/20 shell:data-[variant=destructive]:focus:text-destructive shell:data-[variant=destructive]:*:[svg]:!text-destructive shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:px-2 shell:py-1.5 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:data-[inset]:pl-8 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:py-1.5 shell:pr-2 shell:pl-8 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="shell:pointer-events-none shell:absolute shell:left-2 shell:flex shell:size-3.5 shell:items-center shell:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="shell:size-4" />
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:py-1.5 shell:pr-2 shell:pl-8 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="shell:pointer-events-none shell:absolute shell:left-2 shell:flex shell:size-3.5 shell:items-center shell:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="shell:size-2 shell:fill-current" />
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
        "shell:px-2 shell:py-1.5 shell:text-sm shell:font-medium shell:data-[inset]:pl-8",
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
      className={cn("shell:bg-border shell:-mx-1 shell:my-1 shell:h-px", className)}
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
        "shell:text-muted-foreground shell:ml-auto shell:text-xs shell:tracking-widest",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:data-[state=open]:bg-accent shell:data-[state=open]:text-accent-foreground shell:flex shell:cursor-default shell:items-center shell:rounded-sm shell:px-2 shell:py-1.5 shell:text-sm shell:outline-hidden shell:select-none shell:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="shell:ml-auto shell:size-4" />
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
        "shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:z-50 shell:min-w-[8rem] shell:origin-(--radix-dropdown-menu-content-transform-origin) shell:overflow-hidden shell:rounded-md shell:border shell:p-1 shell:shadow-lg",
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
