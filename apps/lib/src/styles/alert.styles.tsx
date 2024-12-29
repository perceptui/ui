import { cva } from "class-variance-authority";

const alertTypes = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "blue",
};

export type AlertColorTypes = keyof typeof alertTypes;

const AlertTypeClasses = {
  success: {
    solid: "bg-green-800 text-white",
    outline:
      "text-green-700 border-green-700 dark:border-green-400 dark:text-green-400",
    surface:
      "dark:bg-green-600/20 bg-green-600/30 bg-opacity-20 dark:text-green-400 text-green-700",
  },
  error: {
    solid: "bg-red-800 text-white ",
    outline:
      "text-red-700 border-red-700 dark:border-red-400 dark:text-red-400",
    surface:
      "dark:bg-red-600/20 bg-red-600/30 bg-opacity-20 dark:text-red-400 text-red-700",
  },
  warning: {
    solid: "bg-yellow-800 text-white",
    outline:
      "text-yellow-700 border-yellow-700 dark:border-yellow-400 dark:text-yellow-400",
    surface:
      "dark:bg-yellow-600/20 bg-yellow-600/30 bg-opacity-20 dark:text-yellow-400 text-yellow-700",
  },
  info: {
    solid: "bg-blue-800 text-white",
    outline:
      "text-blue-700 border-blue-700 dark:border-blue-400 dark:text-blue-400",
    surface:
      "dark:bg-blue-600/20 bg-blue-600/30 bg-opacity-20 dark:text-blue-400 text-blue-700",
  },
};

const alertStyles = cva(
  ["p-2 rounded border flex justify-start gap-2 items-center w-full"],
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
        surface: "border-none",
      },
      type: {
        success: "text-green-700",
        error: "text-red-700",
        warning: "text-yellow-700",
        info: "text-blue-700",
      },
    },
    compoundVariants: (Object.keys(alertTypes) as AlertColorTypes[]).flatMap(
      (type) => [
        {
          variant: "solid",
          type,
          className: AlertTypeClasses[type].solid,
        },
        {
          variant: "outline",
          type,
          className: AlertTypeClasses[type].outline,
        },
        {
          variant: "surface",
          type,
          className: AlertTypeClasses[type].surface,
        },
      ]
    ),
    defaultVariants: {
      variant: "solid",
      type: "info",
    },
  }
);

export { alertStyles };
