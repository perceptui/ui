import { checkboxStyles } from "@/styles";
import { CheckboxProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, className, children, ...props }, forwardedRef) => (
    <div className="flex items-center justify-start gap-3">
      <input
        id="checkbox"
        {...props}
        ref={forwardedRef}
        type="checkbox"
        className={cn(
          className,
          checkboxStyles({ size, color, className, ...props })
        )}
      />
      <label htmlFor="checkbox">{children}</label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";
