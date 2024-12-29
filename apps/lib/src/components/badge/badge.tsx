import { cn } from "@/utils";
import { badgeStyles } from "@/styles";
import { badgeProps } from "@/types";


export const Badge: React.FC<badgeProps> = ({
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
