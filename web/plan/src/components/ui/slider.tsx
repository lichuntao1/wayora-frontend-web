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
        "plan:relative plan:flex plan:w-full plan:touch-none plan:items-center plan:select-none plan:data-[disabled]:opacity-50 plan:data-[orientation=vertical]:h-full plan:data-[orientation=vertical]:min-h-44 plan:data-[orientation=vertical]:w-auto plan:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "plan:bg-muted plan:relative plan:grow plan:overflow-hidden plan:rounded-full plan:data-[orientation=horizontal]:h-1.5 plan:data-[orientation=horizontal]:w-full plan:data-[orientation=vertical]:h-full plan:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "plan:bg-primary plan:absolute plan:data-[orientation=horizontal]:h-full plan:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="plan:border-primary plan:bg-background plan:ring-ring/50 plan:block plan:size-4 plan:shrink-0 plan:rounded-full plan:border plan:shadow-sm plan:transition-[color,box-shadow] plan:hover:ring-4 plan:focus-visible:ring-4 plan:focus-visible:outline-hidden plan:disabled:pointer-events-none plan:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
