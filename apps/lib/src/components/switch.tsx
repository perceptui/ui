import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { switchStyles, switchButtonVariants } from "@/styles";

type SwitchProps = ComponentProps<"input"> &
  VariantProps<typeof switchStyles> &
  VariantProps<typeof switchButtonVariants> & {
    color?: string;
    size?: string;
  };

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, color, size, ...props }, ref) => (
    <div className="relative inline-block">
      <input
        {...props}
        ref={ref}
        id={props.id || "switch-component"}
        type="checkbox"
        className={cn(
          switchStyles({
            size,
          }),
          className
        )}
      />
      <label
        htmlFor={props.id || "switch-component"}
        className={cn(
          switchButtonVariants({
            color,
            size,
          })
        )}
      ></label>
    </div>
  )
);

Switch.displayName = "Switch";
