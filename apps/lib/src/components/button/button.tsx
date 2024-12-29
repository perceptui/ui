import { cn } from "@/utils";
import { forwardRef } from "react";

import { buttonStyles } from "@/styles";
import { ButtonProps } from "@/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, radius, color, className, ...props }, forwardedRef) => (
    <button
      {...props}
      ref={forwardedRef}
      className={cn(buttonStyles({ variant, size, radius, color, className }))}
    />
  )
);

Button.displayName = "Button";
