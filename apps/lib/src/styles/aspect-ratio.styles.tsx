import { cva } from "class-variance-authority";

const aspectVariants: Record<string, string> = {
  "1/1": "aspect-1/1",
  "4/3": "aspect-4/3",
  "16/9": "aspect-16/9",
  "21/9": "aspect-21/9",
  "3/4": "aspect-3/4",
  "9/16": "aspect-9/16",
};

export type AspectVariants = keyof typeof aspectVariants;

export const aspectRatioStyles = cva(["overflow-hidden p-2"], {
  variants: {
    ratio: {
      ...aspectVariants,
    },
  },
  defaultVariants: {
    ratio: "1/1",
  },
});
