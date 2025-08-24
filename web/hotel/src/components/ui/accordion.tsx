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
      className={cn("hotel:border-b hotel:last:border-b-0", className)}
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
    <AccordionPrimitive.Header className="hotel:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "hotel:focus-visible:border-ring hotel:focus-visible:ring-ring/50 hotel:flex hotel:flex-1 hotel:items-start hotel:justify-between hotel:gap-4 hotel:rounded-md hotel:py-4 hotel:text-left hotel:text-sm hotel:font-medium hotel:transition-all hotel:outline-none hotel:hover:underline hotel:focus-visible:ring-[3px] hotel:disabled:pointer-events-none hotel:disabled:opacity-50 hotel:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="hotel:text-muted-foreground hotel:pointer-events-none hotel:size-4 hotel:shrink-0 hotel:translate-y-0.5 hotel:transition-transform hotel:duration-200" />
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
      className="hotel:data-[state=closed]:animate-accordion-up hotel:data-[state=open]:animate-accordion-down hotel:overflow-hidden hotel:text-sm"
      {...props}
    >
      <div className={cn("hotel:pt-0 hotel:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
