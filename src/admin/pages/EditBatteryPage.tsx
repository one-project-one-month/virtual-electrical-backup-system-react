import React, { useEffect } from "react";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../components/battery/BatteryBrandCombo";
import BatteryTypeCombo from "../components/battery/BatteryTypeCombo";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
// import DialogBrand from "../components/battery/DialogBrand";
// import DialogType from "../components/battery/DialogType";

import { Button } from "@/components/ui/button";
import { batteries } from "../data/batteries";
import { useState } from "react";
import { updateBattery } from "../data/batteries";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

const EditBatteryPage = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const BatteryID = parts[parts.length - 1].split("=")[1];

  interface FormData {
    id: number | null;
    brandName: string;
    typeName: string;
    storageAMP: number;
    voltage: number;
    price: number;
    description: string;
  }
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    brandName: "",
    typeName: "",
    storageAMP: 0,
    voltage: 0,
    price: 0,
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
    storageAMP: number;
    voltage: number;
    price: number;
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
      storageAMP: 0,
      voltage: 0,
      price: 0,
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
        brandName: selectedBattery.brandName,
        typeName: selectedBattery.brandType,
        storageAMP: selectedBattery.storageAMP,
        voltage: selectedBattery.voltage,
        price: selectedBattery.price,
        description: selectedBattery.description,
      });

      // Reset form with loaded data
      reset({
        id: selectedBattery.id,
        brand: selectedBattery.brandName,
        type: selectedBattery.brandType,
        storageAMP: selectedBattery.storageAMP,
        voltage: selectedBattery.voltage,
        price: selectedBattery.price,
        description: selectedBattery.description,
      });

      //for handling combo box
      setSelectedBrand(selectedBattery.brandName);
      setSelectedType(selectedBattery.brandType);
    }
  }, [BatteryID, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  //   reset
  // } = useForm<FormFeilds>({
  //   defaultValues: {
  //     id: 0, // Provide proper initial values
  //     brand: "",
  //     type: "",
  //     storageAMP: 0,
  //     voltage: 0,
  //     price: 0,
  //     description: "",
  //   },
  // });

  const [checked, setChecked] = useState(false);

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log("update data", data);
    updateBattery(Number(formData.id), {
      brandName: selectedBrand,
      brandType: selectedType,
      storageAMP: data.storageAMP,
      voltage: data.voltage,
      price: data.price,
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
      <BreadcrumbDashboard
        currentPageTitle="Edit Battery"
        links={[{ name: "Manage Battery", path: "../battery" }]}
      />

      <div className="container w-1/2 mt-5 mx-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* //For handling ID  */}
          <input
            type="hidden"
            id="voltage"
            name="voltage"
            value={Number(formData.id)}
            placeholder="voltage"
            className="text-xl border border-grey-700"
          />

          {/* For aligning brand and type  */}
          <div className="flex justify-between ">
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
                      selected={selectedType}
                    />
                  )}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="h-10 w-10 text-lg rounded-full"
                      variant="outline"
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
          </div>

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
              id="storageAMP"
              {...register("storageAMP", { required: "* Storage required" })}
              placeholder=""
              // value={formData.storageAMP}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs min-h-[30px]">
              {errors.storageAMP?.message || ""}
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

          {/* Battery Price */}
          <div className="w-full text-sm text-gray-600 ">
            <label
              htmlFor=""
              className="after:ml-0.5 after:text-red-700 after:content-['*']"
            >
              Battery Price
            </label>
            <Input
              type="number"
              id="price"
              {...register("price", { required: "price required" })}
              // value={formData.price}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs min-h-[30px]">
              {errors.price?.message || ""}
            </p>
          </div>

          {/* Description */}
          <div className="w-full text-sm text-gray-600 ">
            <label
              htmlFor=""
              className="text-sm text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: "Description required" })}
              className="text-sm w-full text-gray-600 p-1"
              rows={3}
            />
            <p className="text-red-500 text-xs min-h-[20px]">
              {errors.description?.message || ""}
            </p>
          </div>

          
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
        </form>
      </div>
    </>
  );
};
export default EditBatteryPage;
