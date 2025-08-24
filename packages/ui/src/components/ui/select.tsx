import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "UI:border-input UI:data-[placeholder]:text-muted-foreground UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:aria-invalid:ring-destructive/20 UI:dark:aria-invalid:ring-destructive/40 UI:aria-invalid:border-destructive UI:dark:bg-input/30 UI:dark:hover:bg-input/50 UI:flex UI:w-fit UI:items-center UI:justify-between UI:gap-2 UI:rounded-md UI:border UI:bg-transparent UI:px-3 UI:py-2 UI:text-sm UI:whitespace-nowrap UI:shadow-xs UI:transition-[color,box-shadow] UI:outline-none UI:focus-visible:ring-[3px] UI:disabled:cursor-not-allowed UI:disabled:opacity-50 UI:data-[size=default]:h-9 UI:data-[size=sm]:h-8 UI:*:data-[slot=select-value]:line-clamp-1 UI:*:data-[slot=select-value]:flex UI:*:data-[slot=select-value]:items-center UI:*:data-[slot=select-value]:gap-2 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="UI:size-4 UI:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "UI:bg-popover UI:text-popover-foreground UI:data-[state=open]:animate-in UI:data-[state=closed]:animate-out UI:data-[state=closed]:fade-out-0 UI:data-[state=open]:fade-in-0 UI:data-[state=closed]:zoom-out-95 UI:data-[state=open]:zoom-in-95 UI:data-[side=bottom]:slide-in-from-top-2 UI:data-[side=left]:slide-in-from-right-2 UI:data-[side=right]:slide-in-from-left-2 UI:data-[side=top]:slide-in-from-bottom-2 UI:relative UI:z-50 UI:max-h-(--radix-select-content-available-height) UI:min-w-[8rem] UI:origin-(--radix-select-content-transform-origin) UI:overflow-x-hidden UI:overflow-y-auto UI:rounded-md UI:border UI:shadow-md",
          position === "popper" &&
            "UI:data-[side=bottom]:translate-y-1 UI:data-[side=left]:-translate-x-1 UI:data-[side=right]:translate-x-1 UI:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "UI:p-1",
            position === "popper" &&
              "UI:h-[var(--radix-select-trigger-height)] UI:w-full UI:min-w-[var(--radix-select-trigger-width)] UI:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("UI:text-muted-foreground UI:px-2 UI:py-1.5 UI:text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "UI:focus:bg-accent UI:focus:text-accent-foreground UI:[&_svg:not([class*=text-])]:text-muted-foreground UI:relative UI:flex UI:w-full UI:cursor-default UI:items-center UI:gap-2 UI:rounded-sm UI:py-1.5 UI:pr-8 UI:pl-2 UI:text-sm UI:outline-hidden UI:select-none UI:data-[disabled]:pointer-events-none UI:data-[disabled]:opacity-50 UI:[&_svg]:pointer-events-none UI:[&_svg]:shrink-0 UI:[&_svg:not([class*=size-])]:size-4 UI:*:[span]:last:flex UI:*:[span]:last:items-center UI:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="UI:absolute UI:right-2 UI:flex UI:size-3.5 UI:items-center UI:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="UI:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("UI:bg-border UI:pointer-events-none UI:-mx-1 UI:my-1 UI:h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "UI:flex UI:cursor-default UI:items-center UI:justify-center UI:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="UI:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "UI:flex UI:cursor-default UI:items-center UI:justify-center UI:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="UI:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
