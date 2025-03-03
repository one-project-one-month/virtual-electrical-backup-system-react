import { Inverters } from "@/types/inverters";
import { Link } from "react-router-dom";

type InverterRowProps = {
  inverter: Inverters;
};
import { inverterTypes } from "@/admin/data/inverters";
import { brands } from "@/admin/data/brands";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2, LucideNotepadText } from "lucide-react";
const InverterRow = ({
  inverter: {
    id,
    inverterType,
    waveType,
    model,
    brandId,
    compatibleBattery,
    inverterVolt,
    inverterPrice,
    watt,
  },
}: InverterRowProps) => {
  return (
    <>
      <TableRow className="overflow-scroll">
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className="">
          {inverterTypes.find((type) => type.id === inverterType)?.name}
        </TableCell>
        <TableCell className=""> {waveType} </TableCell>
        <TableCell className=""> {model} </TableCell>
        <TableCell className="">
          {brands.find((b) => b.id === Number(brandId))?.name}
        </TableCell>
        <TableCell className=""> {compatibleBattery} </TableCell>
        <TableCell className="text-center"> {inverterVolt} V</TableCell>
        <TableCell className="text-center"> {watt} W</TableCell>
        <TableCell className="text-right"> {inverterPrice} $</TableCell>
        <TableCell className="text-right flex gap-1">
          <Link to={`/admin/inverter/edit/${id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
          <Link to={`/admin/inverter/detail/${id}`}>
            <Button variant="outline" size="sm">
              <LucideNotepadText />
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InverterRow;
