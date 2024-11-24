import { spinnerStyles } from "@/styles";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

type SpinnerProps = ComponentProps<"div"> & VariantProps<typeof spinnerStyles>;

export const Spinner = forwardRef<HTMLInputElement, SpinnerProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(spinnerStyles({ size, className, color }))}
    />
  )
);

Spinner.displayName = "Spinner";
