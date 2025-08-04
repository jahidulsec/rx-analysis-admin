"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Territory } from "@/types/territory";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/use-debounce";
import { getTerritories } from "@/features/territory/servers/user";

export function TerritoryCombobox({
  placeholder = "Territory",
  ...props
}: React.ComponentProps<"input">) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue ?? "");
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const debounceValue = useDebounce(inputValue);

  const [data, setData] = React.useState<Territory[]>([]);

  const handleData = async () => {
    setLoading(true);
    const response = await getTerritories({ search: debounceValue });

    if (response.error) {
      toast.error(response.error.message);
    }
    if (response.data) {
      setData(response.data?.data ?? []);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    handleData();
  }, [debounceValue]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? data.find((territory) => territory.sapTerritoryId === value)
                  ?.territory
              : `Select ${placeholder}`}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search..."
              className="h-9"
              onValueChange={(value) => {
                setInputValue(value);
              }}
            />

            <CommandList>
              <CommandEmpty>{loading ? "Loading" : "No found."}</CommandEmpty>
              <CommandGroup>
                {data.map((territory) => (
                  <CommandItem
                    key={territory.sapTerritoryId}
                    value={territory.sapTerritoryId}
                    onSelect={() => {
                      setValue(territory.sapTerritoryId);
                      setOpen(false);
                    }}
                  >
                    {territory.territory} ({territory.sapTerritoryId})
                    <Check
                      className={cn(
                        "ml-auto",
                        value === territory.sapTerritoryId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <input type="text" className="hidden" {...props} value={value} />
    </>
  );
}
