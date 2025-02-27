import { Solar } from "@/types/solar";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { Link } from "react-router-dom";

type SolarRowProps = {
  solar: Solar;
};

const SolarRow = ({
  solar: { id, type, controller, outputVolt, outputWatt, length, width },
}: SolarRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {type} </TableCell>
        <TableCell> {controller} </TableCell>
        <TableCell className="text-right"> {outputWatt} </TableCell>
        <TableCell className="text-right"> {outputVolt} </TableCell>
        <TableCell className="text-right"> {length} </TableCell>
        <TableCell className="text-right"> {width} </TableCell>
        <TableCell className="text-right">
          <div className="flex justify-end">
            <Link to={`/admin/solar/edit/${id}`}>
              <Button variant="outline" size="sm">
                <LucidePencil className="size-3" />
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <LucideTrash2 />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SolarRow;
