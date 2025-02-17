import { PowerStations } from "@/types/powerstations";

type PowerStationRowProps = {
    powerstation: PowerStations;
}

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";

const PowerStationRow = ({powerstation: {id, name, watt, wave_type, solar_support, battery_ah, brand, price}}: PowerStationRowProps) => {

    return (
        <>
        <TableRow>
            <TableCell >{id}</TableCell>
            <TableCell >{name}</TableCell>
            <TableCell >{brand}</TableCell>
            <TableCell className="text-center">{wave_type}</TableCell>
            <TableCell className="text-center">{solar_support? <span className="text-green-500">yes</span>: <span className="text-gray-500">no</span>}</TableCell>
            <TableCell className="text-right">{battery_ah}</TableCell>
            <TableCell className="text-right">{watt}</TableCell>
            <TableCell className="text-right"><span className="me-2">{price}.00</span>$</TableCell>
            <TableCell className="text-right flex gap-1 justify-end">
                <Button variant="outline" size="sm">
                    <LucidePencil />
                </Button>
                <Button variant="outline" size="sm">
                    <LucideTrash2 />
                </Button>
            </TableCell>
        </TableRow>
        </>
    )
}

export default PowerStationRow;
