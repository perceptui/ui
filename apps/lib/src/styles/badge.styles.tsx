import { cva } from "class-variance-authority";

const colors = {
  black: "black",
  dark: "slate",
  light:"white",
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
  blue: {
    solid: "bg-blue-600 hover:bg-blue-500",
    outline: "text-blue-600 border-blue-500",
    soft: "text-blue-600 bg-blue-600",
  },
  red: {
    solid: "bg-red-600 hover:bg-red-500",
    outline: "text-red-600 border-red-500",
    soft: "text-red-600 bg-red-600",
  },
  green: {
    solid: "bg-green-600 hover:bg-green-500",
    outline:
      "text-green-600 border-green-500",
    soft: "text-green-600 bg-green-600",
  },
  yellow: {
    solid: "bg-yellow-600 hover:bg-yellow-500",
    outline:
      "text-yellow-600 border-yellow-500",
    soft: "text-yellow-600 bg-yellow-600",
  },
  cyan: {
    solid: "bg-cyan-600 hover:bg-cyan-500",
    outline: "text-cyan-600 border-cyan-500",
    soft: "text-cyan-600 bg-cyan-600",
  },
  gray: {
    solid: "bg-gray-600 hover:bg-gray-500",
    outline: "text-gray-600 border-gray-500",
    soft: "text-gray-600 bg-gray-600",
  },
  emerald: {
    solid: "bg-emerald-600 hover:bg-emerald-500",
    outline:
      "text-emerald-600 border-emerald-500",
    soft: "text-emerald-600 bg-emerald-600",
  },
  rose: {
    solid: "bg-rose-600 hover:bg-rose-500",
    outline: "text-rose-600 border-rose-500",
    soft: "text-rose-600 bg-rose-600",
  },
  amber: {
    solid: "bg-amber-600 hover:bg-amber-500",
    outline:
      "text-amber-600 border-amber-500",
    soft: "text-amber-600 bg-amber-600",
  },
  orange: {
    solid: "bg-orange-600 hover:bg-orange-500",
    outline:
      "text-orange-600 border-orange-500",
    soft: "text-orange-600 bg-orange-600",
  },
  pink: {
    solid: "bg-pink-600 hover:bg-pink-500",
    outline: "text-pink-600 border-pink-500",
    soft: "text-pink-600 bg-pink-600",
  },
  purple: {
    solid: "bg-purple-600 hover:bg-purple-500",
    outline:
      "text-purple-600 border-purple-500",
    soft: "text-purple-600 bg-purple-600",
  },
  indigo: {
    solid: "bg-indigo-600 hover:bg-indigo-500",
    outline:
      "text-indigo-600 border-indigo-500",
    soft: "text-indigo-600 bg-indigo-600",
  },
  teal: {
    solid: "bg-teal-600 hover:bg-teal-500",
    outline: "text-teal-600 border-teal-500",
    soft: "text-teal-600 bg-teal-600",
  },
  lime: {
    solid: "bg-lime-600 hover:bg-lime-500",
    outline: "text-lime-600 border-lime-500",
    soft: "text-lime-600 bg-lime-600",
  },
  sky: {
    solid: "bg-sky-600",
    outline: "text-sky-600 border-sky-500",
    soft: "text-sky-600 bg-sky-600",
  },
  black:{
    solid: "bg-black",
    outline: "text-black border-black",
    soft: "text-black bg-black",
  },
  dark:{
    solid: "bg-slate-800",
    outline: "text-slate-800 border-slate-800",
    soft: "text-slate-800 bg-slate-700",
  },
  light:{
    solid: "bg-white text-slate-700",
    outline: "text-white border-white",
    soft: "text-white bg-white",
  },
  
};

const badgeStyles = cva(
  [
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "transition-colors duration-300",
        outline: "transition-colors duration-300 border-2",
        soft: "transition-colors duration-300 bg-opacity-20",
      },
      size: {
        xs: "px-2 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-sm",
        md: "px-3 py-0.5 text-base",
        lg: "px-3 py-0.5 text-lg",
        xl: "px-3 py-0.5 text-2xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      color: Object.keys(colors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: "text-white",
        }),
        {} as Record<Colors, string>
      ),
    },
    compoundVariants: (Object.keys(colors) as Colors[]).flatMap((scheme) => [
      {
        variant: "solid",
        color: scheme,
        className: colorClasses[scheme].solid,
      },
      {
        variant: "outline",
        color: scheme,
        className: colorClasses[scheme].outline,
      },
      {
        variant: "soft",
        color: scheme,
        className: colorClasses[scheme].soft,
      },
    ]),
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
      color: "blue",
    },
  }
);

export { badgeStyles };