"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const checkboxColors = {
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

export type CheckBoxColors = keyof typeof checkboxColors;

export const colorClasses = {
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
  black: "checked:accent-black hover:accent:checked-gray-900",
  dark: "checked:accent-slate-800 hover:checked:accent-gray-700 light:accent-slate-100",
  light:
    "checked:accent-white hover:accent:checked-slate-100 dark:accent-slate-800",
};

export const checkboxVariants = cva(
  [
    "w-5 h-5",
    "border-2 border-slate-700",
    "rounded-sm",
    "focus:outline-none",
    "transition-colors duration-300",
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
      color: Object.keys(checkboxColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as CheckBoxColors],
        }),
        {} as Record<CheckBoxColors, string>
      ),
    },
    defaultVariants: {
      size: "sm",
      color: "blue",
    },
  }
);
export type CheckboxProps = VariantProps<typeof checkboxVariants> &
  ComponentProps<"input">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, className, children, ...props }, forwardedRef) => (
    <div className="flex items-center justify-start gap-3">
      <input
        id="checkbox"
        {...props}
        ref={forwardedRef}
        type="checkbox"
        className={cn(
          className,
          checkboxVariants({ size, color, className, ...props })
        )}
      />
      <label htmlFor="checkbox">{children}</label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";
