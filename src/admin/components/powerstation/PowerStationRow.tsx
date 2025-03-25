import { PowerStations } from "@/types/powerstations";
import { formatTime } from "@/util/format";
import { Link } from "react-router-dom";

type PowerStationRowProps = {
  powerstation: PowerStations;
  id: number;
  handleDelete: (id: string) => void;
};

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { LucideNotepadText } from "lucide-react";

const PowerStationRow = ({
  powerstation: {
    _id,
    model,
    watt,
    brandId,
    waveType,
    usableWatt,
    chargingTime,
    chargingType,
    powerStationPrice,
  },
  id,
  handleDelete
}: PowerStationRowProps) => {


  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{model}</TableCell>
        <TableCell>
          {brandId.name}
        </TableCell>
        <TableCell>
          {watt}
          <span className="ms-2">W</span>
        </TableCell>
        <TableCell className="text-center">{waveType}</TableCell>
        <TableCell className="text-center">
          {usableWatt}
          <span className="ms-2">W</span>
        </TableCell>
        <TableCell className="text-center">{chargingType}</TableCell>
        <TableCell className="text-center">
          {formatTime(chargingTime)}
        </TableCell>
        <TableCell className="text-right">
          <span className="me-2">{powerStationPrice}</span>$
        </TableCell>
        <TableCell className="text-right flex gap-1 justify-end">
          <Link to={`/admin/powerstation/edit/${_id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil />
            </Button>
          </Link>
          <Button onClick={() => handleDelete(_id)} variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
          <Link to={`/admin/powerstation/detail/${_id}`}>
            <Button variant="outline" size="sm">
              <LucideNotepadText />
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PowerStationRow;
