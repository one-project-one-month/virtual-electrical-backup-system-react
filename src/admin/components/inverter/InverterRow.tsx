import { Inverters } from "@/types/inverters";
import { Link } from "react-router-dom";

type InverterRowProps = {
  inverter: Inverters;
  id: number;
};
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2, LucideNotepadText } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useDeleteInverterOption } from "@/query/inverterQueryOption";
const InverterRow = ({
  inverter: { _id, image, brandId, inverterVolt, inverterPrice, watt },
  id,
}: InverterRowProps) => {
  const { mutateAsync: deleteInverterMutation } = useMutation(
    useDeleteInverterOption()
  );
  const handleDelete = (id: string) => {
    deleteInverterMutation({ id });
  };
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
        <TableCell className="">{brandId.name}</TableCell>
        <TableCell className="text-center"> {inverterVolt} V</TableCell>
        <TableCell className="text-center"> {watt} W</TableCell>
        <TableCell className="text-center"> {inverterPrice} $</TableCell>
        <TableCell className=" flex gap-1 justify-center">
          <Link to={`/admin/inverter/edit/${_id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDelete(String(_id))}
          >
            <LucideTrash2 />
          </Button>
          <Link to={`/admin/inverter/detail/${_id}`}>
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
