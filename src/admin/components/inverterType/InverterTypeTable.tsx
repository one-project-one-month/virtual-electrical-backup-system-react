import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InverterTypeRow from "./InverterTypeRow";
import { InverterType } from "@/types/inverterType";

type InverterTypeTableProps = {
  data: InverterType[];
};

const InverterTypeTable = ({ data }: InverterTypeTableProps) => {
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
          {data?.map((inverter) => (
            <InverterTypeRow key={inverter.id} inverterType={inverter} />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default InverterTypeTable;
