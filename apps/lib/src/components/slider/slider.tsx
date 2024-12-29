import { sliderStyles } from "@/styles";
import { SliderProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";


export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <input
      type="range"
      {...props}
      ref={forwardedRef}
      className={cn(className, sliderStyles({ size, className, color }))}
    />
  )
);

Slider.displayName = "Slider";
