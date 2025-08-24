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
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:data-[state=open]:bg-accent plan:data-[state=open]:text-accent-foreground plan:flex plan:cursor-default plan:items-center plan:rounded-sm plan:px-2 plan:py-1.5 plan:text-sm plan:outline-hidden plan:select-none plan:data-[inset]:pl-8 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="plan:ml-auto" />
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
        "plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:z-50 plan:min-w-[8rem] plan:origin-(--radix-context-menu-content-transform-origin) plan:overflow-hidden plan:rounded-md plan:border plan:p-1 plan:shadow-lg",
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
          "plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:z-50 plan:max-h-(--radix-context-menu-content-available-height) plan:min-w-[8rem] plan:origin-(--radix-context-menu-content-transform-origin) plan:overflow-x-hidden plan:overflow-y-auto plan:rounded-md plan:border plan:p-1 plan:shadow-md",
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
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:data-[variant=destructive]:text-destructive plan:data-[variant=destructive]:focus:bg-destructive/10 plan:dark:data-[variant=destructive]:focus:bg-destructive/20 plan:data-[variant=destructive]:focus:text-destructive plan:data-[variant=destructive]:*:[svg]:!text-destructive plan:[&_svg:not([class*=text-])]:text-muted-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-sm plan:px-2 plan:py-1.5 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:data-[inset]:pl-8 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
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
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-sm plan:py-1.5 plan:pr-2 plan:pl-8 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="plan:pointer-events-none plan:absolute plan:left-2 plan:flex plan:size-3.5 plan:items-center plan:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="plan:size-4" />
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
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-sm plan:py-1.5 plan:pr-2 plan:pl-8 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="plan:pointer-events-none plan:absolute plan:left-2 plan:flex plan:size-3.5 plan:items-center plan:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="plan:size-2 plan:fill-current" />
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
        "plan:text-foreground plan:px-2 plan:py-1.5 plan:text-sm plan:font-medium plan:data-[inset]:pl-8",
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
      className={cn("plan:bg-border plan:-mx-1 plan:my-1 plan:h-px", className)}
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
        "plan:text-muted-foreground plan:ml-auto plan:text-xs plan:tracking-widest",
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
