import React from "react";

const Field = ({ name, value }: { name: string; value: string | number }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xs font-medium text-muted-foreground">{name}</h3>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export { Field };
