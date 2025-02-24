import { Link, useParams } from "react-router-dom";
import { inverters } from "../data/inverters";
import { inverterTypes } from "../data/inverters";
import { brands } from "../data/brands";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function InverterDetialPage() {
  const { slug: id } = useParams();
  const inverter = inverters.find((inverter) => inverter.id === Number(id));
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Inverter Detail"
        links={[{ name: "Manage Inverter", path: "../inverter" }]}
      />
      <div className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5">
        <div className="col-span-3">
          <img
            className="w-full h-[180px] object-cover border-2 border-gray-200 rounded-lg"
            src={inverter?.image}
            alt="inverter"
          />
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-2 col-span-9">
          <p className="text-sm font-light text-gray-500">Inverter Type :</p>
          <p className="text-sm font-normal">
            {
              inverterTypes.find((type) => type.id === inverter?.inverterType)
                ?.name
            }
          </p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-3 col-span-9">
          <p className="text-sm font-light text-gray-500">Model :</p>
          <p className="text-sm font-normal">{inverter?.model}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-4 col-span-9">
          <p className="text-sm font-light text-gray-500">Brand :</p>
          <p className="text-sm font-normal">
            {brands.find((brand) => brand.id === inverter?.brandId)?.name}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-5 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Compatible Battery :
          </p>
          <p className="text-sm font-normal">{inverter?.compatibleBattery}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-6 col-span-9">
          <p className="text-sm font-light text-gray-500">Wave Type :</p>
          <p className="text-sm font-normal">{inverter?.waveType}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-7 col-span-9">
          <p className="text-sm font-light text-gray-500">Inverter Volt :</p>
          <p className="text-sm font-normal">{inverter?.inverterVolt} V</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-8 col-span-9">
          <p className="text-sm font-light text-gray-500">Inverter Watt :</p>
          <p className="text-sm font-normal">{inverter?.watt} W</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-9 col-span-9">
          <p className="text-sm font-light text-gray-500">Inverter Price :</p>
          <p className="text-sm font-normal">{inverter?.inverterPrice} $</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-10 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Inverter Description :
          </p>
          <p className="text-sm font-normal">{inverter?.description}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-11 col-span-9 mt-4">
          <Link
            className="bg-electric-400 text-white rounded-md text-center hover:bg-electric-500"
            to={`/admin/inverter/edit/${inverter?.id}`}
          >
            <Button
              className="bg-transparent text-white border-none hover:bg-transparent hover:text-white"
              variant="outline"
            >
              Edit
            </Button>
          </Link>
          <Button
            onClick={previousPage}
            className=" border-2 border-black"
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
export default InverterDetialPage;
