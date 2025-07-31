"use client";

import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  className,
  children,
  ...props
}: React.ComponentProps<"h2"> & { icon?: React.ReactNode }) => {
  return (
    <h2
      className={cn(
        "text-lg font-semibold flex items-center gap-2",
        className
      )}
      {...props}
    >
      {props.icon && <div className="bg-primary/75 text-background [&_svg]:size-3.5 p-1 rounded-full">{props.icon}</div>}
      {children}
    </h2>
  );
};

export { SectionHeading };
