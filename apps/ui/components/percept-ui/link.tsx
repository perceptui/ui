"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

export type AnchorProps = ComponentProps<"a">;

export const Link = forwardRef<HTMLAnchorElement, AnchorProps>(
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
