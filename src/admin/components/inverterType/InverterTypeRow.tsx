import { InverterType } from "@/types/inverterType";
import { Link } from "react-router-dom";
import { useDeleteInverterTypeOption } from "@/query/inverterTypeQueryOption";
import { useMutation } from "@tanstack/react-query";

type InverterTypeRowProps = {
  inverterType: InverterType;
  id: number;
};
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
const InverterRow = ({
  inverterType: { _id, name, efficiency },
  id,
}: InverterTypeRowProps) => {
  const { mutateAsync: deleteInverterTypeMutation } = useMutation(
    useDeleteInverterTypeOption()
  );
  const handleDelete = (_id: string) => {
    deleteInverterTypeMutation(_id);
  };
  return (
    <>
      <TableRow className="overflow-scroll">
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell className="">{name}</TableCell>
        <TableCell className=""> {efficiency} </TableCell>
        <TableCell className="flex gap-1 justify-center">
          <Link to={`/admin/inverterType/edit/${_id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          <Button variant="outline" size="sm" onClick={() => handleDelete(_id)}>
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InverterRow;
