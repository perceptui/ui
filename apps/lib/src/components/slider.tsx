import { sliderStyles } from "@/styles";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

type SliderProps = ComponentProps<"input"> & VariantProps<typeof sliderStyles>;

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <input
      type="range"
      {...props}
      ref={forwardedRef}
      className={cn(sliderStyles({ size, className, color }))}
    />
  )
);

Slider.displayName = "Slider";
