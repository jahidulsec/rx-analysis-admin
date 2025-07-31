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
        "flex items-center justify-between gap-3 flex-wrap",
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
      className={cn(
        "flex items-center gap-3 flex-wrap",
        className
      )}
    />
  );
}

export { Section, HeaderSection, ActionSection };
