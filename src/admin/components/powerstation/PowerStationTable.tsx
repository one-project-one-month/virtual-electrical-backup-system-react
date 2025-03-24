import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PowerStationRow from "./PowerStationRow";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PowerStations } from "@/types/powerstations";
import { getPowerStationOptions, deletePowerStationByIdOption } from "@/query/powerStationQueryOptions";

export default function PowerStationTable() {

  const {data: powerStationDatas, isLoading, isError} = useQuery(getPowerStationOptions());
  const deleteMutation = useMutation(deletePowerStationByIdOption());

  const handleDelete = (id: string) => {
    deleteMutation.mutate({id: id})
  }

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading power stations...</p>;
  }

  if(isError) {
    return <p className="text-center text-gray-500">Something went wrong..</p>;
  }

  return (
    <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Watt</TableHead>
            <TableHead className="text-center">Wave Type</TableHead>
            <TableHead className="text-center">Usable Watt</TableHead>
            <TableHead className="text-center">Charging Type</TableHead>
            <TableHead className="text-center">Charging Time</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {powerStationDatas?.map((item: PowerStations, index:number) => {
            return <PowerStationRow key={item._id} powerstation={item} id={index + 1} handleDelete={handleDelete} />;
          })}
        </TableBody>
      </Table>
    </section>
  );
}
