import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import type { Generator } from "@/types/generator";

type GeneratorRowProps = {
    generator : Generator
}
const GeneratorRow = ({
    generator : {id,name,brand,model,watt,price,fuelType}
} : GeneratorRowProps) => {
  return (
    <>
    <TableRow>
    <TableCell className="font-medium">{id}</TableCell>
    <TableCell> {name} </TableCell>
    <TableCell> {brand} </TableCell>
    <TableCell className="text-right"> {model} </TableCell>
    <TableCell className="text-right"> {watt} </TableCell>
    <TableCell className="text-right"> {fuelType} </TableCell>
    <TableCell className="text-right">$ {price} </TableCell>
    <TableCell className="text-right">
      <Button variant="outline" size="sm">
        <LucidePencil className="size-3" />
      </Button>
      <Button variant="outline" size="sm">
        <LucideTrash2 />
      </Button>
    </TableCell>
  </TableRow>
    </>

  )
}

export default GeneratorRow