import { inverterTypes } from "@/admin/data/inverters";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";
import { InverterType } from "@/types/inverters";
import { useState } from "react";
import InverterTypeRow from "./InverterTypeRow";

const InverterTable = () => {
  const [invertersData, setInverterData] = useState<
    ApiResponse<InverterType[]>
  >({
    message: "Data has been successfully",
    data: inverterTypes,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg overflow-scroll overscroll-x-auto min-w-fit">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="text-nowrap">Efficiency</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invertersData?.data?.map((inverter) => (
            <InverterTypeRow key={inverter.id} inverterType={inverter} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default InverterTable;
