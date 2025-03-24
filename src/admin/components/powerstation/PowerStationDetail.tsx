
import { useParams } from "react-router-dom";
import { LucideImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { formatTime } from "@/util/format";
import { useQuery } from "@tanstack/react-query";
import { getPowerStationByIdOption } from "@/query/powerStationQueryOptions";

export default function PowerStationDetail() {
  const { id } = useParams<{ id: string }>();
  if(!id) {
    throw Error("PowerStation Not found");
  }
  const {data} = useQuery(getPowerStationByIdOption(id));

  return (
    <section className="p-5">
        {data ? <div className="grid grid-cols-2 gap-x-5">
          <div className="h-[25rem] bg-gray-300 w-full flex justify-center items-center rounded-lg">
            <LucideImage className="w-[50px] h-[50px] text-gray-500" />
           </div>
           <div>
           <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-600">Model:</p>
            <p>{data.model}</p>
              </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Watt:</p>
            <p>{data.watt}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Brand ID:</p>
            <p>{data.brandId}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Wave Type:</p>
            <p>{data.waveType}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Usable Watt:</p>
            <p>{data.usableWatt}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Charging Time:</p>
            <p>{formatTime(data.chargingTime)}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Charging Type:</p>
            <p>{data.chargingType}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Input Watt:</p>
            <p>{data.inputWatt}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Input Amp:</p>
            <p>{data.inputAmp}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Output Amp:</p>
            <p>{data.outputAmp}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Power Station Price:</p>
            <p>{data.powerStationPrice}</p>
           </div>
           <div className="mt-7 grid grid-cols-2 gap-4">
            <p className="text-gray-600">Description:</p>
            <p>{data.description}</p>
           </div>
          <div className="mt-7 flex justify-between">
            <Button className="w-1/2 mr-2 bg-gray-600 hover:bg-gray-400 active:scale-95">
                <Link to="/admin/powerstations">Back</Link>
            </Button>
            <Button className="w-1/2 ml-2 duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95">
              <Link to={`/admin/powerstation/edit/${data._id}`}>Edit</Link>
            </Button>
          </div>
           </div>
        </div> : <div className="col-span-12 flex flex-col items-center justify-center h-[50vh]">
            <div className="text-4xl font-bold text-gray-700 mb-4">Power Station Not Found</div>
            <p className="text-gray-500">The power station you are looking for does not exist or has been removed.</p>
        </div>}
    </section>
  );
}
