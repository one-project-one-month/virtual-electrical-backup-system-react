import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import BatteryBrandCombo from "../battery/BatteryBrandCombo";
import BatteryTypeCombo from "../battery/BatteryTypeCombo";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
// import DialogBrand from "../components/battery/DialogBrand";
// import DialogType from "../components/battery/DialogType";

import { Button } from "@/components/ui/button";
import { batteries } from "../../data/batteries";
import { useState } from "react";
import { updateBattery } from "../../data/batteries";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const EditBatteryForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const BatteryID = id;

  interface FormData {
    id: number | null;
    name: "";
    brandName: string;
    typeName: string;
    storage_amp: number;
    voltage: number;
    description: string;
  }
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    brandName: "",
    typeName: "",
    name: "",
    storage_amp: 0,
    voltage: 0,
    description: "",
  });

  //for battery brand
  const [selectedBrand, setSelectedBrand] = React.useState("defaultBrand");
  //for battery type
  const [selectedType, setSelectedType] = React.useState("defaultBrand");

  type FormFeilds = {
    id: number;
    brand: string;
    type: string;
    name: string;
    storage_amp: number;
    voltage: number;
    description: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormFeilds>({
    defaultValues: {
      id: 0,
      brand: "",
      type: "",
      name: "",
      storage_amp: 0,
      voltage: 0,
      description: "",
    },
  });

  useEffect(() => {
    const selectedBattery = batteries.find(
      (battery) => battery.id === Number(BatteryID)
    );
    if (selectedBattery) {
      setFormData({
        id: selectedBattery.id,
        name: selectedBattery.name,
        storage_amp: selectedBattery.storage_amp,
        voltage: selectedBattery.voltage,
        description: selectedBattery.description,
      });

      // Reset form with loaded data
      reset({
        id: selectedBattery.id,
        name: selectedBattery.name,
        storage_amp: selectedBattery.storage_amp,
        voltage: selectedBattery.voltage,
        description: selectedBattery.description,
      });

      //for handling combo box
      // setSelectedBrand(selectedBattery.brandName);
      // setSelectedType(selectedBattery.brandType);
    }
  }, [BatteryID, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [checked, setChecked] = useState(true);

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log("update data", data);
    updateBattery(Number(formData.id), {
      // brandName: selectedBrand,
      // brandType: selectedType,
      storage_amp: data.storage_amp,
      voltage: data.voltage,
      description: data.description,
    });
    if (checked) {
      console.log("Redirecting to manage battery...");
      navigate(`/admin/battery/`);
    } else {
      console.log("Checkbox not checked. Staying on the same page.");
    }
  };

  return (
    <>
      <div className="container w-3/4 mt-5 mx-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between gap-6"
        >
          <div className="w-1/2">
            {/* //For handling ID  */}
            <input
              type="hidden"
              id="voltage"
              name="voltage"
              value={Number(formData.id)}
              placeholder="voltage"
              className="text-xl border border-grey-700"
            />

            {/* Battery Brand */}
            <div className=" text-xs text-gray-600 ">
              <label htmlFor="">Brand Name</label>
              <div className="flex gap-2 text-sm py-1">
                <Controller
                  name="brand"
                  control={control}
                  // rules={{ required: "Brand is required" }}
                  render={({ field }) => (
                    <BatteryBrandCombo
                      {...field}
                      value={selectedBrand}
                      onChange={(value) => {
                        field.onChange(value);
                        setSelectedBrand(value);
                      }}
                      selected={selectedBrand}
                    />
                  )}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="h-10 w-10 text-lg rounded-full"
                      variant="outline"
                      onClick={() => navigate(`/admin/brand/create`)}
                    >
                      +
                    </Button>
                  </DialogTrigger>
                  {/* <DialogBrand /> */}
                </Dialog>
              </div>
              <p className="text-red-500 text-xs min-h-[30px]">
                {errors.brand?.message || ""}
              </p>
            </div>

            {/* /Battery Type */}
            <div className=" gap-5 text-xs text-gray-600">
              <label htmlFor="">Type Name</label>
              <div className="flex gap-2 text-sm py-1">
                <Controller
                  name="type"
                  control={control}
                  defaultValue={formData.typeName}
                  // rules={{ required: "Brand is required" }}
                  render={({ field }) => (
                    <BatteryTypeCombo
                      {...field}
                      value={selectedType}
                      onChange={(value) => {
                        field.onChange(value);
                        setSelectedType(value);
                      }}
                      // selected={selectedType}
                    />
                  )}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="h-10 w-10 text-lg rounded-full"
                      variant="outline"
                      onClick={() => navigate(`/admin/battery-type/create`)}
                    >
                      +
                    </Button>
                  </DialogTrigger>
                  {/* <DialogType /> */}
                </Dialog>
              </div>
              <p className="text-red-500 text-xs min-h-[30px]">
                {errors.brand?.message || ""}
              </p>
            </div>

            {/* Name  */}
            <div className="w-full text-sm text-gray-600 ">
              <label
                htmlFor=""
                className="after:ml-0.5 after:text-red-700 after:content-['*']"
              >
                Battery Name
              </label>
              <Input
                type="text"
                id="name"
                {...register("name", { required: "* Name required" })}
                placeholder=""
                // value={formData.storageAMP}
                onChange={handleChange}
              />
              <p className="text-red-500 text-xs min-h-[30px]">
                {errors.name?.message || ""}
              </p>
            </div>

            <div className="flex justify-between gap-4">
              {/* Storage AMP */}
              <div className="w-full text-sm text-gray-600 ">
                <label
                  htmlFor=""
                  className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Storage AMP
                </label>
                <Input
                  type="number"
                  id="storage_amp"
                  {...register("storage_amp", {
                    required: "* Storage required",
                  })}
                  placeholder=""
                  // value={formData.storageAMP}
                  onChange={handleChange}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.storage_amp?.message || ""}
                </p>
                {/* {errors.storageAMP && (
                <p className="text-red-500 text-sm">
                    {errors.storageAMP?.message}
                </p>
                )} */}
              </div>

              {/* Battery Voltage */}
              <div className="w-full text-sm text-gray-600 ">
                <label
                  htmlFor=""
                  className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Battery Volt
                </label>
                <Input
                  type="number"
                  id="voltage"
                  {...register("voltage", { required: "* Voltage required" })}
                  // value={formData.voltage}
                  onChange={handleChange}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.type?.message || ""}
                </p>
              </div>
            </div>

            {/* IMAGE  */}
            <div className="row-start-5 col-span-6 grid gap-2">
              <label
                className="text-xs text-gray-600"
                htmlFor="compatibleBattery"
              >
                Image
              </label>
              <Input
                type="file"
                className="text-sm placeholder:text-xs"
                id="image"
                placeholder="image"
                {...register("image", {
                  required: "* image required",
                })}
              />
            </div>
            <br />

            <div className="flex items-center gap-4">
              <input
                className="size-4 inline"
                type="checkbox"
                id="redirect_to_battery"
                name="redirect_to_list"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label
                className="text-gray-500 text-sm"
                htmlFor="redirect_to_battery"
              >
                Redirect to manage battery
              </label>
            </div>
            <br />
            <div className="container mx-5 flex col-span-6 gap-3 ">
              <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mx-5 rounded-sm"
              >
                Save
              </Button>
              <Button
                onClick={() => navigate(`/admin/battery/`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-sm"
              >
                Cancel
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="w-1/2">
            <div className="w-full text-sm text-gray-600 ">
              <label
                htmlFor=""
                className="text-sm text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Description required",
                })}
                className="text-sm w-full text-gray-600 p-1"
                rows={6}
              />
              <p className="text-red-500 text-xs min-h-[20px]">
                {errors.description?.message || ""}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditBatteryForm;
