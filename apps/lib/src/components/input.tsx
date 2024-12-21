import { cn } from "@/utils";
import { forwardRef } from "react";
import { inputStyles } from "@/styles";
import { InputProps } from "@/types";
import { inputStylesProps } from "@/styles/recipe.types";

export type inputProp = InputProps &
  inputStylesProps & {
    className?: string;
  };

export const Input = forwardRef<HTMLInputElement, inputProp>(
  ({ variant, className, radius, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={cn(
        className,
        inputStyles({ variant, className, radius, ...props })
      )}
    />
  )
);

Input.displayName = "Input";
