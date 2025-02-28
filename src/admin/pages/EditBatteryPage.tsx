import React, { useEffect } from "react";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../components/battery/BatteryBrandCombo";
import BatteryTypeCombo from "../components/battery/BatteryTypeCombo";
// import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
// import DialogBrand from "../components/battery/DialogBrand";
// import DialogType from "../components/battery/DialogType";

import { Button } from "@/components/ui/button";
import { batteries } from "../data/batteries";
import { useState } from "react";
import { updateBattery } from "../data/batteries";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

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
    navigate(`/admin/battery/`);
  };

  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Edit Battery"
        links={[{ name: "Manage Battery", path: "../battery" }]}
      />

      <div className="container w-1/2 mt-10 mx-10 p-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
          <div className="container mx-5 flex col-span-4 gap-3 ">
            <label htmlFor="">Brand Name</label>
            <div>
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
            </div>

            {/* <Dialog>
              <DialogTrigger asChild>
                <Button className="w-2" variant="outline">
                  +
                </Button>
              </DialogTrigger>
              <DialogBrand />
            </Dialog> */}
          </div>
          <br />

          {/* /Battery Type */}
          <div className="container flex mx-5 col-span-4 gap-3 ">
            <label htmlFor="">Type Name</label>
            <div>
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
            </div>
            {/* <Dialog>
              <DialogTrigger asChild>
                <Button className="w-2" variant="outline">
                  +
                </Button>
              </DialogTrigger>
              <DialogType />
            </Dialog> */}
          </div>
          <br />

          {/* Storage AMP */}
          <div className="container flex mx-5 col-span-4 gap-3 ">
            <label htmlFor="">Storage AMP</label>
            <input
              type="number"
              // id="storageAMP"
              {...register("storageAMP", { required: "* Storage required" })}
              placeholder=""
              className="text-base py-1 border border-grey-700"
              value={formData.storageAMP}
              // value={formData.storageAMP}
              onChange={handleChange}
            />
            {errors.storageAMP && (
              <p className="text-red-500 text-sm">
                {errors.storageAMP?.message}
              </p>
            )}
          </div>
          <br />

          {/* Battery Voltage */}
          <div className="container flex mx-5 col-span-4 gap-3  ">
            <label htmlFor="" className="mx-1">
              Battery Volt
            </label>
            <input
              type="number"
              id="voltage"
              {...register("voltage", { required: "* Voltage required" })}
              // value={formData.voltage}
              className="text-base py-1 border border-grey-700"
              onChange={handleChange}
            />
            {errors.voltage && (
              <p className="text-red-500 text-sm">{errors.voltage.message}</p>
            )}
          </div>
          <br />

          {/* Battery Price */}
          <div className="container flex mx-5 col-span-4 gap-3  ">
            <label htmlFor="" className="">
              Battery Price
            </label>
            <input
              type="text"
              id="price"
              {...register("price", { required: "price required" })}
              className="text-base py-1 border border-grey-700"
              // value={formData.price}
              onChange={handleChange}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price?.message}</p>
            )}
          </div>
          <br />

          {/* Description */}
          <div className="container flex mx-5 col-span-4 gap-3  ">
            <label htmlFor="" className="mx-1">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: "Description required" })}
              className="text-base p-2 w-1/2 border border-grey-700"
              rows={3}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description?.message}
              </p>
            )}
          </div>
          <br />

          <div className="container mx-5 flex justify-between col-span-6 gap-3 ">
            <Button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mx-5 rounded-sm"
            >
              Update
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
