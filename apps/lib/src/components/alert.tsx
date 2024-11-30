import { cn } from "@/utils";
import { alertStyles } from "@/styles";
import {
  IoCheckmarkDoneCircle,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { PiSealWarning } from "react-icons/pi";
import { BiError } from "react-icons/bi";
import { alertProps } from "@/types";

export const Alert: React.FC<alertProps> = ({
  variant,
  type,
  message,
  icon,
  className,
  children,
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
      <p>{message || children}</p>
    </div>
  );
};

Alert.displayName = "Alert";
