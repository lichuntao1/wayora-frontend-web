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
        "plan:bg-background plan:group/calendar plan:p-3 plan:[--cell-size:--spacing(8)] plan:[[data-slot=card-content]_&]:bg-transparent plan:[[data-slot=popover-content]_&]:bg-transparent",
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
        root: cn("plan:w-fit", defaultClassNames.root),
        months: cn(
          "plan:flex plan:gap-4 plan:flex-col plan:md:flex-row plan:relative",
          defaultClassNames.months
        ),
        month: cn("plan:flex plan:flex-col plan:w-full plan:gap-4", defaultClassNames.month),
        nav: cn(
          "plan:flex plan:items-center plan:gap-1 plan:w-full plan:absolute plan:top-0 plan:inset-x-0 plan:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "plan:size-(--cell-size) plan:aria-disabled:opacity-50 plan:p-0 plan:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "plan:size-(--cell-size) plan:aria-disabled:opacity-50 plan:p-0 plan:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "plan:flex plan:items-center plan:justify-center plan:h-(--cell-size) plan:w-full plan:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "plan:w-full plan:flex plan:items-center plan:text-sm plan:font-medium plan:justify-center plan:h-(--cell-size) plan:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "plan:relative plan:has-focus:border-ring plan:border plan:border-input plan:shadow-xs plan:has-focus:ring-ring/50 plan:has-focus:ring-[3px] plan:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "plan:absolute plan:bg-popover plan:inset-0 plan:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "plan:select-none plan:font-medium",
          captionLayout === "label"
            ? "plan:text-sm"
            : "plan:rounded-md plan:pl-2 plan:pr-1 plan:flex plan:items-center plan:gap-1 plan:text-sm plan:h-8 plan:[&>svg]:text-muted-foreground plan:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "plan:w-full plan:border-collapse",
        weekdays: cn("plan:flex", defaultClassNames.weekdays),
        weekday: cn(
          "plan:text-muted-foreground plan:rounded-md plan:flex-1 plan:font-normal plan:text-[0.8rem] plan:select-none",
          defaultClassNames.weekday
        ),
        week: cn("plan:flex plan:w-full plan:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "plan:select-none plan:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "plan:text-[0.8rem] plan:select-none plan:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "plan:relative plan:w-full plan:h-full plan:p-0 plan:text-center plan:[&:first-child[data-selected=true]_button]:rounded-l-md plan:[&:last-child[data-selected=true]_button]:rounded-r-md plan:group/day plan:aspect-square plan:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "plan:rounded-l-md plan:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("plan:rounded-none", defaultClassNames.range_middle),
        range_end: cn("plan:rounded-r-md plan:bg-accent", defaultClassNames.range_end),
        today: cn(
          "plan:bg-accent plan:text-accent-foreground plan:rounded-md plan:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "plan:text-muted-foreground plan:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "plan:text-muted-foreground plan:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("plan:invisible", defaultClassNames.hidden),
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
              <ChevronLeftIcon className={cn("plan:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("plan:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("plan:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="plan:flex plan:size-(--cell-size) plan:items-center plan:justify-center plan:text-center">
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
        "plan:data-[selected-single=true]:bg-primary plan:data-[selected-single=true]:text-primary-foreground plan:data-[range-middle=true]:bg-accent plan:data-[range-middle=true]:text-accent-foreground plan:data-[range-start=true]:bg-primary plan:data-[range-start=true]:text-primary-foreground plan:data-[range-end=true]:bg-primary plan:data-[range-end=true]:text-primary-foreground plan:group-data-[focused=true]/day:border-ring plan:group-data-[focused=true]/day:ring-ring/50 plan:dark:hover:text-accent-foreground plan:flex plan:aspect-square plan:size-auto plan:w-full plan:min-w-(--cell-size) plan:flex-col plan:gap-1 plan:leading-none plan:font-normal plan:group-data-[focused=true]/day:relative plan:group-data-[focused=true]/day:z-10 plan:group-data-[focused=true]/day:ring-[3px] plan:data-[range-end=true]:rounded-md plan:data-[range-end=true]:rounded-r-md plan:data-[range-middle=true]:rounded-none plan:data-[range-start=true]:rounded-md plan:data-[range-start=true]:rounded-l-md plan:[&>span]:text-xs plan:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
