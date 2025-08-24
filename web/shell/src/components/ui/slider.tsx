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
        "shell:relative shell:flex shell:w-full shell:touch-none shell:items-center shell:select-none shell:data-[disabled]:opacity-50 shell:data-[orientation=vertical]:h-full shell:data-[orientation=vertical]:min-h-44 shell:data-[orientation=vertical]:w-auto shell:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "shell:bg-muted shell:relative shell:grow shell:overflow-hidden shell:rounded-full shell:data-[orientation=horizontal]:h-1.5 shell:data-[orientation=horizontal]:w-full shell:data-[orientation=vertical]:h-full shell:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "shell:bg-primary shell:absolute shell:data-[orientation=horizontal]:h-full shell:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="shell:border-primary shell:bg-background shell:ring-ring/50 shell:block shell:size-4 shell:shrink-0 shell:rounded-full shell:border shell:shadow-sm shell:transition-[color,box-shadow] shell:hover:ring-4 shell:focus-visible:ring-4 shell:focus-visible:outline-hidden shell:disabled:pointer-events-none shell:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
