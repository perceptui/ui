import { FlexProps } from "@/types";
import { cn } from "@/utils";
import React from "react";
import { cva } from "class-variance-authority";

export const flexVariants = cva(["flex w-full"], {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      11: "gap-11",
      12: "gap-12",
      14: "gap-14",
      16: "gap-16",
      20: "gap-20",
      24: "gap-24",
      28: "gap-28",
      32: "gap-32",
      36: "gap-36",
      40: "gap-40",
      44: "gap-44",
      48: "gap-48",
      52: "gap-52",
      56: "gap-56",
      60: "gap-60",
      64: "gap-64",
      72: "gap-72",
      80: "gap-80",
      96: "gap-96",
      px: "gap-px",
      0.5: "gap-0.5",
      1.5: "gap-1.5",
      2.5: "gap-2.5",
      3.5: "gap-3.5",
      4.5: "gap-4.5",
      5.5: "gap-5.5",
      6.5: "gap-6.5",
      7.5: "gap-7.5",
      8.5: "gap-8.5",
      9.5: "gap-9.5",
      10.5: "gap-10.5",
      11.5: "gap-11.5",
      12.5: "gap-12.5",
      14.5: "gap-14.5",
      16.5: "gap-16.5",
      20.5: "gap-20.5",
      24.5: "gap-24.5",
    },
    direction: {
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      col: "flex-col",
      colReverse: "flex-col-reverse",
    },
    wrap: {
      noWrap: "flex-nowrap",
      wrap: "flex-wrap",
      wrapReverse: "flex-wrap-reverse",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    gap: 4,
    direction: "row",
    wrap: "noWrap",
    align: "start",
    justify: "start",
  },
});

export const Flex: React.FC<FlexProps> = ({
  children,
  className,
  gap,
  align,
  direction,
  justify,
  wrap,
}) => {
  return (
    <div
      className={cn(
        className,
        flexVariants({ gap, align, direction, justify, wrap })
      )}
    >
      {children}
    </div>
  );
};

Flex.displayName = "Flex";
