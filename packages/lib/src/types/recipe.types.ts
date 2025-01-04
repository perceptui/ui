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
import { VariantProps } from "class-variance-authority";


export type alertStylesProps = VariantProps<typeof alertVariants>;
export type avatarStylesProps = VariantProps<typeof avatarVariants>;
export type badgeStylesProps = VariantProps<typeof badgeVariants>;
export type buttonStylesProps = VariantProps<typeof buttonVariants>;
export type checkboxStylesProps = VariantProps<typeof checkboxVariants>;
export type inputStylesProps = VariantProps<typeof inputVariants>;
export type radioStylesProps = VariantProps<typeof radioVariants>;
export type sliderStylesProps = VariantProps<typeof sliderVariants>;
export type spinnerStylesProps = VariantProps<typeof spinnerVariants>;
export type switchStylesProps = VariantProps<typeof switchVariants>;
export type switchButtonVariantsProps = VariantProps<typeof switchButtonVariants>;
export type passwordInputVariantsProps = VariantProps<typeof passwordInputVariants>;