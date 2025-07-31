import { cn } from "@/lib/utils";
import React from "react";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn("container mx-auto px-6", className)} />
  );
}

export { Section };
