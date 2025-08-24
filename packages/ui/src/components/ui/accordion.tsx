import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("UI:border-b UI:last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="UI:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "UI:focus-visible:border-ring UI:focus-visible:ring-ring/50 UI:flex UI:flex-1 UI:items-start UI:justify-between UI:gap-4 UI:rounded-md UI:py-4 UI:text-left UI:text-sm UI:font-medium UI:transition-all UI:outline-none UI:hover:underline UI:focus-visible:ring-[3px] UI:disabled:pointer-events-none UI:disabled:opacity-50 UI:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="UI:text-muted-foreground UI:pointer-events-none UI:size-4 UI:shrink-0 UI:translate-y-0.5 UI:transition-transform UI:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="UI:data-[state=closed]:animate-accordion-up UI:data-[state=open]:animate-accordion-down UI:overflow-hidden UI:text-sm"
      {...props}
    >
      <div className={cn("UI:pt-0 UI:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
