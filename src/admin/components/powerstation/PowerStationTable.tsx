import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ApiResponse } from "@/types/apiResponse";
import { powerstations } from "@/admin/data/powerstations";
import { PowerStations } from "@/types/powerstations";
import PowerStationRow from "./PowerStationRow";
import { useState } from "react";

export default function PowerStationTable() {

    const [powerStationData, setPowerStationData] = useState<ApiResponse<PowerStations[]>>({
        message: "Data recieved successfully",
        data: powerstations,
    });


  return (
    <section className="px-5 mt-5">
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
                {powerStationData?.data?.map((item) => {

                    return (
                        <PowerStationRow key={item.id} powerstation={item} />
                    )
                })}
            </TableBody>
        </Table>
    </section>
  )
}
