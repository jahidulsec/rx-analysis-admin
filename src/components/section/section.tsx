import { cn } from "@/lib/utils";
import React from "react";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn("container mx-auto px-4", className)} />
  );
}

function HeaderSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "flex sm:items-center justify-between gap-3 flex-wrap  flex-col sm:flex-row",
        className
      )}
    />
  );
}

function ActionSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("flex sm:items-center gap-3 flex-col sm:flex-row", className)}
    />
  );
}

export { Section, HeaderSection, ActionSection };
