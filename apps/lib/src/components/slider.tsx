import { sliderStyles } from "@/styles";
import { sliderStylesProps } from "@/styles/recipe.types";
import { SliderProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export type SliderProp = SliderProps &
  sliderStylesProps & {
    className?: string;
  };

export const Slider = forwardRef<HTMLInputElement, SliderProp>(
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
