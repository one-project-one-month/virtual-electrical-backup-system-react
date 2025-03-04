import { Inverters } from "@/types/inverters";
import { Link } from "react-router-dom";

type InverterRowProps = {
  inverter: Inverters;
};
import { brands } from "@/admin/data/brands";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2, LucideNotepadText } from "lucide-react";
const InverterRow = ({
  inverter: { id, image, brandId, inverterVolt, inverterPrice, watt },
}: InverterRowProps) => {
  return (
    <>
      <TableRow className="overflow-scroll">
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className="font-medium p-0">
          <img
            className="h-[70px] w-[70px] rounded-full object-cover border-2 border-gray-200 ml-2"
            src={String(image)}
            alt="inverter"
          />
        </TableCell>
        <TableCell className="">
          {brands.find((b) => b.id === Number(brandId))?.name}
        </TableCell>
        <TableCell className="text-center"> {inverterVolt} V</TableCell>
        <TableCell className="text-center"> {watt} W</TableCell>
        <TableCell className="text-center"> {inverterPrice} $</TableCell>
        <TableCell className=" flex gap-1 justify-center">
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
