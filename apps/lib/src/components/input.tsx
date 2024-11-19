import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { inputStyles } from "@/styles";

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

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