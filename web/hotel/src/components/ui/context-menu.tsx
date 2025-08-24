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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[state=open]:bg-accent hotel:data-[state=open]:text-accent-foreground hotel:flex hotel:cursor-default hotel:items-center hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[inset]:pl-8 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="hotel:ml-auto" />
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
        "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:min-w-[8rem] hotel:origin-(--radix-context-menu-content-transform-origin) hotel:overflow-hidden hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-lg",
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
          "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:max-h-(--radix-context-menu-content-available-height) hotel:min-w-[8rem] hotel:origin-(--radix-context-menu-content-transform-origin) hotel:overflow-x-hidden hotel:overflow-y-auto hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-md",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[variant=destructive]:text-destructive hotel:data-[variant=destructive]:focus:bg-destructive/10 hotel:dark:data-[variant=destructive]:focus:bg-destructive/20 hotel:data-[variant=destructive]:focus:text-destructive hotel:data-[variant=destructive]:*:[svg]:!text-destructive hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:data-[inset]:pl-8 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="hotel:size-4" />
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="hotel:size-2 hotel:fill-current" />
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
        "hotel:text-foreground hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:font-medium hotel:data-[inset]:pl-8",
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
      className={cn("hotel:bg-border hotel:-mx-1 hotel:my-1 hotel:h-px", className)}
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
        "hotel:text-muted-foreground hotel:ml-auto hotel:text-xs hotel:tracking-widest",
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
