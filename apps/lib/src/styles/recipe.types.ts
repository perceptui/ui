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
import { VariantProps } from "class-variance-authority";
import { passwordInputStyles } from "./password-input.styles";


export type alertStylesProps = VariantProps<typeof alertStyles>;
export type avatarStylesProps = VariantProps<typeof avatarStyles>;
export type badgeStylesProps = VariantProps<typeof badgeStyles>;
export type buttonStylesProps = VariantProps<typeof buttonStyles>;
export type checkboxStylesProps = VariantProps<typeof checkboxStyles>;
export type inputStylesProps = VariantProps<typeof inputStyles>;
export type radioStylesProps = VariantProps<typeof radioStyles>;
export type sliderStylesProps = VariantProps<typeof sliderStyles>;
export type spinnerStylesProps = VariantProps<typeof spinnerStyles>;
export type switchStylesProps = VariantProps<typeof switchStyles>;
export type switchButtonVariantsProps = VariantProps<typeof switchButtonVariants>;
export type passwordInputVariantsProps = VariantProps<typeof passwordInputStyles>;