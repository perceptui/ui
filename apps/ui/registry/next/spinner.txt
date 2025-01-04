"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";

export const spinnerColors = {
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

export type SpinnerColors = keyof typeof spinnerColors;

export const colorClasses = {
  blue: " border-blue-600",
  red: " border-red-600",
  green: " border-green-600",
  yellow: " border-yellow-600",
  cyan: " border-cyan-600",
  gray: " border-gray-600",
  emerald: " border-emerald-600",
  rose: " border-rose-600",
  amber: " border-amber-600",
  orange: " border-orange-600",
  pink: " border-pink-600",
  purple: " border-purple-600",
  indigo: " border-indigo-600",
  teal: " border-teal-600",
  lime: " border-lime-600",
  sky: " border-sky-600",
  black: " border-black dark:border-slate-400",
  dark: " dark:border-slate-300 border-slate-700",
  light: " border-slate-900 dark:border-white",
};

export const spinnerVariants = cva(
  [
    "transition-colors duration-300",
    "inline-block",
    "rounded-[100%]",
    "border-t-2 animate-spin",
  ],
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-5 w-5",
        md: "h-7 w-7",
        lg: "h-9 w-9",
        xl: "h-11 w-11",
      },
      color: Object.keys(spinnerColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as SpinnerColors],
        }),
        {} as Record<SpinnerColors, string>
      ),
    },
    compoundVariants: (Object.keys(spinnerColors) as SpinnerColors[]).flatMap((scheme) => [
      {
        color: scheme,
      },
    ]),
    defaultVariants: {
      size: "xl",
      color: "blue",
    },
  }
);

export type SpinnerProps = VariantProps<typeof spinnerVariants> & ComponentProps<"div">

export const Spinner = forwardRef<HTMLInputElement, SpinnerProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(className, spinnerVariants({ size, className, color }))}
    />
  )
);

Spinner.displayName = "Spinner";
