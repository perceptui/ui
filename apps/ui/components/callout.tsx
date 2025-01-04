"use client";

import { ReactNode } from "react";

export const Callout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="my-3 relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 bg-muted/50">
      {/* {title && (
        <div className="mb-1 font-medium leading-none tracking-tight">
          {title}
        </div>
      )} */}
      <div className="text-sm [&_p]:leading-relaxed">{children}</div>
    </div>
  );
};
