import { formatNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import React from "react";

const Card = ({
  className,
  title,
  item,
  ...props
}: React.ComponentProps<"article"> & {
  item: { value: number | string; icon: LucideIcon };
}) => {
  return (
    <article
      className={cn("border rounded-md p-4 flex flex-col gap-1", className)}
      {...props}
    >
      <div className="flex justify-between items-center gap-5">
        <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
        <div className="p-2 bg-muted rounded-xl flex justify-center items-center">
          <item.icon className="size-3.5 text-primary fill-primary/40" />
        </div>
      </div>
      <h4 className="font-bold text-2xl">
        {typeof item.value === "number" ? formatNumber(item.value) : item.value}
      </h4>
    </article>
  );
};

export { Card };
