"use client";

import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

type InputNumberButtonProps = React.ComponentProps<"input"> & {
  onValueChange?: (value: number) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
};

const InputNumberButton = ({
  className,
  onValueChange,
  defaultValue = 1,
  min = 0,
  max,
  step = 1,
  ...props
}: InputNumberButtonProps) => {
  const [value, setValue] = React.useState<number>(defaultValue);

  const updateValue = (newValue: number) => {
    if (max !== undefined && newValue > max) return;
    if (newValue < min) return;

    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      updateValue(newValue);
    }
  };

  const decrement = () => {
    updateValue(value - step);
  };

  const increment = () => {
    updateValue(value + step);
  };

  return (
    <div className={cn("relative", className)}>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        className="px-2 text-center"
        min={min}
        max={max}
        step={step}
        {...props}
      />

      <Button
        type="button"
        size={"icon"}
        variant={"outline"}
        disabled={value <= min}
        className="absolute top-0 left-0"
        onClick={decrement}
      >
        <Minus />
      </Button>

      <Button
        type="button"
        size={"icon"}
        variant={"outline"}
        disabled={max !== undefined && value >= max}
        className="absolute top-0 right-0"
        onClick={increment}
      >
        <Plus />
      </Button>
    </div>
  );
};

export { InputNumberButton };
