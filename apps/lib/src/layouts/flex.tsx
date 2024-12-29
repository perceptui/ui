import { flexVariants } from "@/styles/flex.styles";
import { FlexProps } from "@/types";
import { cn } from "@/utils";
import React from "react";

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
