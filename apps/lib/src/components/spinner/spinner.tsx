import { spinnerStyles } from "@/styles";
import { SpinnerProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export const Spinner = forwardRef<HTMLInputElement, SpinnerProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(className, spinnerStyles({ size, className, color }))}
    />
  )
);

Spinner.displayName = "Spinner";
