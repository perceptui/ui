import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { alertStyles } from "@/styles";
import { ComponentProps } from "react";
import {
  IoCheckmarkDoneCircle,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { PiSealWarning } from "react-icons/pi";
import { BiError } from "react-icons/bi";

type alertProps = VariantProps<typeof alertStyles> &
  ComponentProps<"div"> & {
    type?: String;
    message: String;
    icon?: React.ReactNode;
    className?: string;
  };

export const Alert: React.FC<alertProps> = ({
  variant,
  type,
  message,
  icon,
  className,
}) => {
  return (
    <div className={cn("w-full", className, alertStyles({ variant, type }))}>
      <span className="text-xl font-bold">
        {icon ? (
          icon
        ) : type === "success" ? (
          <IoCheckmarkDoneCircle />
        ) : type === "warning" ? (
          <PiSealWarning />
        ) : type === "error" ? (
          <BiError />
        ) : (
          <IoInformationCircleOutline />
        )}
      </span>
      <p>{message}</p>
    </div>
  );
};

Alert.displayName = "Alert";
