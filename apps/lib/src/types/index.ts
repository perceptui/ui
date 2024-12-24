import React, { ComponentProps } from "react";

export type Size = NonNullable<{
  size?: "sm" | "md" | "lg" | "xl" | null | undefined;
}["size"]>;

export type Color = NonNullable<
  {
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
  }["color"]
>;

export type alertProps = {
  variant?: "solid" | "outline" | null | undefined;
  type?: "success" | "error" | "warning" | "info" | null | undefined;
} &
  ComponentProps<"div"> & {
    type?: "success" | "warning" | "error" | "info";
    message?: String;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
  };

export type avatarProps = ComponentProps<"div"> & {
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | "dark" | "light" | null | undefined;
  variant?: "solid" | "outline" | "soft" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none" | null | undefined;
};

export type avatarImageProps = ComponentProps<"img"> & {
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | "dark" | "light" | null | undefined;
  variant?: "solid" | "outline" | "soft" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none" | null | undefined;
} & {
  src?: string;
};

export type avatarFallbackProps = ComponentProps<"div"> & {
  src?: string;
};

export type badgeProps = {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
  variant?: "solid" | "outline" | "soft" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
  children: React.ReactNode;
};

export type ButtonProps = ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "light" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
  variant?: "solid" | "outline" | "ghost" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
};

export type CheckboxProps = ComponentProps<"input"> & {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
};

export type InputProps = ComponentProps<"input"> & {
  variant?: "ghost" | "classic" | "standard" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none" | null | undefined;
}

export type LabelProps = ComponentProps<"label">;

export type AnchorProps = ComponentProps<"a">;

export type RadioProps = ComponentProps<"input"> & {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
} & {
  label?: string;
};

export type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
};

export type SliderProps = ComponentProps<"input"> & {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
}

export type SpinnerProps = ComponentProps<"div"> & {
  size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
}

export type SwitchProps = Omit<ComponentProps<"input">, "size"> & {
  size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & {
  size?: "sm" | "md" | "lg" | "xl" | null | undefined;
  color?: "black" | "blue" | "red" | "green" | "yellow" | "cyan" | "gray" | "emerald" | "rose" | "amber" | "orange" | "pink" | "purple" | "indigo" | "teal" | "lime" | "sky" | null | undefined;
} & {
  color?: Color;
  size?: Size;
};

export type passwordInputProps = ComponentProps<"input"> & {
  className?: string;
  variant?: "ghost" | "classic" | "standard" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none" | null | undefined;
  placeholder?: string;
};

export type otpInputProps = ComponentProps<"input"> & {
  className?: string;
  variant?: "ghost" | "classic" | "standard" | null | undefined;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none" | null | undefined;
  length?: number;
  onComplete: (pin: string) => void;
};