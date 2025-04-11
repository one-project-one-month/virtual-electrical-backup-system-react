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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            <TableHead>Brand Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Storage AMP</TableHead>
            <TableHead className="text-right">Voltage</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Description</TableHead>
            <TableHead className="text-right"></TableHead>
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
