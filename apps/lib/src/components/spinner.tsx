import { spinnerStyles } from "@/styles";
import { spinnerStylesProps } from "@/styles/recipe.types";
import { SpinnerProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export type SpinnerProp = SpinnerProps &
  spinnerStylesProps & {
    className?: string;
  };

export const Spinner = forwardRef<HTMLInputElement, SpinnerProp>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(className, spinnerStyles({ size, className, color }))}
    />
  )
);

Spinner.displayName = "Spinner";
