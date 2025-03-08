import { Batteries } from "@/types/batteries";
import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2, LucideNotepadText } from "lucide-react";
import brands from "@/admin/data/brand";
import { batteryTypes } from "@/admin/data/batteryType";

type BatteryRowProps = {
  battery: Batteries;
};

const BatteryRow = ({
  battery: {
    id,
    name,
    storage_amp,
    voltage,
    //image,
    //description,
    brand_id,
    type_id,
  },
}: BatteryRowProps) => {
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`/admin/battery/edit/${id}`);
  };
  const handleViewClick = (id: number) => {
    navigate(`/admin/battery/detail/${id}`);
  };

  //For display Brand Name from other table.
  const selectedBrand = brands.find((brand) => brand.id === Number(brand_id));

  //For display Type Name from other table
  const selectedType = batteryTypes.find((type) => type.id === Number(type_id));
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {name} </TableCell>
        <TableCell>{selectedBrand.name}</TableCell>
        <TableCell className="text-center"> {storage_amp} Ah</TableCell>
        <TableCell className="text-center"> {voltage} V</TableCell>
        <TableCell className="text-center">{selectedType.name}</TableCell>
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
          <Button
            onClick={() => {
              handleViewClick(id);
            }}
            variant="outline"
            size="sm"
          >
            <LucideNotepadText />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BatteryRow;
