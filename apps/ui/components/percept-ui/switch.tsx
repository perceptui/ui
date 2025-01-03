"use client";
import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

import { cva, VariantProps } from "class-variance-authority";

export const switchVariants = cva([
  "border-2 border-foreground rounded-full transition-colors duration-300 border-0",
  "peer appearance-none rounded-full cursor-pointer transition-colors duration-300 w-16 h-7",
]);

export const switchButtonVariants = cva([
  "focus:outline-none",
  "transition-colors duration-300",
  "absolute inset-y-1 left-1 rounded-full transition-transform duration-300 peer-checked:border-slate-800 cursor-pointer w-5 h-5 peer-checked:translate-x-9 transition-all duration-300 ease-in-out bg-white dark:bg-black border-2 border-foreground",
]);

export type SwitchProps = VariantProps<typeof switchVariants> &
  VariantProps<typeof switchButtonVariants> & {
    className?: string;
    id?: string;
  };
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="relative inline-block peer">
        <input
          onClick={() => setChecked(!checked)}
          {...props}
          ref={ref}
          id={props.id || "switch-component"}
          type="checkbox"
          className={cn(
            switchVariants({}),
            className,
            `${
              checked
                ? "bg-black dark:bg-white transition-all duration-300 ease-in-out"
                : "bg-slate-300 dark:bg-slate-800"
            }`
          )}
        />
        <label
          htmlFor={props.id || "switch-component"}
          className={cn(switchButtonVariants({}))}
        ></label>
      </div>
    );
  }
);

Switch.displayName = "Switch";
