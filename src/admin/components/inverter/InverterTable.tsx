import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InverterRow from "./InverterRow";
import { Inverters } from "@/types/inverters";

type InverterTableProps = {
  data: Inverters[];
};

const InverterTable = ({ data }: InverterTableProps) => {
  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg overflow-scroll overscroll-x-auto min-w-fit">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="">Image</TableHead>
            <TableHead className="">Brand</TableHead>
            <TableHead className="text-center min-w-[4rem]">Volt</TableHead>
            <TableHead className="text-center min-w-[6rem]">Power</TableHead>
            <TableHead className="text-center min-w-[6rem]">Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((inverter, index) => (
            <InverterRow
              key={inverter._id}
              inverter={inverter}
              id={index + 1}
            />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default InverterTable;
