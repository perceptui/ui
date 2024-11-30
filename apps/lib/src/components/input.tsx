import { cn } from "@/utils";
import { forwardRef } from "react";
import { inputStyles } from "@/styles";
import { InputProps } from "@/types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, radius, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={cn(inputStyles({ variant, className, radius, ...props }))}
    />
  )
);

Input.displayName = "Input";
