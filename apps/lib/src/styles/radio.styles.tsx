import { cva } from "class-variance-authority";

const colors = {
  black: "black",
  dark: "slate",
  light: "white",
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  cyan: "cyan",
  gray: "gray",
  emerald: "emerald",
  rose: "rose",
  amber: "amber",
  orange: "orange",
  pink: "pink",
  purple: "purple",
  indigo: "indigo",
  teal: "teal",
  lime: "lime",
  sky: "sky",
};

type Colors = keyof typeof colors;

const baseStates = {
  focus: "focus:shadow-sm focus:shadow-blue-400",
  hover:
    "hover:border-gray-500 hover:shadow-md shadow-blue-600 dark:shadow-blue-400",
  checked: "checked:shadow-sm checked:shadow-blue-400",
  unchecked: "border-gray-300",
};

const colorClasses: Record<Colors, string> = {
  black: "checked:accent-black hover:checked:accent-gray-900",
  dark: "checked:accent-slate-800 hover:checked:accent-gray-700",
  light: "checked:accent-white hover:checked:accent-slate-100",
  blue: "checked:accent-blue-600 hover:checked:accent-blue-500",
  red: "checked:accent-red-600 hover:checked:accent-red-500",
  green: "checked:accent-green-600 hover:checked:accent-green-500",
  yellow: "checked:accent-yellow-600 hover:checked:accent-yellow-500",
  cyan: "checked:accent-cyan-600 hover:checked:accent-cyan-500",
  gray: "checked:accent-gray-600 hover:checked:accent-gray-500",
  emerald: "checked:accent-emerald-600 hover:checked:accent-emerald-500",
  rose: "checked:accent-rose-600 hover:checked:accent-rose-500",
  amber: "checked:accent-amber-600 hover:checked:accent-amber-500",
  orange: "checked:accent-orange-600 hover:checked:accent-orange-500",
  pink: "checked:accent-pink-600 hover:checked:accent-pink-500",
  purple: "checked:accent-purple-600 hover:checked:accent-purple-500",
  indigo: "checked:accent-indigo-600 hover:checked:accent-indigo-500",
  teal: "checked:accent-teal-600 hover:checked:accent-teal-500",
  lime: "checked:accent-lime-600 hover:checked:accent-lime-500",
  sky: "checked:accent-sky-600 hover:checked:accent-sky-500",
};

export const radioStyles = cva(
  [
    "w-5 h-5",
    "border-2",
    "rounded-sm",
    "transition-colors duration-300",
    baseStates.focus,
    baseStates.hover,
    baseStates.unchecked,
  ],
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
      },
      color: Object.keys(colors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: `${colorClasses[key as Colors]} ${baseStates.checked}`,
        }),
        {} as Record<Colors, string>
      ),
    },
    defaultVariants: {
      size: "sm",
      color: "blue",
    },
  }
);
