use client;"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

import { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

const buttonColors = {
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

type ButtonColors = keyof typeof buttonColors;

const colorClasses = {
  blue: {
    solid: "bg-blue-600 hover:bg-blue-500",
    outline:
      "text-blue-600 border-blue-500 bg-transparent hover:bg-blue-700/30 ",
    ghost: "text-blue-600 bg-transparent hover:bg-blue-700/30 ",
  },
  red: {
    solid: "bg-red-600 hover:bg-red-500",
    outline: "text-red-600 border-red-500 bg-transparent hover:bg-red-700/30 ",
    ghost: "text-red-600 bg-transparent hover:bg-red-700/30 ",
  },
  green: {
    solid: "bg-green-600 hover:bg-green-500",
    outline:
      "text-green-600 border-green-500 bg-transparent hover:bg-green-700/30 ",
    ghost: "text-green-600 bg-transparent hover:bg-green-700/30 ",
  },
  yellow: {
    solid: "bg-yellow-600 hover:bg-yellow-500",
    outline:
      "text-yellow-600 border-yellow-500 bg-transparent hover:bg-yellow-700/30 ",
    ghost: "text-yellow-600 bg-transparent hover:bg-yellow-700/30 ",
  },
  cyan: {
    solid: "bg-cyan-600 hover:bg-cyan-500",
    outline:
      "text-cyan-600 border-cyan-500 bg-transparent hover:bg-cyan-700/30 ",
    ghost: "text-cyan-600 bg-transparent hover:bg-cyan-700/30 ",
  },
  gray: {
    solid: "bg-gray-600 hover:bg-gray-500",
    outline:
      "text-gray-600 border-gray-500 bg-transparent hover:bg-gray-700/30 ",
    ghost: "text-gray-600 bg-transparent hover:bg-gray-700/30 ",
  },
  emerald: {
    solid: "bg-emerald-600 hover:bg-emerald-500",
    outline:
      "text-emerald-600 border-emerald-500 bg-transparent hover:bg-emerald-700/30 ",
    ghost: "text-emerald-600 bg-transparent hover:bg-emerald-700/30 ",
  },
  rose: {
    solid: "bg-rose-600 hover:bg-rose-500",
    outline:
      "text-rose-600 border-rose-500 bg-transparent hover:bg-rose-700/30 ",
    ghost: "text-rose-600 bg-transparent hover:bg-rose-700/30 ",
  },
  amber: {
    solid: "bg-amber-600 hover:bg-amber-500",
    outline:
      "text-amber-600 border-amber-500 bg-transparent hover:bg-amber-700/30 ",
    ghost: "text-amber-600 bg-transparent hover:bg-amber-700/30 ",
  },
  orange: {
    solid: "bg-orange-600 hover:bg-orange-500",
    outline:
      "text-orange-600 border-orange-500 bg-transparent hover:bg-orange-700/30 ",
    ghost: "text-orange-600 bg-transparent hover:bg-orange-700/30 ",
  },
  pink: {
    solid: "bg-pink-600 hover:bg-pink-500",
    outline:
      "text-pink-600 border-pink-500 bg-transparent hover:bg-pink-700/30 ",
    ghost: "text-pink-600 bg-transparent hover:bg-pink-700/30 ",
  },
  purple: {
    solid: "bg-purple-600 hover:bg-purple-500",
    outline:
      "text-purple-600 border-purple-500 bg-transparent hover:bg-purple-700/30 ",
    ghost: "text-purple-600 bg-transparent hover:bg-purple-700/30 ",
  },
  indigo: {
    solid: "bg-indigo-600 hover:bg-indigo-500",
    outline:
      "text-indigo-600 border-indigo-500 bg-transparent hover:bg-indigo-700/30 ",
    ghost: "text-indigo-600 bg-transparent hover:bg-indigo-700/30 ",
  },
  teal: {
    solid: "bg-teal-600 hover:bg-teal-500",
    outline:
      "text-teal-600 border-teal-500 bg-transparent hover:bg-teal-700/30 ",
    ghost: "text-teal-600 bg-transparent hover:bg-teal-700/30 ",
  },
  lime: {
    solid: "bg-lime-600 hover:bg-lime-500",
    outline:
      "text-lime-600 border-lime-500 bg-transparent hover:bg-lime-700/30 ",
    ghost: "text-lime-600 bg-transparent hover:bg-lime-700/30 ",
  },
  sky: {
    solid: "bg-sky-600 hover:bg-sky-500",
    outline: "text-sky-600 border-sky-500 bg-transparent hover:bg-sky-700/30 ",
    ghost: "text-sky-600 bg-transparent hover:bg-sky-700/30 ",
  },
  black: {
    solid: "bg-black hover:bg-gray-900",
    outline: "text-black border-black bg-transparent hover:bg-gray-700/30 ",
    ghost: "text-black bg-transparent hover:bg-gray-700/30 ",
  },
  dark: {
    solid: "bg-slate-800 hover:bg-gray-700",
    outline:
      "text-slate-800 border-slate-800 bg-transparent hover:bg-slate-700",
    ghost: "text-slate-800 bg-transparent hover:bg-slate-700/30 ",
  },
  light: {
    solid:
      "dark:bg-white bg-black dark:hover:bg-slate-200 hover:bg-slate-800 dark:text-slate-700 text-slate-200",
    outline:
      "dark:text-white dark:border-white text-black border-black bg-transparent dark:hover:bg-white/20 hover:bg-black/20",
    ghost:
      "dark:text-white text-black bg-transparent dark:hover:bg-white/20 hover:bg-black/20",
  },
};

const buttonVariants = cva(
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
        ghost: "transition-colors duration-300",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-2xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      color: Object.keys(buttonColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: "text-white",
        }),
        {} as Record<ButtonColors, string>
      ),
    },
    compoundVariants: (Object.keys(buttonColors) as ButtonColors[]).flatMap(
      (scheme) => [
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
          variant: "ghost",
          color: scheme,
          className: colorClasses[scheme].ghost,
        },
      ]
    ),
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
      color: "blue",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, radius, color, className, ...props }, forwardedRef) => (
    <button
      {...props}
      ref={forwardedRef}
      className={cn(
        buttonVariants({ variant, size, radius, color, className })
      )}
    />
  )
);

Button.displayName = "Button";
