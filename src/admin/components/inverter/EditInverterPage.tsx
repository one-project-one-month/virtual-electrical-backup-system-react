import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inverters, inverterTypes } from "../../data/inverters";
import { DialogCloseButton } from "./Dialog";
import { brands } from "../../data/brands";
import { waveTypes } from "../../data/inverters";
import { Combobox } from "@/admin/components/inverter/ComboBox";
import SelectEl from "./SelectEl";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const formSchema = z.object({
  inverterType: z.number().min(1, { message: "Inverter type is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  brandId: z.number().min(1, { message: "Brand is required" }),
  inverterPrice: z.number().min(1, { message: "Price is required" }),
  waveType: z.string().min(1, { message: "Wave type is required" }),
  compatibleBattery: z
    .string()
    .min(1, { message: "Compatible battery is required" }),
  watt: z.number().min(1, { message: "Power is required" }),
  inverterVolt: z.number().min(1, { message: "Volt is required" }),
  image: z.instanceof(File),
  description: z.string(),
  redirect_to_list: z.boolean(),
});

const EditInverterPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] =
    useState<z.ZodFormattedError<(typeof formSchema)["_output"]>>();
  const { slug: id } = useParams();
  const currentInverter = inverters.find(
    (inverter) => inverter.id === Number(id)
  );
  const currentBrand = brands.find(
    (brand) => brand.id === currentInverter?.brandId
  );

  const previousPage = () => {
    navigate(-1);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const parsedValues = {
      ...formValues,
      inverterPrice: Number(formValues.inverterPrice),
      inverterVolt: Number(formValues.inverterVolt),
      watt: Number(formValues.watt),
      brandId: Number(formValues.brandId),
      inverterType: Number(formValues.inverterType),
      image: formValues.image as File,
      redirect_to_list: formValues.redirect_to_list ? true : false,
    };
    const result = formSchema.safeParse(parsedValues);
    if (result.success) {
      setErrors(undefined);
      console.log(result);
    } else if (!result.success) {
      setErrors(result.error.format());
    }
    if (result.success && result.data.redirect_to_list) {
      navigate("../inverter");
    }
  };

  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Edit Inverter"
        links={[{ name: "Manage Inverter", path: "../inverter" }]}
      />
      <form
        className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5 "
        onSubmit={submitHandler}
      >
        <div className="col-span-3 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="name"
          >
            Inverter Type
          </label>
          <div className="flex items-center gap-2">
            <Combobox
              data={inverterTypes}
              name="inverterType"
              defaultValue={currentInverter?.inverterType?.toString() || ""}
            />
            <DialogCloseButton isBrand={false} />
          </div>
          {errors?.inverterType && errors.inverterType._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.inverterType._errors[0]}
            </p>
          )}
        </div>
        <div className="col-span-3 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="model"
          >
            Model
          </label>
          <Input
            type="model"
            id="model"
            placeholder="model"
            name="model"
            defaultValue={currentInverter?.model || ""}
          />
          {errors?.model && errors.model._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.model._errors[0]}
            </p>
          )}
        </div>
        <div className="row-start-2 col-span-3 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="brand"
          >
            Brand
          </label>
          <div className="flex items-center gap-2">
            <Combobox
              data={brands}
              name="brandId"
              defaultValue={currentBrand?.id.toString() || ""}
            />
            <DialogCloseButton isBrand={true} />
          </div>
          {errors?.brandId && errors.brandId._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.brandId._errors[0]}
            </p>
          )}
        </div>
        <div className=" row-start-2 col-span-3 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="price"
          >
            Price
          </label>
          <Input
            type="number"
            id="price"
            placeholder="price"
            name="inverterPrice"
            defaultValue={currentInverter?.inverterPrice?.toString() || ""}
          />
          {errors?.inverterPrice &&
            errors.inverterPrice._errors?.length > 0 && (
              <p className="text-red-700 text-xs absolute -bottom-4 left-0">
                {errors.inverterPrice._errors[0]}
              </p>
            )}
        </div>
        <div className="row-start-3 col-span-6 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="waveType"
          >
            Wave Type
          </label>
          <SelectEl
            data={waveTypes}
            name="waveType"
            defaultValue={currentInverter?.waveType || ""}
          />
          {errors?.waveType && errors.waveType._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.waveType._errors[0]}
            </p>
          )}
        </div>
        <div className="row-start-4 col-span-2 grid gap-2 relative">
          <label className="text-xs text-gray-600" htmlFor="compatibleBattery">
            Compatible Battery
          </label>
          <Input
            type="compatibleBattery"
            id="compatibleBattery"
            placeholder="eg. Lithium-Ion Battery"
            name="compatibleBattery"
            defaultValue={currentInverter?.compatibleBattery || ""}
          />
          {errors?.compatibleBattery &&
            errors.compatibleBattery._errors?.length > 0 && (
              <p className="text-red-700 text-nowrap text-xs absolute -bottom-4 left-0">
                {errors.compatibleBattery._errors[0]}
              </p>
            )}
        </div>
        <div className="row-start-4 col-span-2 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="watt"
          >
            Power
          </label>
          <Input
            type="number"
            id="watt"
            placeholder="2000 watt"
            name="watt"
            defaultValue={currentInverter?.watt?.toString() || ""}
          />
          {errors?.watt && errors.watt._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.watt._errors[0]}
            </p>
          )}
        </div>
        <div className="row-start-4 col-span-2 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="inverterVolt"
          >
            Volt
          </label>
          <Input
            type="number"
            id="inverterVolt"
            placeholder="inverterVolt"
            name="inverterVolt"
            defaultValue={currentInverter?.inverterVolt?.toString() || ""}
          />
          {errors?.inverterVolt && errors.inverterVolt._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.inverterVolt._errors[0]}
            </p>
          )}
        </div>
        <div className="row-start-5 col-span-6 grid gap-2">
          <label className="text-xs text-gray-600" htmlFor="compatibleBattery">
            Image
          </label>
          <Input
            type="file"
            className="text-sm placeholder:text-xs"
            id="image"
            placeholder="image"
            name="image"
          />
        </div>
        <div className="row-start-6 col-span-6 grid gap-2">
          <label className="text-xs text-gray-600" htmlFor="description">
            Description
          </label>
          <textarea
            className="text-sm"
            id="description"
            placeholder="eg. eco-friendly inverter "
            name="description"
            defaultValue={currentInverter?.description || ""}
          />
        </div>
        <div className="row-start-7 col-span-6 flex items-center gap-4">
          <Input
            className="size-4 inline"
            type="checkbox"
            id="redirect_to_inverter"
            name="redirect_to_list"
            checked
          />
          <label
            className="text-gray-500 text-sm"
            htmlFor="redirect_to_inverter"
          >
            Redirect to manage inverter
          </label>
        </div>
        <Button
          className="row-start-8 col-span-2 py-2 bg-electric-400 text-white rounded-lg hover:bg-electric-500"
          type="submit"
        >
          Edit
        </Button>
        <Button
          className="row-start-8 text-black col-span-2 py-2 bg-white border border-black rounded-lg hover:bg-gray-100"
          type="button"
          onClick={previousPage}
        >
          Cancel
        </Button>
      </form>
    </>
  );
};

export default EditInverterPage;
