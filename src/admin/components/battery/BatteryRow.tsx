import { Batteries } from "@/types/batteries";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
type BatteryRowProps = {
  battery: Batteries;
};

const BatteryRow = ({
  battery: { id, name, capacity, voltage, brand, modelNo, price },
}: BatteryRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {name} </TableCell>
        <TableCell> {brand} </TableCell>
        <TableCell className="text-right"> {capacity} </TableCell>
        <TableCell className="text-right"> {voltage} </TableCell>
        <TableCell className="text-right"> {modelNo} </TableCell>
        <TableCell className="text-right"> {price} </TableCell>
        <TableCell className="text-right">
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

export default BatteryRow;
