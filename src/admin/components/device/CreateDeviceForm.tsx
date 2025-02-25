import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";
const formSchema = z.object({
  deviceName: z.string().min(1, { message: "Device name is required" }),
  watt: z.number().min(1, { message: "Watt is required" }),
  pureSineWave: z.boolean(),
  image: z.instanceof(File),
  redirect_to_list: z.boolean(),
});
function CreateDeviceForm() {
  const navigate = useNavigate();
  const [errors, setErrors] =
    useState<z.ZodFormattedError<(typeof formSchema)["_output"]>>();
  const previousPage = () => {
    navigate(-1);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const parsedValues = {
      ...formValues,
      watt: Number(formValues.watt),
      pureSineWave: formValues.pureSineWave ? true : false,
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
      navigate("../device");
    }
  };
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Create Device"
        links={[{ name: "Manage Device", path: "../device" }]}
      />
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5"
      >
        <div className="col-span-6 row-start-1 relative">
          <label className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']">
            Device Name
          </label>
          <Input
            type="text"
            placeholder="Enter Device Name"
            name="deviceName"
          />
          {errors?.deviceName && errors.deviceName._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.deviceName._errors[0]}
            </p>
          )}
        </div>
        <div className="col-span-6 row-start-2 relative">
          <label className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']">
            Power (Watt)
          </label>
          <Input type="number" placeholder="Enter Device Name" name="watt" />
          {errors?.watt && errors.watt._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.watt._errors[0]}
            </p>
          )}
        </div>

        <div className="col-span-6 row-start-3">
          <label className="text-xs text-gray-600 ">Image</label>
          <Input
            type="file"
            className="text-sm placeholder:text-xs"
            id="image"
            placeholder="image"
            name="image"
          />
        </div>
        <div className="row-start-4 col-span-3 flex items-center gap-4">
          <Input
            className="size-4 inline"
            type="checkbox"
            id="pureSineWave"
            name="pureSineWave"
          />
          <label className="text-gray-500 text-sm" htmlFor="pureSineWave">
            Pure Sine Wave
          </label>
        </div>
        <div className="row-start-5 col-span-3 flex items-center gap-4">
          <input
            className="size-4 inline flex-shrink-0"
            type="checkbox"
            id="redirect_to_device"
            name="redirect_to_list"
          />
          <label
            className="text-gray-500 text-sm text-nowrap"
            htmlFor="redirect_to_device"
          >
            Redirect to manage inverter
          </label>
        </div>
        <Button
          className="row-start-6 col-span-2 py-2 bg-electric-400 text-white rounded-lg hover:bg-electric-500"
          type="submit"
        >
          Create
        </Button>
        <Button
          className="row-start-6 text-black col-span-2 py-2 bg-white border border-black rounded-lg hover:bg-gray-100"
          type="button"
          onClick={previousPage}
        >
          Cancel
        </Button>
      </form>
    </>
  );
}
export default CreateDeviceForm;
