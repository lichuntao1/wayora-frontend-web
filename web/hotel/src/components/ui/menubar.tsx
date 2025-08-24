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
        "hotel:bg-background hotel:flex hotel:h-9 hotel:items-center hotel:gap-1 hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-xs",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[state=open]:bg-accent hotel:data-[state=open]:text-accent-foreground hotel:flex hotel:items-center hotel:rounded-sm hotel:px-2 hotel:py-1 hotel:text-sm hotel:font-medium hotel:outline-hidden hotel:select-none",
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
          "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:min-w-[12rem] hotel:origin-(--radix-menubar-content-transform-origin) hotel:overflow-hidden hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-md",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[variant=destructive]:text-destructive hotel:data-[variant=destructive]:focus:bg-destructive/10 hotel:dark:data-[variant=destructive]:focus:bg-destructive/20 hotel:data-[variant=destructive]:focus:text-destructive hotel:data-[variant=destructive]:*:[svg]:!text-destructive hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:data-[inset]:pl-8 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-xs hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="hotel:size-4" />
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:relative hotel:flex hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-xs hotel:py-1.5 hotel:pr-2 hotel:pl-8 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="hotel:pointer-events-none hotel:absolute hotel:left-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="hotel:size-2 hotel:fill-current" />
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
        "hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:font-medium hotel:data-[inset]:pl-8",
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
      className={cn("hotel:bg-border hotel:-mx-1 hotel:my-1 hotel:h-px", className)}
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
        "hotel:text-muted-foreground hotel:ml-auto hotel:text-xs hotel:tracking-widest",
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:data-[state=open]:bg-accent hotel:data-[state=open]:text-accent-foreground hotel:flex hotel:cursor-default hotel:items-center hotel:rounded-sm hotel:px-2 hotel:py-1.5 hotel:text-sm hotel:outline-none hotel:select-none hotel:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="hotel:ml-auto hotel:h-4 hotel:w-4" />
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
        "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:z-50 hotel:min-w-[8rem] hotel:origin-(--radix-menubar-content-transform-origin) hotel:overflow-hidden hotel:rounded-md hotel:border hotel:p-1 hotel:shadow-lg",
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
