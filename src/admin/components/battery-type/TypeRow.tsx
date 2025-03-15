import { Type } from "@/types/batteryTypes";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { Link } from "react-router-dom";

type TypeRowProps = {
  type: Type;
};
const BrandRow = ({ type: { id, name, percentage } }: TypeRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {name} </TableCell>
        <TableCell className="text-right"> {percentage} </TableCell>

        <TableCell className="text-right">
          <Button variant="outline" size="sm">
            <Link to={`/admin/battery-type/edit/${id}`}>
              <LucidePencil className="size-3" />
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BrandRow;
