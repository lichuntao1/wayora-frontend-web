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
        "shell:border-input shell:data-[placeholder]:text-muted-foreground shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:aria-invalid:ring-destructive/20 shell:dark:aria-invalid:ring-destructive/40 shell:aria-invalid:border-destructive shell:dark:bg-input/30 shell:dark:hover:bg-input/50 shell:flex shell:w-fit shell:items-center shell:justify-between shell:gap-2 shell:rounded-md shell:border shell:bg-transparent shell:px-3 shell:py-2 shell:text-sm shell:whitespace-nowrap shell:shadow-xs shell:transition-[color,box-shadow] shell:outline-none shell:focus-visible:ring-[3px] shell:disabled:cursor-not-allowed shell:disabled:opacity-50 shell:data-[size=default]:h-9 shell:data-[size=sm]:h-8 shell:*:data-[slot=select-value]:line-clamp-1 shell:*:data-[slot=select-value]:flex shell:*:data-[slot=select-value]:items-center shell:*:data-[slot=select-value]:gap-2 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="shell:size-4 shell:opacity-50" />
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
          "shell:bg-popover shell:text-popover-foreground shell:data-[state=open]:animate-in shell:data-[state=closed]:animate-out shell:data-[state=closed]:fade-out-0 shell:data-[state=open]:fade-in-0 shell:data-[state=closed]:zoom-out-95 shell:data-[state=open]:zoom-in-95 shell:data-[side=bottom]:slide-in-from-top-2 shell:data-[side=left]:slide-in-from-right-2 shell:data-[side=right]:slide-in-from-left-2 shell:data-[side=top]:slide-in-from-bottom-2 shell:relative shell:z-50 shell:max-h-(--radix-select-content-available-height) shell:min-w-[8rem] shell:origin-(--radix-select-content-transform-origin) shell:overflow-x-hidden shell:overflow-y-auto shell:rounded-md shell:border shell:shadow-md",
          position === "popper" &&
            "shell:data-[side=bottom]:translate-y-1 shell:data-[side=left]:-translate-x-1 shell:data-[side=right]:translate-x-1 shell:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "shell:p-1",
            position === "popper" &&
              "shell:h-[var(--radix-select-trigger-height)] shell:w-full shell:min-w-[var(--radix-select-trigger-width)] shell:scroll-my-1"
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
      className={cn("shell:text-muted-foreground shell:px-2 shell:py-1.5 shell:text-xs", className)}
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
        "shell:focus:bg-accent shell:focus:text-accent-foreground shell:[&_svg:not([class*=text-])]:text-muted-foreground shell:relative shell:flex shell:w-full shell:cursor-default shell:items-center shell:gap-2 shell:rounded-sm shell:py-1.5 shell:pr-8 shell:pl-2 shell:text-sm shell:outline-hidden shell:select-none shell:data-[disabled]:pointer-events-none shell:data-[disabled]:opacity-50 shell:[&_svg]:pointer-events-none shell:[&_svg]:shrink-0 shell:[&_svg:not([class*=size-])]:size-4 shell:*:[span]:last:flex shell:*:[span]:last:items-center shell:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="shell:absolute shell:right-2 shell:flex shell:size-3.5 shell:items-center shell:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="shell:size-4" />
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
      className={cn("shell:bg-border shell:pointer-events-none shell:-mx-1 shell:my-1 shell:h-px", className)}
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
        "shell:flex shell:cursor-default shell:items-center shell:justify-center shell:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="shell:size-4" />
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
        "shell:flex shell:cursor-default shell:items-center shell:justify-center shell:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="shell:size-4" />
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
