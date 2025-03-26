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

export function SelectBrand<T extends { id: number; name: string }>({
  brands,
  name,
  value,
  onChange,
}: {
  brands: T[];
  name: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (currentValue: number) => {
    const newValue = currentValue === value ? 0 : currentValue; 
    onChange(newValue);  
    setOpen(false); 
    console.log(newValue)
  };

  return (
    <>
      <input type="hidden" name={name} value={value.toString()} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className=" flex-1 justify-between text-gray-600 text-sm font-normal"
          >
            {value
              ? brands.find((brand) => brand.id === Number(value))?.name
              : "Select ..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search brand..." />
            <CommandList>
              <CommandEmpty>No Brands found.</CommandEmpty>
              <CommandGroup>
                {brands.map((brand) => (
                  <CommandItem
                    key={brand.id}
                    value={brand.id.toString()}
                    onSelect={() => handleSelect(brand.id)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === brand.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {brand.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
