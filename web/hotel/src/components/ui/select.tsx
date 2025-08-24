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
        "hotel:border-input hotel:data-[placeholder]:text-muted-foreground hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:aria-invalid:ring-destructive/20 hotel:dark:aria-invalid:ring-destructive/40 hotel:aria-invalid:border-destructive hotel:dark:bg-input/30 hotel:dark:hover:bg-input/50 hotel:flex hotel:w-fit hotel:items-center hotel:justify-between hotel:gap-2 hotel:rounded-md hotel:border hotel:bg-transparent hotel:px-3 hotel:py-2 hotel:text-sm hotel:whitespace-nowrap hotel:shadow-xs hotel:transition-[color,box-shadow] hotel:outline-none hotel:focus-visible:ring-[3px] hotel:disabled:cursor-not-allowed hotel:disabled:opacity-50 hotel:data-[size=default]:h-9 hotel:data-[size=sm]:h-8 hotel:*:data-[slot=select-value]:line-clamp-1 hotel:*:data-[slot=select-value]:flex hotel:*:data-[slot=select-value]:items-center hotel:*:data-[slot=select-value]:gap-2 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="hotel:size-4 hotel:opacity-50" />
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
          "hotel:bg-popover hotel:text-popover-foreground hotel:data-[state=open]:animate-in hotel:data-[state=closed]:animate-out hotel:data-[state=closed]:fade-out-0 hotel:data-[state=open]:fade-in-0 hotel:data-[state=closed]:zoom-out-95 hotel:data-[state=open]:zoom-in-95 hotel:data-[side=bottom]:slide-in-from-top-2 hotel:data-[side=left]:slide-in-from-right-2 hotel:data-[side=right]:slide-in-from-left-2 hotel:data-[side=top]:slide-in-from-bottom-2 hotel:relative hotel:z-50 hotel:max-h-(--radix-select-content-available-height) hotel:min-w-[8rem] hotel:origin-(--radix-select-content-transform-origin) hotel:overflow-x-hidden hotel:overflow-y-auto hotel:rounded-md hotel:border hotel:shadow-md",
          position === "popper" &&
            "hotel:data-[side=bottom]:translate-y-1 hotel:data-[side=left]:-translate-x-1 hotel:data-[side=right]:translate-x-1 hotel:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "hotel:p-1",
            position === "popper" &&
              "hotel:h-[var(--radix-select-trigger-height)] hotel:w-full hotel:min-w-[var(--radix-select-trigger-width)] hotel:scroll-my-1"
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
      className={cn("hotel:text-muted-foreground hotel:px-2 hotel:py-1.5 hotel:text-xs", className)}
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
        "hotel:focus:bg-accent hotel:focus:text-accent-foreground hotel:[&_svg:not([class*=text-])]:text-muted-foreground hotel:relative hotel:flex hotel:w-full hotel:cursor-default hotel:items-center hotel:gap-2 hotel:rounded-sm hotel:py-1.5 hotel:pr-8 hotel:pl-2 hotel:text-sm hotel:outline-hidden hotel:select-none hotel:data-[disabled]:pointer-events-none hotel:data-[disabled]:opacity-50 hotel:[&_svg]:pointer-events-none hotel:[&_svg]:shrink-0 hotel:[&_svg:not([class*=size-])]:size-4 hotel:*:[span]:last:flex hotel:*:[span]:last:items-center hotel:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="hotel:absolute hotel:right-2 hotel:flex hotel:size-3.5 hotel:items-center hotel:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="hotel:size-4" />
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
      className={cn("hotel:bg-border hotel:pointer-events-none hotel:-mx-1 hotel:my-1 hotel:h-px", className)}
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
        "hotel:flex hotel:cursor-default hotel:items-center hotel:justify-center hotel:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="hotel:size-4" />
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
        "hotel:flex hotel:cursor-default hotel:items-center hotel:justify-center hotel:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="hotel:size-4" />
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
