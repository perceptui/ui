import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { badgeStyles } from "@/styles";

type badgeProps = VariantProps<typeof badgeStyles> & {
  children: React.ReactNode;
};

export const Badge: React.FC<badgeProps> = ({
  variant,
  color,
  size,
  radius,
  children,
}) => (
  <div className={cn(badgeStyles({ variant, size, color, radius }))}>
    {children}
  </div>
);

Badge.displayName = "Badge";
