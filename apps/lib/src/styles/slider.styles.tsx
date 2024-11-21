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
  blue: "accent-blue-600 hover:accent-blue-800",
  red: "accent-red-600 hover:accent-red-800",
  green: "accent-green-600 hover:accent-green-800",
  yellow: "accent-yellow-600 hover:accent-yellow-800",
  cyan: "accent-cyan-600 hover:accent-cyan-800",
  gray: "accent-gray-600 hover:accent-gray-800",
  emerald: "accent-emerald-600 hover:accent-emerald-800",
  rose: "accent-rose-600 hover:accent-rose-800",
  amber: "accent-amber-600 hover:accent-amber-800",
  orange: "accent-orange-600 hover:accent-orange-800",
  pink: "accent-pink-600 hover:accent-pink-800",
  purple: "accent-purple-600 hover:accent-purple-800",
  indigo: "accent-indigo-600 hover:accent-indigo-800",
  teal: "accent-teal-600 hover:accent-teal-800",
  lime: "accent-lime-600 hover:accent-lime-800",
  sky: "accent-sky-600 hover:accent-sky-800",
  black: "accent-black hover:accent:gray-800 dark:accent-slate-400",
  dark: "dark:accent-slate-300 hover:accent-gray-800 accent-slate-700",
  light: "accent-slate-700 hover:accent:slate-800 dark:accent-white",
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
