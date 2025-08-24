"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "UI:relative UI:flex UI:w-full UI:touch-none UI:items-center UI:select-none UI:data-[disabled]:opacity-50 UI:data-[orientation=vertical]:h-full UI:data-[orientation=vertical]:min-h-44 UI:data-[orientation=vertical]:w-auto UI:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "UI:bg-muted UI:relative UI:grow UI:overflow-hidden UI:rounded-full UI:data-[orientation=horizontal]:h-1.5 UI:data-[orientation=horizontal]:w-full UI:data-[orientation=vertical]:h-full UI:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "UI:bg-primary UI:absolute UI:data-[orientation=horizontal]:h-full UI:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="UI:border-primary UI:bg-background UI:ring-ring/50 UI:block UI:size-4 UI:shrink-0 UI:rounded-full UI:border UI:shadow-sm UI:transition-[color,box-shadow] UI:hover:ring-4 UI:focus-visible:ring-4 UI:focus-visible:outline-hidden UI:disabled:pointer-events-none UI:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
