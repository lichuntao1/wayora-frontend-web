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
          "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:max-h-(--radix-dropdown-menu-content-available-height) hotel:min-w-[8rem] hotel:origin-(--radix-dropdown-menu-content-transform-origin) hotel:overflow-x-hidden hotel:overflow-y-auto hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-md",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[variant=destructive]:text-destructive hotel:data-[variant=destructive]:focus:bg-destructive/10 hotel:dark:data-[variant=destructive]:focus:bg-destructive/20 hotel:data-[variant=destructive]:focus:text-destructive hotel:data-[variant=destructive]:*:[svg]:!text-destructive hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:data-[inset]:pl-8 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="hotel:size-4" />
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="hotel:size-2 hotel:fill-current" />
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
        "hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:font-medium hotel:data-[inset]:pl-8",
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
      className={cn("hotel:bg-border hotel:-mx-1 hotel:my-1 hotel:h-px", className)}
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
        "hotel:text-muted-foreground hotel:ml-auto hotel:text-xs hotel:tracking-widest",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[state=open]:bg-accent hotel:data-[state=open]:text-accent-foreground hotel:flex hotel:cursor-default hotel:items-center hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="hotel:ml-auto hotel:size-4" />
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
        "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:min-w-[8rem] hotel:origin-(--radix-dropdown-menu-content-transform-origin) hotel:overflow-hidden hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-lg",
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
