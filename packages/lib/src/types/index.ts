import { alertVariants } from "@/components/alert";
import { avatarVariants } from "@/components/avatar";
import { badgeVariants } from "@/components/badge";
import { buttonVariants } from "@/components/button";
import { checkboxVariants } from "@/components/checkbox";
import { inputVariants } from "@/components/input";
import { passwordInputVariants } from "@/components/password-input";
import { radioVariants } from "@/components/radio";
import { sliderVariants } from "@/components/slider";
import { spinnerVariants } from "@/components/spinner";
import { switchButtonVariants, switchVariants } from "@/components/switch";
import { aspectRatioVariants } from "@/layouts/aspect-ratio";
import { flexVariants } from "@/layouts/flex";
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
export type alertProps = VariantProps<typeof alertVariants> &
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
export type avatarProps = VariantProps<typeof avatarVariants> & ComponentProps<"div">

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
export type avatarImageProps = VariantProps<typeof avatarVariants> & ComponentProps<"img"> & {
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
export type avatarFallbackProps = VariantProps<typeof avatarVariants> & ComponentProps<"div"> & {
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
export type badgeProps = VariantProps<typeof badgeVariants> & {
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
export type ButtonProps = VariantProps<typeof buttonVariants> & ComponentProps<"button">

// ------------------------------------------------ //
/***
 * Checkbox Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type CheckboxProps = VariantProps<typeof checkboxVariants> & ComponentProps<"input">

// ------------------------------------------------ //
/***
 * Input Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type InputProps = VariantProps<typeof inputVariants> & ComponentProps<"input">

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
export type RadioProps = VariantProps<typeof radioVariants> & ComponentProps<"input"> & {
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
export type SliderProps = VariantProps<typeof sliderVariants> & ComponentProps<"input">

// ------------------------------------------------ //
/***
 * Spinner Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLDivElement>
 * @param variant: string
 */
export type SpinnerProps = VariantProps<typeof spinnerVariants> & ComponentProps<"div">

// ------------------------------------------------ //
/***
 * Switch Props
 * @param className: string
 * @param forwardedRef: React.Ref<HTMLInputElement>
 * @param variant: string
 */
export type SwitchProps = VariantProps<typeof switchVariants> & VariantProps<typeof switchButtonVariants> & {
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
export type passwordInputProps = VariantProps<typeof passwordInputVariants> & ComponentProps<"input"> & {
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
export type AspectRatioProps = VariantProps<typeof aspectRatioVariants> & {
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
