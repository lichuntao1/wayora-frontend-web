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
      className={cn("plan:border-b plan:last:border-b-0", className)}
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
    <AccordionPrimitive.Header className="plan:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "plan:focus-visible:border-ring plan:focus-visible:ring-ring/50 plan:flex plan:flex-1 plan:items-start plan:justify-between plan:gap-4 plan:rounded-md plan:py-4 plan:text-left plan:text-sm plan:font-medium plan:transition-all plan:outline-none plan:hover:underline plan:focus-visible:ring-[3px] plan:disabled:pointer-events-none plan:disabled:opacity-50 plan:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="plan:text-muted-foreground plan:pointer-events-none plan:size-4 plan:shrink-0 plan:translate-y-0.5 plan:transition-transform plan:duration-200" />
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
      className="plan:data-[state=closed]:animate-accordion-up plan:data-[state=open]:animate-accordion-down plan:overflow-hidden plan:text-sm"
      {...props}
    >
      <div className={cn("plan:pt-0 plan:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
