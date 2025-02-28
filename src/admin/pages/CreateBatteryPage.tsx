import React from "react";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { useNavigate } from "react-router-dom";

import BatteryBrandCombo from "../components/battery/BatteryBrandCombo";
import BatteryTypeCombo from "../components/battery/BatteryTypeCombo";
// import DialogType from "../components/battery/DialogType";
// import DialogBrand from "../components/battery/DialogBrand";
// import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { addBattery } from "../data/batteries";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

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
    navigate(`/admin/battery/`);
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
      <div className="container w-1/2 mt-10 mx-10 p-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Battery Brand */}
          <div className="container mx-5 flex col-span-4 gap-3 ">
            <label htmlFor="">Brand Name</label>
            <div>
              <Controller
                name="brand"
                control={control}
                rules={{ required: "*Brand is required" }}
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
              {errors.brand && (
                <p className="text-red-500 text-sm">{errors.brand.message}</p>
              )}
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
                rules={{ required: "* Type is required" }}
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
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type?.message}</p>
              )}
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
              id="storageAMP"
              // name="storageAMP"
              {...register("storageAMP", { required: "* Storage required" })}
              className="text-base py-1 border border-grey-700"
            />
            {errors.storageAMP && (
              <p className="text-red-500 text-sm">
                {errors.storageAMP.message}
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
              // name="voltage"
              // onChange={handleChange}
              {...register("voltage", { required: "* Voltage required" })}
              placeholder=""
              className="text-base py-1 border border-grey-700"
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
              type="number"
              id="price"
              // name="price"
              //onChange={handleChange}
              {...register("price", { required: "price required" })}
              className="text-base py-1 border border-grey-700"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
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
              // name="description"
              // onChange={handleChange}
              {...register("description", {
                required: "* description required",
              })}
              className="text-base p-2 w-1/2 border border-grey-700"
              rows={3}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <br />

          <div className="container mx-5 flex justify-between col-span-6 gap-3 ">
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
