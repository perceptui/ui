"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";

const bounceLoaderColors = {
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

type BounceLoaderColors = keyof typeof bounceLoaderColors;

const colorClasses = {
  blue: " bg-blue-700",
  red: " bg-red-700",
  green: " bg-green-700",
  yellow: " bg-yellow-700",
  cyan: " bg-cyan-700",
  gray: " bg-gray-700",
  emerald: " bg-emerald-700",
  rose: " bg-rose-700",
  amber: " bg-amber-700",
  orange: " bg-orange-700",
  pink: " bg-pink-700",
  purple: " bg-purple-700",
  indigo: " bg-indigo-700",
  teal: " bg-teal-700",
  lime: " bg-lime-700",
  sky: " bg-sky-700",
  black: " bg-black dark:bg-slate-400",
  dark: " dark:bg-slate-300 bg-slate-700",
  light: " bg-slate-900 dark:bg-white",
};

const bounceLoaderVariants = cva(
  ["flex flex-row gap-2", "w-4 h-4 rounded-full animate-bounce"],
  {
    variants: {
      color: Object.keys(bounceLoaderColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as BounceLoaderColors],
        }),
        {} as Record<BounceLoaderColors, string>
      ),
    },
    compoundVariants: (
      Object.keys(bounceLoaderColors) as BounceLoaderColors[]
    ).flatMap((scheme) => [
      {
        color: scheme,
      },
    ]),
    defaultVariants: {
      color: "blue",
    },
  }
);

type BounceLoaderProps = VariantProps<typeof bounceLoaderVariants> & {
  color?: BounceLoaderColors;
  className?: string;
};

export const BounceLoader = forwardRef<HTMLDivElement, BounceLoaderProps>(
  ({ className, color }) => (
    <div className="flex flex-row gap-2">
      <div
        className={cn(className, bounceLoaderVariants({ className, color }))}
      ></div>
      <div
        className={cn(
          className,
          "[animation-delay:-.3s]",
          bounceLoaderVariants({ className, color })
        )}
      ></div>
      <div
        className={cn(
          className,
          "[animation-delay:-.5s]",
          bounceLoaderVariants({ className, color })
        )}
      ></div>
    </div>
  )
);

BounceLoader.displayName = "BounceLoader";
