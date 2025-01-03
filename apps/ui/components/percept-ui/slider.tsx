"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const sliderColors = {
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

export type SliderColors = keyof typeof sliderColors;

export const colorClasses = {
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

export const sliderVariants = cva(
  ["w-full cursor-pointer", "focus:outline-none", "transition-colors duration-300"],
  {
    variants: {
      size: {
        xs: "h-3",
        sm: "h-5",
        md: "h-7",
        lg: "h-9",
        xl: "h-11",
      },
      color: Object.keys(sliderColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as SliderColors],
        }),
        {} as Record<SliderColors, string>
      ),
    },
    compoundVariants: (Object.keys(sliderColors) as SliderColors[]).flatMap(
      (scheme) => [
        {
          color: scheme,
        },
      ]
    ),
    defaultVariants: {
      size: "md",
      color: "blue",
    },
  }
);

export type SliderProps = VariantProps<typeof sliderVariants> &
  ComponentProps<"input">;

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, color, size, ...props }, forwardedRef) => (
    <input
      type="range"
      {...props}
      ref={forwardedRef}
      className={cn(className, sliderVariants({ size, className, color }))}
    />
  )
);

Slider.displayName = "Slider";
