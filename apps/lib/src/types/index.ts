import { alertStyles, avatarStyles, badgeStyles, buttonStyles, checkboxStyles, inputStyles, radioStyles, sliderStyles, spinnerStyles, switchButtonVariants, switchStyles } from "@/styles";
import { aspectRatioStyles } from "@/styles/aspect-ratio.styles";
import { flexVariants } from "@/styles/flex.styles";
import { passwordInputStyles } from "@/styles/password-input.styles";
import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

/***
 * This file is used to export all the types from the styles folder
 * This is done to avoid circular dependencies
 */

// ------------------------------------------------ //


/***
 * Alert Props
 * @param message: string
 * @param icon: React.ReactNode
 * @param className: string
 * @param children: React.ReactNode
 * @param variant: string
 * @param type: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 */
export type alertProps = VariantProps<typeof alertStyles> &
  ComponentProps<"div"> & {
    message?: String;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
  };

// ------------------------------------------------ //

/***
 * Avatar Props
 * @param className: string
 * @param children: React.ReactNode
 * @param src: string
 * @param fallback: string
 * @param variant: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
  */
export type avatarProps = VariantProps<typeof avatarStyles> & ComponentProps<"div">

// ------------------------------------------------ //
/***
 * Avatar Image Props
 * @param src: string
 * @param variant: string
 * @param forwardedRef: React.Ref<HTMLImageElement>
 * @param className: string
 * @param children: React.ReactNode
 * @param fallback: string
 * @param alt: string
 * @param forwardedRef: React.Ref<HTMLImageElement>
 */
export type avatarImageProps = VariantProps<typeof avatarStyles> & ComponentProps<"img"> & {
  src?: string;
};

// ------------------------------------------------ //
/***
 * Avatar Fallback Props
 * @param src: string
 * @param variant: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 * @param className: string
 * @param children: React.ReactNode
 * @param fallback: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 * @param alt: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 */
export type avatarFallbackProps = VariantProps<typeof avatarStyles> & ComponentProps<"div"> & {
  src?: string;
};

// ------------------------------------------------ //
/***
 * Badge Props
 * @param children: React.ReactNode
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 * @param variant: string
 */
export type badgeProps = VariantProps<typeof badgeStyles> & {
  children: React.ReactNode;
  className?: string;
};

// ------------------------------------------------ //
/***
 * Button Props
 * @param children: React.ReactNode
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLButtonElement>
 * @param variant: string
 */
export type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

// ------------------------------------------------ //
/***
 * Checkbox Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type CheckboxProps = VariantProps<typeof checkboxStyles> & ComponentProps<"input">

// ------------------------------------------------ //
/***
 * Input Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type InputProps = VariantProps<typeof inputStyles> & ComponentProps<"input">

// ------------------------------------------------ //
/***
 * Label Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLLabelElement>
 * @param variant: string
 */
export type LabelProps = ComponentProps<"label">;

// ------------------------------------------------ //
/***
 * Link Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLAnchorElement>
 * @param variant: string
 */
export type AnchorProps = ComponentProps<"a">;

// ------------------------------------------------ //
/***
 * Radio Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type RadioProps = VariantProps<typeof radioStyles> & ComponentProps<"input"> & {
  label?: string;
};

// ------------------------------------------------ //
/***
 * Radio Group Props
 * @param children: React.ReactNode
 * @param defaultValue: string
 * @param onChange: (value: string) => void
 * @param name: string
 */
export type RadioGroupProps = {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
};

// ------------------------------------------------ //
/***
 * Slider Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type SliderProps = VariantProps<typeof sliderStyles> & ComponentProps<"input">

// ------------------------------------------------ //
/***
 * Spinner Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 * @param variant: string
 */
export type SpinnerProps = VariantProps<typeof spinnerStyles> & ComponentProps<"div">

// ------------------------------------------------ //
/***
 * Switch Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type SwitchProps = VariantProps<typeof switchStyles> & VariantProps<typeof switchButtonVariants> & {
  className?: string;
  id?: string;
}

// ------------------------------------------------ //
/***
 * Password Input Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type passwordInputProps = VariantProps<typeof passwordInputStyles> & ComponentProps<"input"> & {
  className?: string;
  placeholder?: string;
};




// ------------------------------------------------ //
/***
 * Aspect Ratio Layout Props
 * @param children: React.ReactNode
 * @param className: string
 * @param ratio: string
 */
export type AspectRatioProps = VariantProps<typeof aspectRatioStyles> & {
  children: React.ReactNode;
  className?: string;
};

// ------------------------------------------------ //
/***
 * Flex Layout Props
 * @param children: React.ReactNode
 * @param className: string
 * @param gap: string
 * @param align: string
 * @param direction: string
 * @param justify: string
 * @param wrap: string

 */
export type FlexProps = VariantProps<typeof flexVariants> & {
  children: React.ReactNode;
  className?: string;
};
