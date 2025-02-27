import { devices } from "@/admin/data/devices";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";
import { Devices } from "@/types/devices";
import { useState } from "react";
import DeviceRow from "./DeviceRow";

const DeviceTable = () => {
  const [deviceData, setDeviceData] = useState<ApiResponse<Devices[]>>({
    message: "Data has been successfully",
    data: devices,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Watt</TableHead>
            <TableHead className="text-center w-fit">Pure Sine Wave</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deviceData?.data?.map((device) => (
            <DeviceRow key={device.id} device={device} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default DeviceTable;
