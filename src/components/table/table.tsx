import { cn } from "@/lib/utils";

const TableWrapper = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("overflow-hidden", className)} {...props} />
  );
};

export { TableWrapper };
