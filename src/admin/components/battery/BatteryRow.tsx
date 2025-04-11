import { Batteries } from "@/types/batteries";
import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
type BatteryRowProps = {
  battery: Batteries;
};

const BatteryRow = ({
  battery: {
    id,
    brandName,
    brandType,
    storageAMP,
    voltage,
    price,
    description,
  },
}: BatteryRowProps) => {

    const navigate = useNavigate();
    const handleEditClick = (id: number) => {
      navigate(`/admin/battery/edit/id=${id}`);
    };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {brandName} </TableCell>
        <TableCell> {brandType} </TableCell>
        <TableCell className="text-center"> {storageAMP} </TableCell>
        <TableCell className="text-center"> {voltage} </TableCell>
        <TableCell className="text-center"> {price} </TableCell>
        <TableCell className="text-center"> {description} </TableCell>
        <TableCell className="text-right">
          <Button
            onClick={() => {
              handleEditClick(id);
            }}
            variant="outline"
            size="sm"
          >
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
