import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideNotepadText, LucidePencil, LucideTrash2 } from "lucide-react";
import type { Generator } from "@/types/generator";
import { Link } from "react-router-dom";

type GeneratorRowProps = {
    generator : Generator
}
const GeneratorRow = ({
    generator : {id,name,brandId,model,watt,price,fuelType}
} : GeneratorRowProps) => {
  return (
    <>
    
    <TableRow>
    <TableCell className="font-medium">{id}</TableCell>
    <TableCell> {name} </TableCell>
    <TableCell> {brandId} </TableCell>
    <TableCell className="text-right"> {model} </TableCell>
    <TableCell className="text-right"> {watt} </TableCell>
    <TableCell className="text-right"> {fuelType} </TableCell>
    <TableCell className="text-right">$ {price} </TableCell>
    <TableCell className="text-right">
        <Link to={`/admin/generator/edit/${id}`}>
      <Button variant="outline" size="sm">
        <LucidePencil className="size-3" />
      </Button>
      </Link>
      <Button variant="outline" size="sm">
        <LucideTrash2 />
      </Button>
      <Link to={`/admin/generator/detail/${id}`}>
            <Button variant="outline" size="sm">
              <LucideNotepadText />
            </Button>
          </Link>
    </TableCell>
  </TableRow>
    
    </>

  )
}

export default GeneratorRow