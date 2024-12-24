import { cn } from "@/utils";
import { forwardRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { passwordInputProps } from "@/types";
import { passwordInputVariantsProps } from "@/styles";
import { passwordInputStyles } from "@/styles/password-input.styles";

export type PasswordInput_Props = passwordInputProps &
  passwordInputVariantsProps;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInput_Props>(
  (
    { className, variant, radius, placeholder = "******", ...props },
    forwardedRef
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "relative p-1 ps-2",
          className,
          passwordInputStyles({ variant, radius })
        )}
      >
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          {...props}
          className="w-full focus:outline-none bg-transparent dark:text-white pr-12 border-none"
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
