import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
function SelectEl<T extends { id: number; name: string } & { name: string }>({
  data,
  name,
  defaultValue = undefined,
}: {
  data: T[];
  name: string;
  defaultValue: string | undefined;
}) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <Select
      name={name}
      value={value ? value : undefined}
      onValueChange={setValue}
    >
      <SelectTrigger className=" text-gray-600">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export default SelectEl;
