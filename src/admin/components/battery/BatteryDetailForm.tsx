import { useParams } from "react-router-dom";
import { batteries } from "../../data/batteries";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import brands from "@/admin/data/brand";
import { batteryTypes } from "@/admin/data/batteryType";

const BatteryDetailForm = () => {
  const { id } = useParams();
  const battery = batteries.find((battery) => battery.id === Number(id));
  const navigate = useNavigate();

  //For display Brand Name from other table.
  const selectedBrand = brands.find(
    (brand) => brand.id === Number(battery?.brand_id)
  );

  //For display Type Name from other table
  const selectedType = batteryTypes.find(
    (type) => type.id === Number(battery?.type_id)
  );

  const previousPage = () => {
    navigate(-1);
  };
  console.log("selected brand", selectedBrand);
  console.log("selected type", selectedType);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5">
        <div className="col-span-4">
          <img
            className="w-full h-[180px] object-cover border-2 border-gray-200 rounded-lg"
            src={battery?.image}
            alt="battery"
          />
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-2 col-span-9">
          <p className="text-sm font-light text-gray-500">Battery ID</p>
          <p className="text-sm font-normal">{battery?.id}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-3 col-span-9">
          <p className="text-sm font-light text-gray-500">Battery Name </p>
          <p className="text-sm font-normal">{battery?.name}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-4 col-span-9">
          <p className="text-sm font-light text-gray-500">Brand Name</p>
          <p className="text-sm font-normal">{selectedBrand?.name}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-5 col-span-9">
          <p className="text-sm font-light text-gray-500">Type Name</p>
          <p className="text-sm font-normal">{selectedType?.name}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-6 col-span-9">
          <p className="text-sm font-light text-gray-500">Storage AMP</p>
          <p className="text-sm font-normal">{battery?.storage_amp} Ah</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-7 col-span-9">
          <p className="text-sm font-light text-gray-500">Battery Volt</p>
          <p className="text-sm font-normal">{battery?.voltage} V</p>
        </div>
        <div className="grid grid-cols-5 gap-1 row-start-8 col-span-9">
          <p className="text-sm font-light text-gray-500">Description</p>
          <p className="text-sm font-normal">{battery?.description} A</p>
        </div>
        <div className="grid grid-cols-5 gap-1 row-start-9 col-span-9">
          <Button
            onClick={previousPage}
            className="bg-electric-400 col-span-2 text-white rounded-lg hover:bg-electric-500 hover:text-white"
            variant="outline"
          >
            Manage Battery
          </Button>
        </div>
      </div>
    </>
  );
};

export default BatteryDetailForm;
