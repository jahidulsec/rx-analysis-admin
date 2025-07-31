import { Loader } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 bg-muted p-1 pr-4 rounded-full">
      <div className="bg-primary/75 p-2 rounded-full text-background">
        <Loader size={16} />
      </div>
      <div className="">
        <h2 className="text-xs">Radiant</h2>
        <h3 className="text-sm font-semibold -mt-1.5">RX Analysis</h3>
      </div>
    </div>
  );
};

export { Logo };
