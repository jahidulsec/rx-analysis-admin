import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  className,
  ...props
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-lg font-semibold flex items-center gap-2 [&_svg]:size-4 [&_svg]:text-primary",
        className
      )}
      {...props}
    />
  );
};

export { SectionHeading };
