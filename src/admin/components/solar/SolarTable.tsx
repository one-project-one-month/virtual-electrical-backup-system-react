import { batteries } from "@/admin/data/batteries";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";

import { useState } from "react";

import { Solar } from "@/types/solar";
import { solarPanels } from "@/admin/data/solar";
import SolarRow from "./SolarRow";
import PaginationComponent from "@/components/PaginationComponent";

const SolarTable = () => {
  const [solarPanelsData, setSolarPanelsData] = useState<ApiResponse<Solar[]>>({
    message: "Data has been successfully",
    data: solarPanels,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Controller</TableHead>
            <TableHead className="text-right">Output Watt</TableHead>
            <TableHead className="text-right">Input Volt</TableHead>
            <TableHead className="text-right">Length</TableHead>
            <TableHead className="text-right">Width</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {solarPanelsData?.data?.map((solar) => (
            <SolarRow key={solar.id} solar={solar} />
          ))}
        </TableBody>
      </Table>
      <PaginationComponent />
    </section>
  );
};

export default SolarTable;
