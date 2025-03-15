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
        {/* Image Column */}
        <div className="col-span-4">
          <img
            className="w-full h-[180px] object-cover border-2 border-gray-200 rounded-lg"
            src={battery?.image}
            alt="battery"
          />
        </div>

        {/* Details Column */}
        <div className="col-span-8 grid grid-cols-5 gap-y-3">
          <p className="text-sm font-light text-gray-500 col-span-2">
            Battery ID
          </p>
          <p className="text-sm font-normal col-span-3">{battery?.id}</p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Battery Name
          </p>
          <p className="text-sm font-normal col-span-3">{battery?.name}</p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Brand Name
          </p>
          <p className="text-sm font-normal col-span-3">
            {selectedBrand?.name}
          </p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Type Name
          </p>
          <p className="text-sm font-normal col-span-3">{selectedType?.name}</p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Storage AMP
          </p>
          <p className="text-sm font-normal col-span-3">
            {battery?.storage_amp} Ah
          </p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Battery Volt
          </p>
          <p className="text-sm font-normal col-span-3">{battery?.voltage} V</p>

          <p className="text-sm font-light text-gray-500 col-span-2">
            Description
          </p>
          <p className="text-sm font-normal col-span-3">
            {battery?.description}
          </p>

          {/* Button Row */}
          <div className="col-span-5 flex">
            <Button
              onClick={previousPage}
              className="bg-electric-400 text-white rounded-lg hover:bg-electric-500 hover:text-white"
              variant="outline"
            >
              Manage Battery
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatteryDetailForm;
