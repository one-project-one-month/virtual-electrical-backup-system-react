import { inverters } from "@/admin/data/inverters";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";
import { Inverters } from "@/types/inverters";
import { useState } from "react";
import InverterRow from "./InverterRow";

const InverterTable = () => {
  const [invertersData, setInverterData] = useState<ApiResponse<Inverters[]>>({
    message: "Data has been successfully",
    data: inverters,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg overflow-scroll overscroll-x-auto min-w-fit">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="">Type</TableHead>
            <TableHead className="text-nowrap">Wave Type</TableHead>
            <TableHead className="">Model</TableHead>
            <TableHead className="">Brand</TableHead>
            <TableHead className="">Compatible Battery</TableHead>
            <TableHead className="text-center min-w-[4rem]">Volt</TableHead>
            <TableHead className="text-center min-w-[6rem]">Power</TableHead>
            <TableHead className="text-right min-w-[6rem]">Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invertersData?.data?.map((inverter) => (
            <InverterRow key={inverter.id} inverter={inverter} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default InverterTable;
