import { cva } from "class-variance-authority";

const types = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "blue",
};

export type AlertColorTypes = keyof typeof types;

const typeClasses = {
  success: {
    solid: "bg-green-800 text-white border-green-400 dark:border-green-500",
    outline: "bg-green-600/20 bg-opacity-20 text-green-400 border-green-400",
  },
  error: {
    solid: "bg-red-800 text-white border-red-400",
    outline: "bg-red-600/20 bg-opacity-20 text-red-400 border-red-400",
  },
  warning: {
    solid: "bg-yellow-800 text-white border-yellow-400",
    outline: "bg-yellow-600/20 bg-opacity-20 text-yellow-400 border-yellow-400",
  },
  info: {
    solid: "bg-blue-800 text-white border-blue-400",
    outline: "bg-blue-600/20 bg-opacity-20 text-blue-400 border-blue-400",
  },
};

const alertStyles = cva(
  ["p-2 rounded border flex justify-start gap-2 items-center w-full"],
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
      },
      type: {
        success: "text-green-700",
        error: "text-red-700",
        warning: "text-yellow-700",
        info: "text-blue-700",
      },
    },
    compoundVariants: (Object.keys(types) as AlertColorTypes[]).flatMap((type) => [
      {
        variant: "solid",
        type,
        className: typeClasses[type].solid,
      },
      {
        variant: "outline",
        type,
        className: typeClasses[type].outline,
      },
    ]),
    defaultVariants: {
      variant: "solid",
      type: "success",
    },
  }
);

export { alertStyles };