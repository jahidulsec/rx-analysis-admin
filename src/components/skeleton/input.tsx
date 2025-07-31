import React from "react";
import { Skeleton } from "../ui/skeleton";

const SearchSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[180px] h-8" />
    </div>
  );
};

export { SearchSkeleton };
