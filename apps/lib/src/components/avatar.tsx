import { cn } from "@/utils";
import { avatarStyles } from "@/styles";
import { forwardRef } from "react";
import { avatarFallbackProps, avatarImageProps, avatarProps } from "@/types";
import { avatarStylesProps } from "@/styles/recipe.types";

export type avatarProp = avatarProps & avatarStylesProps;
export type avatarImageProp = avatarImageProps & avatarStylesProps;
export type avatarFallbackProp = avatarFallbackProps & avatarStylesProps;

export const Avatar = forwardRef<HTMLDivElement, avatarProp>(
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

export const AvatarImage = forwardRef<HTMLImageElement, avatarImageProp>(
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

export const AvatarFallback = forwardRef<HTMLDivElement, avatarFallbackProp>(
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
