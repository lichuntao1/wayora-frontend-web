import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "plan:bg-background plan:flex plan:h-9 plan:items-center plan:gap-1 plan:rounded-md plan:border plan:p-1 plan:shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:data-[state=open]:bg-accent plan:data-[state=open]:text-accent-foreground plan:flex plan:items-center plan:rounded-sm plan:px-2 plan:py-1 plan:text-sm plan:font-medium plan:outline-hidden plan:select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:z-50 plan:min-w-[12rem] plan:origin-(--radix-menubar-content-transform-origin) plan:overflow-hidden plan:rounded-md plan:border plan:p-1 plan:shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
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

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-xs plan:py-1.5 plan:pr-2 plan:pl-8 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="plan:pointer-events-none plan:absolute plan:left-2 plan:flex plan:size-3.5 plan:items-center plan:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="plan:size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:relative plan:flex plan:cursor-default plan:items-center plan:gap-2 plan:rounded-xs plan:py-1.5 plan:pr-2 plan:pl-8 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="plan:pointer-events-none plan:absolute plan:left-2 plan:flex plan:size-3.5 plan:items-center plan:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="plan:size-2 plan:fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "plan:px-2 plan:py-1.5 plan:text-sm plan:font-medium plan:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("plan:bg-border plan:-mx-1 plan:my-1 plan:h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "plan:text-muted-foreground plan:ml-auto plan:text-xs plan:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:data-[state=open]:bg-accent plan:data-[state=open]:text-accent-foreground plan:flex plan:cursor-default plan:items-center plan:rounded-sm plan:px-2 plan:py-1.5 plan:text-sm plan:outline-none plan:select-none plan:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="plan:ml-auto plan:h-4 plan:w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:z-50 plan:min-w-[8rem] plan:origin-(--radix-menubar-content-transform-origin) plan:overflow-hidden plan:rounded-md plan:border plan:p-1 plan:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
