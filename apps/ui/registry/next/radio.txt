"use client";
import { cn } from "@/lib/utils";
import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
} from "react";
import { cva, VariantProps } from "class-variance-authority";

export const radioColors = {
  black: "black",
  dark: "slate",
  light: "white",
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  cyan: "cyan",
  gray: "gray",
  emerald: "emerald",
  rose: "rose",
  amber: "amber",
  orange: "orange",
  pink: "pink",
  purple: "purple",
  indigo: "indigo",
  teal: "teal",
  lime: "lime",
  sky: "sky",
};

export type RadioColors = keyof typeof radioColors;

export const colorClasses: Record<RadioColors, string> = {
  black: "checked:accent-black hover:checked:accent-gray-900",
  dark: "checked:accent-slate-800 hover:checked:accent-gray-700",
  light: "checked:accent-white hover:checked:accent-slate-100",
  blue: "checked:accent-blue-600 hover:checked:accent-blue-500",
  red: "checked:accent-red-600 hover:checked:accent-red-500",
  green: "checked:accent-green-600 hover:checked:accent-green-500",
  yellow: "checked:accent-yellow-600 hover:checked:accent-yellow-500",
  cyan: "checked:accent-cyan-600 hover:checked:accent-cyan-500",
  gray: "checked:accent-gray-600 hover:checked:accent-gray-500",
  emerald: "checked:accent-emerald-600 hover:checked:accent-emerald-500",
  rose: "checked:accent-rose-600 hover:checked:accent-rose-500",
  amber: "checked:accent-amber-600 hover:checked:accent-amber-500",
  orange: "checked:accent-orange-600 hover:checked:accent-orange-500",
  pink: "checked:accent-pink-600 hover:checked:accent-pink-500",
  purple: "checked:accent-purple-600 hover:checked:accent-purple-500",
  indigo: "checked:accent-indigo-600 hover:checked:accent-indigo-500",
  teal: "checked:accent-teal-600 hover:checked:accent-teal-500",
  lime: "checked:accent-lime-600 hover:checked:accent-lime-500",
  sky: "checked:accent-sky-600 hover:checked:accent-sky-500",
};

export const radioVariants = cva(
  ["w-5 h-5", "border-2", "rounded-sm", "transition-colors duration-300"],
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
      },
      color: Object.keys(radioColors).reduce(
        (acc, key) => ({
          ...acc,
          [key]: `${colorClasses[key as RadioColors]}`,
        }),
        {} as Record<RadioColors, string>
      ),
    },
    defaultVariants: {
      size: "sm",
      color: "blue",
    },
  }
);

export type RadioProps = VariantProps<typeof radioVariants> &
  ComponentProps<"input"> & {
    label?: string;
  };

export type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
};

export const RadioGroupContext = createContext<{
  value: string;
  onChange: (value: string) => void;
  name: string;
} | null>(null);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  defaultValue = "radio",
  onChange,
  name,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue as string);
  const groupName = useId();
  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value: selectedValue,
        onChange: handleChange,
        name: name || groupName,
      }}
    >
      <div className="flex flex-col gap-2">{children}</div>
    </RadioGroupContext.Provider>
  );
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, children, className, size, color, ...props }, ref) => {
    const context = useContext(RadioGroupContext);

    if (!context) {
      throw new Error("Radio must be used within a RadioGroup");
    }

    const { value: selectedValue, onChange, name } = context;

    const isChecked = selectedValue === value;

    return (
      <div className="flex items-center gap-3">
        <input
          {...props}
          id={value as string}
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={() => onChange(value as string)}
          className={cn(
            "cursor-pointer",
            radioVariants({ className, size, color })
          )}
        />
        <label htmlFor={value as string}>{label || children}</label>
      </div>
    );
  }
);

Radio.displayName = "Radio";
RadioGroup.displayName = "RadioGroup";
