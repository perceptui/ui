import { cva } from "class-variance-authority";

export const passwordInputStyles = cva(
  [
    "w-96",
    "font-semibold",
    "focus:outline",
    "px-2 py-1",
    "text-slate-700 focus:border-blue-500",
    "bg-transparent dark:text-white",
  ],
  {
    variants: {
      variant: {
        classic: "transition-colors duration-300 border-2",
        standard: "transition-colors duration-300 border-b-2 border-t-0 border-l-0 border-r-0",
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
        className: `border-gray-700 dark:border-white`,
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
      radius: "lg",
    },
  }
);
