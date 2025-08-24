import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "hotel:bg-background hotel:group/calendar hotel:p-3 hotel:[--cell-size:--spacing(8)] hotel:[[data-slot=card-content]_&]:bg-transparent hotel:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("hotel:w-fit", defaultClassNames.root),
        months: cn(
          "hotel:flex hotel:gap-4 hotel:flex-col hotel:md:flex-row hotel:relative",
          defaultClassNames.months
        ),
        month: cn("hotel:flex hotel:flex-col hotel:w-full hotel:gap-4", defaultClassNames.month),
        nav: cn(
          "hotel:flex hotel:items-center hotel:gap-1 hotel:w-full hotel:absolute hotel:top-0 hotel:inset-x-0 hotel:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "hotel:size-(--cell-size) hotel:aria-disabled:opacity-50 hotel:p-0 hotel:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "hotel:size-(--cell-size) hotel:aria-disabled:opacity-50 hotel:p-0 hotel:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "hotel:flex hotel:items-center hotel:justify-center hotel:h-(--cell-size) hotel:w-full hotel:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "hotel:w-full hotel:flex hotel:items-center hotel:text-sm hotel:font-medium hotel:justify-center hotel:h-(--cell-size) hotel:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "hotel:relative hotel:has-focus:border-ring hotel:border hotel:border-input hotel:shadow-xs hotel:has-focus:ring-ring/50 hotel:has-focus:ring-[3px] hotel:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "hotel:absolute hotel:bg-popover hotel:inset-0 hotel:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "hotel:select-none hotel:font-medium",
          captionLayout === "label"
            ? "hotel:text-sm"
            : "hotel:rounded-md hotel:pl-2 hotel:pr-1 hotel:flex hotel:items-center hotel:gap-1 hotel:text-sm hotel:h-8 hotel:[&>svg]:text-muted-foreground hotel:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "hotel:w-full hotel:border-collapse",
        weekdays: cn("hotel:flex", defaultClassNames.weekdays),
        weekday: cn(
          "hotel:text-muted-foreground hotel:rounded-md hotel:flex-1 hotel:font-normal hotel:text-[0.8rem] hotel:select-none",
          defaultClassNames.weekday
        ),
        week: cn("hotel:flex hotel:w-full hotel:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "hotel:select-none hotel:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "hotel:text-[0.8rem] hotel:select-none hotel:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "hotel:relative hotel:w-full hotel:h-full hotel:p-0 hotel:text-center hotel:[&:first-child[data-selected=true]_button]:rounded-l-md hotel:[&:last-child[data-selected=true]_button]:rounded-r-md hotel:group/day hotel:aspect-square hotel:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "hotel:rounded-l-md hotel:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("hotel:rounded-none", defaultClassNames.range_middle),
        range_end: cn("hotel:rounded-r-md hotel:bg-accent", defaultClassNames.range_end),
        today: cn(
          "hotel:bg-accent hotel:text-accent-foreground hotel:rounded-md hotel:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "hotel:text-muted-foreground hotel:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "hotel:text-muted-foreground hotel:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("hotel:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("hotel:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("hotel:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("hotel:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="hotel:flex hotel:size-(--cell-size) hotel:items-center hotel:justify-center hotel:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "hotel:data-[selected-single=true]:bg-primary hotel:data-[selected-single=true]:text-primary-foreground hotel:data-[range-middle=true]:bg-accent hotel:data-[range-middle=true]:text-accent-foreground hotel:data-[range-start=true]:bg-primary hotel:data-[range-start=true]:text-primary-foreground hotel:data-[range-end=true]:bg-primary hotel:data-[range-end=true]:text-primary-foreground hotel:group-data-[focused=true]/day:border-ring hotel:group-data-[focused=true]/day:ring-ring/50 hotel:dark:hover:text-accent-foreground hotel:flex hotel:aspect-square hotel:size-auto hotel:w-full hotel:min-w-(--cell-size) hotel:flex-col hotel:gap-1 hotel:leading-none hotel:font-normal hotel:group-data-[focused=true]/day:relative hotel:group-data-[focused=true]/day:z-10 hotel:group-data-[focused=true]/day:ring-[3px] hotel:data-[range-end=true]:rounded-md hotel:data-[range-end=true]:rounded-r-md hotel:data-[range-middle=true]:rounded-none hotel:data-[range-start=true]:rounded-md hotel:data-[range-start=true]:rounded-l-md hotel:[&>span]:text-xs hotel:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
