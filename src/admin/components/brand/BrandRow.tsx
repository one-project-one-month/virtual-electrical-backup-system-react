import { Brands } from "@/types/brand";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { Link } from "react-router-dom";

type BrandRowProps = {
  brand: Brands,
  id: number,
  delete: (id: string) => void
}

const BrandRow = ({brand, id, delete: handleDelete}: BrandRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {brand.name} </TableCell>
        <TableCell> {typeof brand.category === "object" && brand.category?.name} </TableCell>
        <TableCell className="text-right flex gap-2 justify-end">
          <Button variant="outline" size="sm">
            <Link to={`/admin/brand/edit/${brand._id}`}>
              <LucidePencil className="size-3" />
            </Link>
          </Button>
          <Button variant="outline" onClick={() => handleDelete(brand._id)} size="sm">
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BrandRow;
