import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";
import { inverterTypes } from "../../data/inverters";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  efficiency: z.string().min(1, { message: "Efficiency is required" }),
  redirect_to_list: z.boolean(),
});

const EditInverterTypePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentInverterType = inverterTypes.find(
    (inverterType) => inverterType.id === Number(id)
  );
  const [errors, setErrors] =
    useState<z.ZodFormattedError<(typeof formSchema)["_output"]>>();
  const previousPage = () => {
    navigate(-1);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const parsedValues = {
      ...formValues,
      redirect_to_list: formValues.redirect_to_list ? true : false,
    };
    const result = formSchema.safeParse(parsedValues);
    if (result.success) {
      setErrors(undefined);
      e.currentTarget.reset();
    } else if (!result.success) {
      setErrors(result.error.format());
      console.log(result.error.format());
    }
    if (result.success && result.data.redirect_to_list) {
      navigate("../inverterType");
    }
  };
  return (
    <>
      <form
        className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5 "
        onSubmit={submitHandler}
      >
        <div className="col-span-6 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            defaultValue={currentInverterType?.name}
          />
          {errors?.name && errors.name._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.name._errors[0]}
            </p>
          )}
        </div>
        <div className="row-start-2 col-span-6 grid gap-2 relative">
          <label
            className="text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
            htmlFor="efficiency"
          >
            Efficiency
          </label>
          <Input
            type="text"
            id="efficiency"
            placeholder="efficiency"
            name="efficiency"
            defaultValue={currentInverterType?.efficiency}
          />
          {errors?.efficiency && errors.efficiency._errors?.length > 0 && (
            <p className="text-red-700 text-xs absolute -bottom-4 left-0">
              {errors.efficiency._errors[0]}
            </p>
          )}
        </div>

        <div className="row-start-3 col-span-6 flex items-center gap-4">
          <input
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
          className="row-start-4 text-black col-span-2 py-2 bg-white border border-black rounded-lg hover:bg-gray-100"
          type="button"
          onClick={previousPage}
        >
          Cancel
        </Button>
        <Button
          className="row-start-4 col-span-2 py-2 bg-electric-400 text-white rounded-lg hover:bg-electric-500"
          type="submit"
        >
          Edit
        </Button>
      </form>
    </>
  );
};

export default EditInverterTypePage;
