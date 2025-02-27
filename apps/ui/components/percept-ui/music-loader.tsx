"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";

const musicLoaderColors = {
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

type MusicColors = keyof typeof musicLoaderColors;

const colorClasses = {
  blue: " bg-blue-600",
  red: " bg-red-600",
  green: " bg-green-600",
  yellow: " bg-yellow-600",
  cyan: " bg-cyan-600",
  gray: " bg-gray-600",
  emerald: " bg-emerald-600",
  rose: " bg-rose-600",
  amber: " bg-amber-600",
  orange: " bg-orange-600",
  pink: " bg-pink-600",
  purple: " bg-purple-600",
  indigo: " bg-indigo-600",
  teal: " bg-teal-600",
  lime: " bg-lime-600",
  sky: " bg-sky-600",
  black: " bg-black dark:bg-slate-400",
  dark: " dark:bg-slate-300 bg-slate-700",
  light: " bg-slate-900 dark:bg-white",
};

const musicLoaderVariants = cva(
  ["inline-block", "rounded-xl"],
  {
    variants: {
      size: {
        xs: "h-3 w-1",
        sm: "h-5 w-1",
        md: "h-7 w-1",
        lg: "h-9 w-1",
        xl: "h-11 w-1",
      },
      color: Object.keys(musicLoaderColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: colorClasses[key as MusicColors],
        }),
        {} as Record<MusicColors, string>
      ),
    },
    compoundVariants: (Object.keys(musicLoaderColors) as MusicColors[]).flatMap(
      (scheme) => [
        {
          color: scheme,
        },
      ]
    ),
    defaultVariants: {
      size: "xl",
      color: "blue",
    },
  }
);

type MusicLoaderProps = VariantProps<typeof musicLoaderVariants> & {
  color?: MusicColors;
  size?: string;
  className?: string;
};

export const MusicLoader = forwardRef<HTMLDivElement, MusicLoaderProps>(
  ({ className, color, size }) => (
    <div className="flex items-center justify-center gap-1">
      <div
        className={cn(
          "h-3 animate-music-1",
          className,
          musicLoaderVariants({ color, size })
        )}
      ></div>
      <div
        className={cn(
          "h-3 animate-music-2",
          className,
          musicLoaderVariants({ color, size })
        )}
      ></div>
      <div
        className={cn(
          "h-3 animate-music-3",
          className,
          musicLoaderVariants({ color, size })
        )}
      ></div>
      <div
        className={cn(
          "h-3 animate-music-4",
          className,
          musicLoaderVariants({ color, size })
        )}
      ></div>
    </div>
  )
);

MusicLoader.displayName = "MusicLoader";
