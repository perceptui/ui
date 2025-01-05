import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  [
    "w-full",
    "font-semibold",
    "focus:outline-none",
    "px-2 py-1",
    "text-slate-700 focus:border-blue-500 ",
    "bg-transparent dark:text-white",
  ],
  {
    variants: {
      variant: {
        classic: "transition-colors duration-300 border-2 border-foreground",
        standard: "transition-colors duration-300 border-b-2 border-b-foreground",
        ghost: "border-0 transition-colors duration-300",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "classic",
        className: `focus:shadow-sm focus:shadow-blue-400 border-gray-300`,
      },
      {
        variant: "standard",
        className: `rounded-none`,
      },
      {
        variant: "ghost",
        className: ``,
      },
    ],
    defaultVariants: {
      variant: "classic",
      radius: "md",
    },
  }
);

export type InputProps = VariantProps<typeof inputVariants> &
  ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, radius, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={cn(
        className,
        inputVariants({ variant, className, radius, ...props })
      )}
    />
  )
);

Input.displayName = "Input";
