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
        "plan:border-input plan:data-[placeholder]:text-muted-foreground plan:[&_svg:not([class*=text-])]:text-muted-foreground plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:aria-invalid:ring-destructive/20 plan:dark:aria-invalid:ring-destructive/40 plan:aria-invalid:border-destructive plan:dark:bg-input/30 plan:dark:hover:bg-input/50 plan:flex plan:w-fit plan:items-center plan:justify-between plan:gap-2 plan:rounded-md plan:border plan:bg-transparent plan:px-3 plan:py-2 plan:text-sm plan:whitespace-nowrap plan:shadow-xs plan:transition-[color,box-shadow] plan:outline-none plan:focus-visible:ring-[3px] plan:disabled:cursor-not-allowed plan:disabled:opacity-50 plan:data-[size=default]:h-9 plan:data-[size=sm]:h-8 plan:*:data-[slot=select-value]:line-clamp-1 plan:*:data-[slot=select-value]:flex plan:*:data-[slot=select-value]:items-center plan:*:data-[slot=select-value]:gap-2 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="plan:size-4 plan:opacity-50" />
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
          "plan:bg-popover plan:text-popover-foreground plan:data-[state=open]:animate-in plan:data-[state=closed]:animate-out plan:data-[state=closed]:fade-out-0 plan:data-[state=open]:fade-in-0 plan:data-[state=closed]:zoom-out-95 plan:data-[state=open]:zoom-in-95 plan:data-[side=bottom]:slide-in-from-top-2 plan:data-[side=left]:slide-in-from-right-2 plan:data-[side=right]:slide-in-from-left-2 plan:data-[side=top]:slide-in-from-bottom-2 plan:relative plan:z-50 plan:max-h-(--radix-select-content-available-height) plan:min-w-[8rem] plan:origin-(--radix-select-content-transform-origin) plan:overflow-x-hidden plan:overflow-y-auto plan:rounded-md plan:border plan:shadow-md",
          position === "popper" &&
            "plan:data-[side=bottom]:translate-y-1 plan:data-[side=left]:-translate-x-1 plan:data-[side=right]:translate-x-1 plan:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "plan:p-1",
            position === "popper" &&
              "plan:h-[var(--radix-select-trigger-height)] plan:w-full plan:min-w-[var(--radix-select-trigger-width)] plan:scroll-my-1"
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
      className={cn("plan:text-muted-foreground plan:px-2 plan:py-1.5 plan:text-xs", className)}
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
        "plan:focus:bg-accent plan:focus:text-accent-foreground plan:[&_svg:not([class*=text-])]:text-muted-foreground plan:relative plan:flex plan:w-full plan:cursor-default plan:items-center plan:gap-2 plan:rounded-sm plan:py-1.5 plan:pr-8 plan:pl-2 plan:text-sm plan:outline-hidden plan:select-none plan:data-[disabled]:pointer-events-none plan:data-[disabled]:opacity-50 plan:[&_svg]:pointer-events-none plan:[&_svg]:shrink-0 plan:[&_svg:not([class*=size-])]:size-4 plan:*:[span]:last:flex plan:*:[span]:last:items-center plan:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="plan:absolute plan:right-2 plan:flex plan:size-3.5 plan:items-center plan:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="plan:size-4" />
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
      className={cn("plan:bg-border plan:pointer-events-none plan:-mx-1 plan:my-1 plan:h-px", className)}
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
        "plan:flex plan:cursor-default plan:items-center plan:justify-center plan:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="plan:size-4" />
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
        "plan:flex plan:cursor-default plan:items-center plan:justify-center plan:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="plan:size-4" />
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
