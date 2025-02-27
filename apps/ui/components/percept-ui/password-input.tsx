"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

const passwordInputVariants = cva(
  [
    "w-full",
    "focus:outline-none outline-none",
    "px-2 py-1",
    "text-slate-700 focus:border-blue-500",
    "bg-transparent dark:text-white",
  ],
  {
    variants: {
      variant: {
        classic: "transition-colors duration-300 border",
        standard:
          "transition-colors duration-300 border-b-2 border-t-0 border-l-0 border-r-0",
        ghost: "border-0 transition-colors duration-300",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "classic",
        className: `border-2 border-foreground focus:shadow-sm focus:shadow-blue-400`,
      },
      {
        variant: "standard",
        className: `border-b-2 border-b-foreground rounded-none`,
      },
      {
        variant: "ghost",
        className: ``,
      },
    ],
    defaultVariants: {
      variant: "classic",
      radius: "lg",
    },
  }
);

type passwordInputProps = VariantProps<typeof passwordInputVariants> &
  ComponentProps<"input"> & {
    className?: string;
    placeholder?: string;
  };

export const PasswordInput = forwardRef<HTMLInputElement, passwordInputProps>(
  (
    { className, variant, radius, placeholder = "******", ...props },
    forwardedRef
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div ref={forwardedRef} className={cn("relative p-1 ps-2 w-full", className)}>
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          {...props}
          className={cn(
            "w-full focus:outline-none bg-transparent text-foreground pr-12",
            className,
            passwordInputVariants({ variant, radius })
          )}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={cn(
            "absolute top-1/2 right-4 -translate-y-2",
            "text-gray-500 focus:outline-none"
          )}
        >
          {showPassword ? (
            <BsEyeSlash className="dark:text-white" />
          ) : (
            <BsEye className="dark:text-white" />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
