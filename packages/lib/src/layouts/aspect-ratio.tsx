import { cn } from "@/utils";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export const aspectVariants: Record<string, string> = {
  "1/1": "aspect-1/1",
  "4/3": "aspect-4/3",
  "16/9": "aspect-16/9",
  "21/9": "aspect-21/9",
  "3/4": "aspect-3/4",
  "9/16": "aspect-9/16",
};

export type AspectVariants = keyof typeof aspectVariants;

export const aspectRatioVariants = cva(["overflow-hidden p-2"], {
  variants: {
    ratio: {
      ...aspectVariants,
    },
  },
  defaultVariants: {
    ratio: "1/1",
  },
});

export type AspectRatioProps = VariantProps<typeof aspectRatioVariants> & {
  children: React.ReactNode;
  className?: string;
};

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio,
  children,
  className,
}) => {
  return (
    <div className={cn(className, aspectRatioVariants({ ratio }))}>
      {children}
    </div>
  );
};

AspectRatio.displayName = "AspectRatio";