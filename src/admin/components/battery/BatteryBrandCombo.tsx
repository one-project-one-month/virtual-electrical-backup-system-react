import React from "react";
import { batteryBrands } from "@/admin/data/batteryBrands"
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

interface BatteryBrandComboProps {
  value: string; // Selected brand value
  onChange: (value: string) => void; // Function to update value
  selected?: string; // Optional selected brand
}

const BatteryBrandCombo: React.FC<BatteryBrandComboProps> = ({
  onChange,
  selected,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);
    onChange?.(newValue);
  };

  return (
    <>
      <input type="hidden" id="brand" name="brand" value={value} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selected
              ? selected
              : value
              ? batteryBrands.find(
                  (batteryBrand) => batteryBrand.name === value
                )?.name
              : "Select Brand Name"}

            {/* {value 
              ? batteryBrands.find(
                  (batteryBrand) => batteryBrand.name === value
                )?.name
              : "Select Brand Name"} */}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {batteryBrands.map((batteryBrand) => (
                  <CommandItem
                    key={batteryBrand.id}
                    value={batteryBrand.name}
                    // onSelect={(currentValue) => {
                    //   setValue(currentValue === value ? "" : currentValue);
                    //   setOpen(false);
                    // }}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === batteryBrand.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {batteryBrand.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default BatteryBrandCombo;
