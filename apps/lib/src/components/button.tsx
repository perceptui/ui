import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

import { buttonStyles } from "@/styles/button.styles";

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

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
