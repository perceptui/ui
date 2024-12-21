import { cn } from "@/utils";
import { badgeStyles } from "@/styles";
import { badgeProps } from "@/types";
import { badgeStylesProps } from "@/styles/recipe.types";

export type badgeProp = badgeProps &
  badgeStylesProps & {
    className?: string;
  };

export const Badge: React.FC<badgeProp> = ({
  variant,
  color,
  size,
  radius,
  children,
  className,
}) => (
  <div className={cn(className, badgeStyles({ variant, size, color, radius }))}>
    {children}
  </div>
);

Badge.displayName = "Badge";
