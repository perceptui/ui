import { cn } from "@/utils";
import { avatarStyles } from "@/styles";
import { forwardRef } from "react";
import { avatarFallbackProps, avatarImageProps, avatarProps } from "@/types";

export const Avatar = forwardRef<HTMLDivElement, avatarProps>(
  ({ variant, color, radius, className, children, ...props }, forwardedRef) => (
    <div
      {...props}
      className={cn(
        "flex items-center justify-center relative",
        className,
        avatarStyles({ variant, color, radius })
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
);

export const AvatarImage = forwardRef<HTMLImageElement, avatarImageProps>(
  ({ src, className, ...props }, forwardedRef) => {
    if (src) {
      return (
        <img
          {...props}
          className={cn("absolute inset-0", className)}
          src={`${src}`}
          ref={forwardedRef}
        />
      );
    }
    return null;
  }
);

export const AvatarFallback = forwardRef<HTMLDivElement, avatarFallbackProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div {...props} className={cn(className)} ref={forwardedRef}>
        {children}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";
