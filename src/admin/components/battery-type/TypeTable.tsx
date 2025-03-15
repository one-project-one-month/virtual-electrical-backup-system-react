import { ApiResponse } from "@/types/apiResponse";
import { Types } from "@/types/batteryTypes";
import { useState } from "react";
import { batteryTypes } from "@/admin/data/batteryType";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import TypeRow from "./TypeRow";

const TypeTable = () => {
  const [type, setType] = useState<ApiResponse<Types[]>>({
    message: "Data has been retrieved successfully",
    data: batteryTypes,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Percentage</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {type?.data?.map((type) => (
            <TypeRow key={type.id} type={type} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TypeTable;
