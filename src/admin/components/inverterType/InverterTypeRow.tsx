import { InverterType } from "@/types/inverterType";
import { Link } from "react-router-dom";

type InverterTypeRowProps = {
  inverterType: InverterType;
};
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
const InverterRow = ({
  inverterType: { id, name, efficiency },
}: InverterTypeRowProps) => {
  return (
    <>
      <TableRow className="overflow-scroll">
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className="">{name}</TableCell>
        <TableCell className=""> {efficiency} </TableCell>
        <TableCell className="flex gap-1 justify-center">
          <Link to={`/admin/inverterType/edit/${id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InverterRow;
