import React from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../battery/BatteryBrandCombo";
import BatteryTypeCombo from "../battery/BatteryTypeCombo";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreateBatteryForm = () => {
  const navigate = useNavigate();

  type FormFeilds = {
    brand: string;
    type: string;
    name: string;
    storage_amp: number;
    voltage: number;
    description: string;
    image: string;
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFeilds>();

  const [checked, setChecked] = useState(true);

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log(data);
    if (checked) {
      console.log("Redirecting to manage battery...");
      navigate(`/admin/battery/`);
    } else {
      console.log("Checkbox not checked. Staying on the same page.");
    }
  };

  //for battery brand
  const [selectedBrand, setSelectedBrand] = React.useState("");
  //for battery type
  const [selectedType, setSelectedType] = React.useState("");

  return (
    <>
      <div className="container w-3/4  mt-5 mx-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between gap-6"
        >
          {/* Left Side  */}
          <div className="w-1/2">
            {/* Battery Brand */}
            <div className="text-xs text-gray-600">
              <label>Brand Name</label>
              <div className="flex gap-2 text-sm py-1">
                <Controller
                  name="brand"
                  control={control}
                  rules={{ required: "Brand is required" }}
                  render={({ field }) => (
                    <BatteryBrandCombo
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setSelectedBrand(value);
                      }}
                    />
                  )}
                />
                <Button
                  className="h-10 w-10 text-lg rounded-full"
                  variant="outline"
                  onClick={() => navigate(`/admin/brand/create`)}
                >
                  +
                </Button>
              </div>
              <p className="text-red-500 text-xs min-h-[20px]">
                {errors.brand?.message || ""}
              </p>
            </div>

            {/* Battery Type  */}
            <div className=" gap-5 text-xs text-gray-600">
              <label>Type Name</label>
              <div className="flex gap-2 text-sm py-1">
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: "Type is required" }}
                  render={({ field }) => (
                    <BatteryTypeCombo
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setSelectedType(value);
                      }}
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
                {errors.type?.message || ""}
              </p>
            </div>

            {/* Battery Name */}
            <div className="w-full text-sm text-gray-600">
              <label className="after:ml-0.5 after:text-red-700 after:content-['*']">
                Battery Name
              </label>
              <Input
                type="text"
                id="name"
                {...register("name", { required: "* Name required" })}
              />
              <p className="text-red-500 text-xs min-h-[30px]">
                {errors.name?.message || ""}
              </p>
            </div>

            {/* Storage AMP & Voltage */}
            <div className="flex gap-4">
              <div className="w-full text-sm text-gray-600">
                <label className="after:ml-0.5 after:text-red-700 after:content-['*']">
                  Storage AMP
                </label>
                <Input
                  type="number"
                  {...register("storage_amp", {
                    required: "* Storage required",
                  })}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.storage_amp?.message || ""}
                </p>
              </div>

              <div className="w-full text-sm text-gray-600">
                <label className="after:ml-0.5 after:text-red-700 after:content-['*']">
                  Battery Volt
                </label>
                <Input
                  type="number"
                  {...register("voltage", { required: "* Voltage required" })}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.voltage?.message || ""}
                </p>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mt-4">
              <label className="text-xs text-gray-600">Image</label>
              <Input
                type="file"
                className="text-sm placeholder:text-xs"
                {...register("image", { required: "* Image required" })}
              />
            </div>

            {/* Check Box  */}
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

            <div className="flex gap-3 mt-4">
              <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"
              >
                Save
              </Button>
              <Button
                onClick={() => navigate(`/admin/battery/`)}
                className="bg-blue-500 text-white px-4 py-2"
              >
                Cancel
              </Button>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="w-1/2">
            {/* Description */}
            <div className="w-full text-sm text-gray-600">
              <label className="text-sm text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "* Description required",
                })}
                className="w-full p-2 border rounded-md text-gray-600"
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

export default CreateBatteryForm;
