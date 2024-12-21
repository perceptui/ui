import { LabelProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export type LabelProp = LabelProps & {
  className?: string;
};

export const Label = forwardRef<HTMLLabelElement, LabelProp>(
  ({ className, children, ...props }, forwardedRef) => (
    <label
      {...props}
      ref={forwardedRef}
      className={cn(className, { ...props })}
    >
      {children}
    </label>
  )
);

Label.displayName = "Label";
