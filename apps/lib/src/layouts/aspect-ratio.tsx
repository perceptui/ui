import { aspectRatioStyles } from "@/styles/aspect-ratio.styles";
import { AspectRatioProps } from "@/types";
import { cn } from "@/utils";
import React from "react";

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio,
  children,
  className,
}) => {
  return (
    <div className={cn(className, aspectRatioStyles({ ratio }))}>
      {children}
    </div>
  );
};

AspectRatio.displayName = "AspectRatio";