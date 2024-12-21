import { AnchorProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";

export type LinkProp = AnchorProps & {
  className?: string;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProp>(
  ({ className, children, href, ...props }, forwardedRef) => (
    <a
      {...props}
      ref={forwardedRef}
      href={href}
      className={cn(className, { ...props })}
    >
      {children}
    </a>
  )
);

Link.displayName = "Link";
