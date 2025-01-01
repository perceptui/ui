import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";

export const switchColors = {
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

export type SwitchColors = keyof typeof switchColors;

export const colorClasses = {
  blue: "bg-blue-600",
  red: "bg-red-600",
  green: "bg-green-600",
  yellow: "bg-yellow-600",
  cyan: "bg-cyan-600",
  gray: "bg-gray-600",
  emerald: "bg-emerald-600",
  rose: "bg-rose-600",
  amber: "bg-amber-600",
  orange: "bg-orange-600",
  pink: "bg-pink-600",
  purple: "bg-purple-600",
  indigo: "bg-indigo-600",
  teal: "bg-teal-600",
  lime: "bg-lime-600",
  sky: "bg-sky-600",
  black: "bg-black dark:bg-slate-400",
  dark: "dark:bg-slate-300 bg-slate-700",
  light: "bg-slate-900 dark:bg-white",
};

export const switchVariants = cva(
  [
    "focus:outline-none",
    "peer appearance-none bg-slate-100 shadow-inner shadow-slate-600 rounded-full cursor-pointer transition-colors duration-300 border dark:bg-black dark:shadow-slate-400 dark:border-slate-950",
  ],
  {
    variants: {
      size: {
        sm: "w-11 h-5",
        md: "w-14 h-6",
        lg: "w-[64px] h-8",
        xl: "w-24 h-11",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const switchButtonVariants = cva(
  [
    "focus:outline-none",
    "transition-colors duration-300",
    "absolute top-0 left-0 rounded-full shadow-md transition-transform duration-300 peer-checked:border-slate-800 cursor-pointer dark",
    "dark:shadow-slate-400 shadow-slate-600",
    "border-t-2 border-t-white peer-checked:border-t-slate-200",
  ],
  {
    variants: {
      size: {
        sm: "w-5 h-5 peer-checked:translate-x-6",
        md: "w-6 h-6 peer-checked:translate-x-8",
        lg: "w-8 h-8 peer-checked:translate-x-9",
        xl: "w-11 h-11 peer-checked:translate-x-16",
      },
      color: Object.keys(switchColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as SwitchColors],
        }),
        {} as Record<SwitchColors, string>
      ),
    },
    compoundVariants: (Object.keys(switchColors) as SwitchColors[]).flatMap(
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

export type SwitchProps = VariantProps<typeof switchVariants> &
  VariantProps<typeof switchButtonVariants> & {
    className?: string;
    id?: string;
  };
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, color, size, ...props }, ref) => (
    <div className="relative inline-block">
      <input
        {...props}
        ref={ref}
        id={props.id || "switch-component"}
        type="checkbox"
        className={cn(
          switchVariants({
            size,
          }),
          className
        )}
      />
      <label
        htmlFor={props.id || "switch-component"}
        className={cn(
          switchButtonVariants({
            color,
            size,
          })
        )}
      ></label>
    </div>
  )
);

Switch.displayName = "Switch";
