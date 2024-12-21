import { cn } from "@/utils";
import { forwardRef } from "react";

import { buttonStyles } from "@/styles";
import { ButtonProps } from "@/types";
import { buttonStylesProps } from "@/styles/recipe.types";

export type buttonProp = ButtonProps & buttonStylesProps;

export const Button = forwardRef<HTMLButtonElement, buttonProp>(
  ({ variant, size, radius, color, className, ...props }, forwardedRef) => (
    <button
      {...props}
      ref={forwardedRef}
      className={cn(buttonStyles({ variant, size, radius, color, className }))}
    />
  )
);

Button.displayName = "Button";
