import { Inverters } from "@/types/inverters";

type InverterRowProps = {
  inverter: Inverters;
};

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
const InverterRow = ({
  inverter: { id,type, watt, waveType, model, brand, compatibleBattery, inputVolt, outputVolt,price },
}: InverterRowProps) => {
  return (
    <>
      <TableRow className="overflow-scroll">
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className=""> {type} </TableCell>
        <TableCell className="text-right"> {watt} W </TableCell>
        <TableCell className=""> {waveType} </TableCell>
        <TableCell className=""> {model} </TableCell>
        <TableCell className=""> {brand} </TableCell>
        <TableCell className=""> {compatibleBattery} </TableCell>
        <TableCell className="text-center"> {inputVolt} V</TableCell>
        <TableCell className="text-center"> {outputVolt} V</TableCell>
        <TableCell className="text-right"> {price} $</TableCell>
        <TableCell className="text-right flex gap-1">
          <Button variant="outline" size="sm">
            <LucidePencil className="size-3" />
          </Button>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InverterRow;
