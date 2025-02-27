import brands from "@/admin/data/brand";
import { ApiResponse } from "@/types/apiResponse";
import { Brands } from "@/types/brand";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BrandRow from "./BrandRow";

const BrandTable = () => {
  const [brand, setBrand] = useState<ApiResponse<Brands[]>>({
    message: "Data has been retrieved successfully",
    data: brands,
  });

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brand?.data?.map((brand) => (
            <BrandRow key={brand.id} brand={brand} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default BrandTable;
