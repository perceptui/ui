import { cn } from "@/utils";
import { forwardRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Input } from "./input";
import { passwordInputProps } from "@/types";

export const PasswordInput = forwardRef<HTMLInputElement, passwordInputProps>(
  (
    { className, variant, radius, placeholder = "******", ...props },
    forwardedRef
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div ref={forwardedRef} className={cn("w-full relative", className)}>
        <Input
          placeholder={placeholder}
          radius={radius}
          variant={variant}
          type={showPassword ? "text" : "password"}
          {...props}
          className={cn("pr-12", className)}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={cn(
            "absolute top-1/2 right-4 transform -translate-y-1/2",
            "text-gray-500 focus:outline-none"
          )}
        >
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
