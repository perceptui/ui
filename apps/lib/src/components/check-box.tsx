import { checkboxStyles } from "@/styles";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, className, children, ...props }, forwardedRef) => (
    <div className="flex items-center justify-start gap-3">
      <input
        id="checkbox"
        {...props}
        ref={forwardedRef}
        type="checkbox"
        className={cn(checkboxStyles({ size, color, className, ...props }))}
      />
      <label htmlFor="checkbox">{children}</label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";
