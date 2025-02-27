import { PowerStations } from "@/types/powerstations";
import { useFormat } from "@/hooks/useFormat";
import { Link } from "react-router-dom";

type PowerStationRowProps = {
    powerstation: PowerStations;
}

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { LucideNotepadText } from "lucide-react";

const PowerStationRow = ({powerstation: {
  id,  
  model,  
  watt,  
  brandId,  
  waveType,  
  usableWatt,  
  chargingTime,  
  chargingType,  
  inputWatt,  
  inputAmp,  
  outputAmp,  
  powerStationPrice,  
  image,  
  description 
}}: PowerStationRowProps) => {

    const {formatTime} = useFormat();

    return (
        <>
        <TableRow>
            <TableCell >{id}</TableCell>
            <TableCell >{model}</TableCell>
            <TableCell >{brandId}</TableCell>
            <TableCell >{watt}<span className="ms-2">W</span></TableCell>
            <TableCell className="text-center">{waveType}</TableCell>
            <TableCell className="text-center">{usableWatt}<span className="ms-2">W</span></TableCell>
            <TableCell className="text-center">{chargingType}</TableCell>
            <TableCell className="text-center">{formatTime(chargingTime)}</TableCell>
            <TableCell className="text-right">{inputWatt}<span className="ms-2">W</span></TableCell>
            <TableCell className="text-right">{inputAmp}<span className="ms-2">Amp</span></TableCell>
            <TableCell className="text-right">{outputAmp}<span className="ms-2">Amp</span></TableCell>
            <TableCell className="text-right"><span className="me-2">{powerStationPrice}</span>$</TableCell>
            <TableCell className="text-right flex gap-1 justify-end">
                <Button variant="outline" size="sm">
                    <Link to={`/admin/powerstation/edit/${id}`}>
                        <LucidePencil />
                    </Link>
                </Button>
                <Button variant="outline" size="sm">
                    <Link to={`/admin/powerstation/detail/${id}`}>
                        <LucideNotepadText />
                    </Link>
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
