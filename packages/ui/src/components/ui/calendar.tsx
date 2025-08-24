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
        "UI:bg-background UI:group/calendar UI:p-3 UI:[--cell-size:--spacing(8)] UI:[[data-slot=card-content]_&]:bg-transparent UI:[[data-slot=popover-content]_&]:bg-transparent",
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
        root: cn("UI:w-fit", defaultClassNames.root),
        months: cn(
          "UI:flex UI:gap-4 UI:flex-col UI:md:flex-row UI:relative",
          defaultClassNames.months
        ),
        month: cn("UI:flex UI:flex-col UI:w-full UI:gap-4", defaultClassNames.month),
        nav: cn(
          "UI:flex UI:items-center UI:gap-1 UI:w-full UI:absolute UI:top-0 UI:inset-x-0 UI:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "UI:size-(--cell-size) UI:aria-disabled:opacity-50 UI:p-0 UI:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "UI:size-(--cell-size) UI:aria-disabled:opacity-50 UI:p-0 UI:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "UI:flex UI:items-center UI:justify-center UI:h-(--cell-size) UI:w-full UI:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "UI:w-full UI:flex UI:items-center UI:text-sm UI:font-medium UI:justify-center UI:h-(--cell-size) UI:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "UI:relative UI:has-focus:border-ring UI:border UI:border-input UI:shadow-xs UI:has-focus:ring-ring/50 UI:has-focus:ring-[3px] UI:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "UI:absolute UI:bg-popover UI:inset-0 UI:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "UI:select-none UI:font-medium",
          captionLayout === "label"
            ? "UI:text-sm"
            : "UI:rounded-md UI:pl-2 UI:pr-1 UI:flex UI:items-center UI:gap-1 UI:text-sm UI:h-8 UI:[&>svg]:text-muted-foreground UI:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "UI:w-full UI:border-collapse",
        weekdays: cn("UI:flex", defaultClassNames.weekdays),
        weekday: cn(
          "UI:text-muted-foreground UI:rounded-md UI:flex-1 UI:font-normal UI:text-[0.8rem] UI:select-none",
          defaultClassNames.weekday
        ),
        week: cn("UI:flex UI:w-full UI:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "UI:select-none UI:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "UI:text-[0.8rem] UI:select-none UI:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "UI:relative UI:w-full UI:h-full UI:p-0 UI:text-center UI:[&:first-child[data-selected=true]_button]:rounded-l-md UI:[&:last-child[data-selected=true]_button]:rounded-r-md UI:group/day UI:aspect-square UI:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "UI:rounded-l-md UI:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("UI:rounded-none", defaultClassNames.range_middle),
        range_end: cn("UI:rounded-r-md UI:bg-accent", defaultClassNames.range_end),
        today: cn(
          "UI:bg-accent UI:text-accent-foreground UI:rounded-md UI:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "UI:text-muted-foreground UI:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "UI:text-muted-foreground UI:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("UI:invisible", defaultClassNames.hidden),
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
              <ChevronLeftIcon className={cn("UI:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("UI:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("UI:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="UI:flex UI:size-(--cell-size) UI:items-center UI:justify-center UI:text-center">
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
        "UI:data-[selected-single=true]:bg-primary UI:data-[selected-single=true]:text-primary-foreground UI:data-[range-middle=true]:bg-accent UI:data-[range-middle=true]:text-accent-foreground UI:data-[range-start=true]:bg-primary UI:data-[range-start=true]:text-primary-foreground UI:data-[range-end=true]:bg-primary UI:data-[range-end=true]:text-primary-foreground UI:group-data-[focused=true]/day:border-ring UI:group-data-[focused=true]/day:ring-ring/50 UI:dark:hover:text-accent-foreground UI:flex UI:aspect-square UI:size-auto UI:w-full UI:min-w-(--cell-size) UI:flex-col UI:gap-1 UI:leading-none UI:font-normal UI:group-data-[focused=true]/day:relative UI:group-data-[focused=true]/day:z-10 UI:group-data-[focused=true]/day:ring-[3px] UI:data-[range-end=true]:rounded-md UI:data-[range-end=true]:rounded-r-md UI:data-[range-middle=true]:rounded-none UI:data-[range-start=true]:rounded-md UI:data-[range-start=true]:rounded-l-md UI:[&>span]:text-xs UI:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
