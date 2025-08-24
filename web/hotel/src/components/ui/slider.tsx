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
        "hotel:relative hotel:flex hotel:w-full hotel:touch-none hotel:items-center hotel:select-none hotel:data-[disabled]:opacity-50 hotel:data-[orientation=vertical]:h-full hotel:data-[orientation=vertical]:min-h-44 hotel:data-[orientation=vertical]:w-auto hotel:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "hotel:bg-muted hotel:relative hotel:grow hotel:overflow-hidden hotel:rounded-full hotel:data-[orientation=horizontal]:h-1.5 hotel:data-[orientation=horizontal]:w-full hotel:data-[orientation=vertical]:h-full hotel:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "hotel:bg-primary hotel:absolute hotel:data-[orientation=horizontal]:h-full hotel:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="hotel:border-primary hotel:bg-background hotel:ring-ring/50 hotel:block hotel:size-4 hotel:shrink-0 hotel:rounded-full hotel:border hotel:shadow-sm hotel:transition-[color,box-shadow] hotel:hover:ring-4 hotel:focus-visible:ring-4 hotel:focus-visible:outline-hidden hotel:disabled:pointer-events-none hotel:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
