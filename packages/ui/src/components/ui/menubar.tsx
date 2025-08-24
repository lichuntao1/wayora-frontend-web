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
        "UI:bg-background UI:flex UI:h-9 UI:items-center UI:gap-1 UI:rounded-md UI:border UI:p-1 UI:shadow-xs",
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
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[state=open]:bg-accent UI:data-[state=open]:text-accent-foreground UI:flex UI:items-center UI:rounded-sm UI:px-2 UI:py-1 UI:text-sm UI:font-medium UI:outline-hidden UI:select-none",
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
          "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:min-w-[12rem] UI:origin-(--radix-menubar-content-transform-origin) UI:overflow-hidden UI:rounded-md UI:border UI:p-1 UI:shadow-md",
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
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[variant=destructive]:text-destructive UI:data-[variant=destructive]:focus:bg-destructive/10 UI:dark:data-[variant=destructive]:focus:bg-destructive/20 UI:data-[variant=destructive]:focus:text-destructive UI:data-[variant=destructive]:*:[svg]:!text-destructive UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:data-[inset]:pl-8 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
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
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-xs UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="UI:size-4" />
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
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:relative UI:flex UI:cursor-default UI:items-center UI:gap-2 UI:rounded-xs UI:py-1.5 UI:pr-2 UI:pl-8 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="UI:pointer-events-none UI:absolute UI:left-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="UI:size-2 UI:fill-current" />
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
        "UI:px-2 UI:py-1.5 UI:text-sm UI:font-medium UI:data-[inset]:pl-8",
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
      className={cn("UI:bg-border UI:-mx-1 UI:my-1 UI:h-px", className)}
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
        "UI:text-muted-foreground UI:ml-auto UI:text-xs UI:tracking-widest",
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
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:data-[state=open]:bg-accent UI:data-[state=open]:text-accent-foreground UI:flex UI:cursor-default UI:items-center UI:rounded-sm UI:px-2 UI:py-1.5 UI:text-sm UI:outline-none UI:select-none UI:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="UI:ml-auto UI:h-4 UI:w-4" />
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
        "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:z-50 UI:min-w-[8rem] UI:origin-(--radix-menubar-content-transform-origin) UI:overflow-hidden UI:rounded-md UI:border UI:p-1 UI:shadow-lg",
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
