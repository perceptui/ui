import { cva } from "class-variance-authority";

export const inputStyles = cva(
  [
    "w-96",
    "font-semibold",
    "focus:outline-none",
    "px-2 py-1",
    "text-slate-700 focus:border-blue-500 ",
    "bg-transparent",
  ],
  {
    variants: {
      variant: {
        classic: "transition-colors duration-300 border",
        standard: "transition-colors duration-300 border-b",
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
        className: `focus:shadow-sm focus:shadow-blue-400 rounded-md border-gray-300`,
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
