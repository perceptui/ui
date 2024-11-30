import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import {
  alertStyles,
  avatarStyles,
  badgeStyles,
  buttonStyles,
  checkboxStyles,
  inputStyles,
  radioStyles,
  sliderStyles,
  spinnerStyles,
  switchButtonVariants,
  switchStyles,
} from "@/styles";

export type Size = NonNullable<VariantProps<typeof switchStyles>["size"]>;
export type Color = NonNullable<
  VariantProps<typeof switchButtonVariants>["color"]
>;

export type alertProps = VariantProps<typeof alertStyles> &
  ComponentProps<"div"> & {
    type?: "success" | "warning" | "error" | "info";
    message?: String;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
  };

export type avatarProps = ComponentProps<"div"> &
  VariantProps<typeof avatarStyles>;
export type avatarImageProps = ComponentProps<"img"> &
  VariantProps<typeof avatarStyles> & {
    src?: string;
  };
export type avatarFallbackProps = ComponentProps<"div"> & {
  src?: string;
};
export type badgeProps = VariantProps<typeof badgeStyles> & {
  children: React.ReactNode;
};
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;
export type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles>;
export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;
export type LabelProps = ComponentProps<"label">;
export type RadioProps = ComponentProps<"input"> &
  VariantProps<typeof radioStyles> & {
    label?: string;
  };

export type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
};

export type SliderProps = ComponentProps<"input"> &
  VariantProps<typeof sliderStyles>;
export type SpinnerProps = ComponentProps<"div"> &
  VariantProps<typeof spinnerStyles>;
export type SwitchProps = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof switchStyles> &
  VariantProps<typeof switchButtonVariants> & {
    color?: Color;
    size?: Size;
  };
export * from "@/styles";
