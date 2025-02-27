import { Devices } from "@/types/devices";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { Link } from "react-router-dom";
type DeviceRowProps = {
  device: Devices;
};
const DeviceRow = ({
  device: { id, deviceName, watt, pureSineWave },
}: DeviceRowProps) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell> {deviceName} </TableCell>
        <TableCell> {watt} W</TableCell>
        <TableCell className="text-center">
          {pureSineWave ? (
            <span className="text-green-500">True</span>
          ) : (
            <span className="text-red-500">False</span>
          )}
        </TableCell>
        <TableCell className="flex gap-2 items-center justify-center">
          <Link to={`/admin/device/edit/${id}`}>
            <Button variant="outline" size="sm">
              <LucidePencil className="size-3" />
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default DeviceRow;
