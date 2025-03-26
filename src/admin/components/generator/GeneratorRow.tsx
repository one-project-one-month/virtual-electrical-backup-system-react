import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  LucideNotepadText,
  LucidePencil,
  LucideTrash2,
} from "lucide-react";
import type { Generator } from "@/types/generator";
import { Link } from "react-router-dom";
import { useGeneratorStore } from "@/store/generatorStore";
import { brands } from "@/admin/data/brands";
import { useEffect, useState } from "react";

type GeneratorRowProps = {
  generator: Generator;
  index: number;
};
const GeneratorRow = ({ generator, index }: GeneratorRowProps) => {
  const removeGenerator = useGeneratorStore((state) => state.removeGenerator);
  const [isDeleting, setIsDeleting] = useState(false);
  // const generators = useGeneratorStore ((state) => state.generators)
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await removeGenerator(generator.id);
      console.log("Generator deleted successfully");
    } catch (error) {
      console.error("Failed to delete generator:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{index + 1}</TableCell>
        <TableCell> {generator.name} </TableCell>
        <TableCell>
          {" "}
          {brands.find((b) => b.id === Number(generator.brandId))?.name}
        </TableCell>
        <TableCell className="text-right"> {generator.model} </TableCell>
        <TableCell className="text-right"> {generator.watt} W</TableCell>
        <TableCell className="text-right"> {generator.fuelType} </TableCell>
        <TableCell className="text-right">{generator.price} $</TableCell>
        <TableCell className="text-right">
          <Link to={`/admin/generator/edit/${generator.id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          
          <Link to={`/admin/generator/detail/${generator.id}`}>
            <Button variant="outline" size="sm">
              <LucideNotepadText />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
            aria-label="Delete generator"
          >
            {isDeleting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LucideTrash2 className="h-4 w-4" />
            )}
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default GeneratorRow;
