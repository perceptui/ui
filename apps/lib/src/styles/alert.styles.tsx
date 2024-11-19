import { cva } from "class-variance-authority";

const types = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "blue",
};

type Types = keyof typeof types;

const typeClasses = {
  success: {
    solid: "bg-green-200 text-green-700 border-green-400 dark:border-green-500",
    outline: "bg-green-200 bg-opacity-20 text-green-400 border-green-400",
  },
  error: {
    solid: "bg-red-200 text-red-700 border-red-400",
    outline: "bg-red-200 bg-opacity-20 text-red-400 border-red-400",
  },
  warning: {
    solid: "bg-yellow-200 text-yellow-700 border-yellow-400",
    outline: "bg-yellow-200 bg-opacity-20 text-yellow-400 border-yellow-400",
  },
  info: {
    solid: "bg-blue-200 text-blue-700 border-blue-400",
    outline: "bg-blue-200 bg-opacity-20 text-blue-400 border-blue-400",
  },
};

const alertStyles = cva(
  ["p-2 rounded border flex justify-start gap-2 items-center"],
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "bg-transparent",
      },
      withIcon: {
        true: "",
        false: "",
      },
      type: {
        success: "text-green-700",
        error: "text-red-700",
        warning: "text-yellow-700",
        info: "text-blue-700",
      },
    },
    compoundVariants: (Object.keys(types) as Types[]).flatMap((type) => [
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