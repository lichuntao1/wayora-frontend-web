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
        "shell:bg-background shell:group/calendar shell:p-3 shell:[--cell-size:--spacing(8)] shell:[[data-slot=card-content]_&]:bg-transparent shell:[[data-slot=popover-content]_&]:bg-transparent",
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
        root: cn("shell:w-fit", defaultClassNames.root),
        months: cn(
          "shell:flex shell:gap-4 shell:flex-col shell:md:flex-row shell:relative",
          defaultClassNames.months
        ),
        month: cn("shell:flex shell:flex-col shell:w-full shell:gap-4", defaultClassNames.month),
        nav: cn(
          "shell:flex shell:items-center shell:gap-1 shell:w-full shell:absolute shell:top-0 shell:inset-x-0 shell:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "shell:size-(--cell-size) shell:aria-disabled:opacity-50 shell:p-0 shell:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "shell:size-(--cell-size) shell:aria-disabled:opacity-50 shell:p-0 shell:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "shell:flex shell:items-center shell:justify-center shell:h-(--cell-size) shell:w-full shell:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "shell:w-full shell:flex shell:items-center shell:text-sm shell:font-medium shell:justify-center shell:h-(--cell-size) shell:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "shell:relative shell:has-focus:border-ring shell:border shell:border-input shell:shadow-xs shell:has-focus:ring-ring/50 shell:has-focus:ring-[3px] shell:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "shell:absolute shell:bg-popover shell:inset-0 shell:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "shell:select-none shell:font-medium",
          captionLayout === "label"
            ? "shell:text-sm"
            : "shell:rounded-md shell:pl-2 shell:pr-1 shell:flex shell:items-center shell:gap-1 shell:text-sm shell:h-8 shell:[&>svg]:text-muted-foreground shell:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "shell:w-full shell:border-collapse",
        weekdays: cn("shell:flex", defaultClassNames.weekdays),
        weekday: cn(
          "shell:text-muted-foreground shell:rounded-md shell:flex-1 shell:font-normal shell:text-[0.8rem] shell:select-none",
          defaultClassNames.weekday
        ),
        week: cn("shell:flex shell:w-full shell:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "shell:select-none shell:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "shell:text-[0.8rem] shell:select-none shell:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "shell:relative shell:w-full shell:h-full shell:p-0 shell:text-center shell:[&:first-child[data-selected=true]_button]:rounded-l-md shell:[&:last-child[data-selected=true]_button]:rounded-r-md shell:group/day shell:aspect-square shell:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "shell:rounded-l-md shell:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("shell:rounded-none", defaultClassNames.range_middle),
        range_end: cn("shell:rounded-r-md shell:bg-accent", defaultClassNames.range_end),
        today: cn(
          "shell:bg-accent shell:text-accent-foreground shell:rounded-md shell:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "shell:text-muted-foreground shell:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "shell:text-muted-foreground shell:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("shell:invisible", defaultClassNames.hidden),
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
              <ChevronLeftIcon className={cn("shell:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("shell:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("shell:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="shell:flex shell:size-(--cell-size) shell:items-center shell:justify-center shell:text-center">
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
        "shell:data-[selected-single=true]:bg-primary shell:data-[selected-single=true]:text-primary-foreground shell:data-[range-middle=true]:bg-accent shell:data-[range-middle=true]:text-accent-foreground shell:data-[range-start=true]:bg-primary shell:data-[range-start=true]:text-primary-foreground shell:data-[range-end=true]:bg-primary shell:data-[range-end=true]:text-primary-foreground shell:group-data-[focused=true]/day:border-ring shell:group-data-[focused=true]/day:ring-ring/50 shell:dark:hover:text-accent-foreground shell:flex shell:aspect-square shell:size-auto shell:w-full shell:min-w-(--cell-size) shell:flex-col shell:gap-1 shell:leading-none shell:font-normal shell:group-data-[focused=true]/day:relative shell:group-data-[focused=true]/day:z-10 shell:group-data-[focused=true]/day:ring-[3px] shell:data-[range-end=true]:rounded-md shell:data-[range-end=true]:rounded-r-md shell:data-[range-middle=true]:rounded-none shell:data-[range-start=true]:rounded-md shell:data-[range-start=true]:rounded-l-md shell:[&>span]:text-xs shell:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
