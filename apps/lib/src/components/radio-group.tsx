import { radioStyles } from "@/styles";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
} from "react";

type RadioProps = ComponentProps<"input"> &
  VariantProps<typeof radioStyles> & {
    label?: string;
  };

type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
};

const RadioGroupContext = createContext<{
  value: string;
  onChange: (value: string) => void;
  name: string;
} | null>(null);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  defaultValue = "",
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
            radioStyles({ className, size, color })
          )}
        />
        <label htmlFor={value as string}>{label || children}</label>
      </div>
    );
  }
);

Radio.displayName = "Radio";
RadioGroup.displayName = "RadioGroup";
