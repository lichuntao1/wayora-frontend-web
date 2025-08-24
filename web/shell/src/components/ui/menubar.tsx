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
        "shell:bg-background shell:flex shell:h-9 shell:items-center shell:gap-1 shell:rounded-md shell:border shell:p-1 shell:shadow-xs",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:data-[state=open]:bg-accent shell:data-[state=open]:text-accent-foreground shell:flex shell:items-center shell:rounded-sm shell:px-2 shell:py-1 shell:text-sm shell:font-medium shell:outline-hidden shell:select-none",
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
          "shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:z-50 shell:min-w-[12rem] shell:origin-(--radix-menubar-content-transform-origin) shell:overflow-hidden shell:rounded-md shell:border shell:p-1 shell:shadow-md",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:data-[variant=destructive]:text-destructive shell:data-[variant=destructive]:focus:bg-destructive/10 shell:dark:data-[variant=destructive]:focus:bg-destructive/20 shell:data-[variant=destructive]:focus:text-destructive shell:data-[variant=destructive]:*:[svg]:!text-destructive shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:px-2 shell:py-1.5 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:data-[inset]:pl-8 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-xs shell:py-1.5 shell:pr-2 shell:pl-8 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="shell:pointer-events-none shell:absolute shell:left-2 shell:flex shell:size-3.5 shell:items-center shell:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="shell:size-4" />
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:relative shell:flex shell:cursor-default shell:items-center shell:gap-2 shell:rounded-xs shell:py-1.5 shell:pr-2 shell:pl-8 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="shell:pointer-events-none shell:absolute shell:left-2 shell:flex shell:size-3.5 shell:items-center shell:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="shell:size-2 shell:fill-current" />
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
        "shell:px-2 shell:py-1.5 shell:text-sm shell:font-medium shell:data-[inset]:pl-8",
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
      className={cn("shell:bg-border shell:-mx-1 shell:my-1 shell:h-px", className)}
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
        "shell:text-muted-foreground shell:ml-auto shell:text-xs shell:tracking-widest",
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:data-[state=open]:bg-accent shell:data-[state=open]:text-accent-foreground shell:flex shell:cursor-default shell:items-center shell:rounded-sm shell:px-2 shell:py-1.5 shell:text-sm shell:outline-none shell:select-none shell:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="shell:ml-auto shell:h-4 shell:w-4" />
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
        "shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:z-50 shell:min-w-[8rem] shell:origin-(--radix-menubar-content-transform-origin) shell:overflow-hidden shell:rounded-md shell:border shell:p-1 shell:shadow-lg",
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
