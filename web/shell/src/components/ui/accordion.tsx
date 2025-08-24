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
      className={cn("shell:border-b shell:last:border-b-0", className)}
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
    <AccordionPrimitive.Header className="shell:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "shell:focus-visible:border-ring shell:focus-visible:ring-ring/50 shell:flex shell:flex-1 shell:items-start shell:justify-between shell:gap-4 shell:rounded-md shell:py-4 shell:text-left shell:text-sm shell:font-medium shell:transition-all shell:outline-none shell:hover:underline shell:focus-visible:ring-[3px] shell:disabled:pointer-events-none shell:disabled:opacity-50 shell:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="shell:text-muted-foreground shell:pointer-events-none shell:size-4 shell:shrink-0 shell:translate-y-0.5 shell:transition-transform shell:duration-200" />
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
      className="shell:data-[state=closed]:animate-accordion-up shell:data-[state=open]:animate-accordion-down shell:overflow-hidden shell:text-sm"
      {...props}
    >
      <div className={cn("shell:pt-0 shell:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
