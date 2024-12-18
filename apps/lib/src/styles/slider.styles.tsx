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

const colorClasses = {
  blue: "accent-blue-600",
  red: "accent-red-600",
  green: "accent-green-600",
  yellow: "accent-yellow-600",
  cyan: "accent-cyan-600",
  gray: "accent-gray-600",
  emerald: "accent-emerald-600",
  rose: "accent-rose-600",
  amber: "accent-amber-600",
  orange: "accent-orange-600",
  pink: "accent-pink-600",
  purple: "accent-purple-600",
  indigo: "accent-indigo-600",
  teal: "accent-teal-600",
  lime: "accent-lime-600",
  sky: "accent-sky-600",
  black: "accent-black dark:accent-slate-400",
  dark: "dark:accent-slate-300 accent-slate-700",
  light: "accent-slate-900 dark:accent-white",
};

export const sliderStyles = cva(
  ["w-96", "focus:outline-none", "transition-colors duration-300"],
  {
    variants: {
      size: {
        xs: "h-3",
        sm: "h-5",
        md: "h-7",
        lg: "h-9",
        xl: "h-11",
      },
      color: Object.keys(colors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as Colors],
        }),
        {} as Record<Colors, string>
      ),
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap((scheme) => [
      {
        color: scheme,
      },
    ]),
    defaultVariants: {
      size: "md",
      color: "blue",
    },
  }
);
