import React from "react";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../components/battery/BatteryBrandCombo";
import BatteryTypeCombo from "../components/battery/BatteryTypeCombo";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { addBattery } from "../data/batteries";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreateBatteryPage = () => {
  const navigate = useNavigate();

  type FormFeilds = {
    brand: string;
    type: string;
    storageAMP: number;
    voltage: number;
    price: number;
    description: string;
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFeilds>();

  const [checked, setChecked] = useState(false);

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log("data", data);
    console.log(errors);
    addBattery({
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

  // const [formData, setFormData] = useState({
  //   brand: "",
  //   type: "",
  //   storageAMP: 0,
  //   voltage: 0,
  //   price: 0,
  //   description: "",
  // });

  // const onSubmit = (data: any) => {
  //   console.log("Form data",data);
  //   console.log(errors);
  //   addBattery({
  //     brandName: selectedBrand,
  //     brandType: selectedType,
  //     storageAMP: data.storageAMP,
  //     voltage: data.voltage,
  //     price: data.price,
  //     description: data.description,
  //   });
  //   navigate(`/admin/battery/`);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   addBattery({
  //     brandName: selectedBrand,
  //     brandType: selectedType,
  //     storageAMP: Number(formData.storageAMP),
  //     voltage: Number(formData.voltage),
  //     price: Number(formData.voltage),
  //     description: formData.description,
  //   });
  //   navigate(`/admin/battery/`);
  // };

  //for battery brand
  const [selectedBrand, setSelectedBrand] = React.useState("");
  //for battery type
  const [selectedType, setSelectedType] = React.useState("");



  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Create Battery"
        links={[{ name: "Manage Battery", path: "../battery" }]}
      />
      <div className="container w-1/2 mt-5 mx-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* for aligning combo box */}
          <div className="flex justify-between ">
            {/* Battery Brand */}
            <div className=" text-xs text-gray-600 ">
              <label htmlFor="">Brand Name</label>
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
              <p className="text-red-500 text-xs min-h-[20px]">
                {errors.brand?.message || ""}
              </p>
            </div>
            {/* /Battery Type */}
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
              // name="storageAMP"
              {...register("storageAMP", { required: "* Storage required" })}
            />
            <p className="text-red-500 text-xs min-h-[30px]">
              {errors.storageAMP?.message || ""}
            </p>
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
              // name="voltage"
              // onChange={handleChange}
              {...register("voltage", { required: "* Voltage required" })}
              placeholder=""
            />
            <p className="text-red-500 text-xs min-h-[30px]">
              {errors.voltage?.message || ""}
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
              // name="price"
              //onChange={handleChange}
              {...register("price", { required: "price required" })}
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
              // name="description"
              // onChange={handleChange}
              {...register("description", {
                required: "* description required",
              })}
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
              checked= {checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label
              className="text-gray-500 text-sm"
              htmlFor="redirect_to_inverter"
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

export default CreateBatteryPage;
