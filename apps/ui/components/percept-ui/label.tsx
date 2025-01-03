"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

export type LabelProps = ComponentProps<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
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
