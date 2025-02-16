import { batteries } from "@/admin/data/batteries";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";
import { Batteries } from "@/types/batteries";
import { useState } from "react";
import BatteryRow from "./BatteryRow";

const BatteryTable = () => {
  const [batteriesData, setBatteriesData] = useState<ApiResponse<Batteries[]>>({
    message: "Data has been successfully",
    data: batteries,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-right">Capacity</TableHead>
            <TableHead className="text-right">Voltage</TableHead>
            <TableHead className="text-right">Model No</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {batteriesData?.data?.map((battery) => (
            <BatteryRow key={battery.id} battery={battery} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default BatteryTable;
