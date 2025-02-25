"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const powerStationBrands = [
    {
      value: "1",
      label: "Tesla Powerwall",
    },
    {
      value: "2",
      label: "Generac",
    },
    {
      value: "3",
      label: "Goal Zero",
    },
    {
      value: "4",
      label: "Jackery",
    },
    {
      value: "5",
      label: "Bluetti",
    },
  ];

type brandId = {
  id?: number
}
  

export function PowerStationBrandSelectBox({id}: brandId) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(id? powerStationBrands.find((brand) => Number(brand.value) === id)?.value : "")

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
        >
          {value
            ? powerStationBrands.find((brand) => brand.value === value)?.label
            : "Select a brand"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search brand..." />
          <CommandList>
            <CommandEmpty>No brand found.</CommandEmpty>
            <CommandGroup>
              {powerStationBrands.map((brand) => (
                <CommandItem
                  key={brand.value}
                  value={brand.label}
                  onSelect={() => {
                    setValue(brand.value)
                    setOpen(false)
                  }}
                >
                  {brand.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === brand.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <input type="hidden" name="brandId" value={value} />
    </div>
  )
}
