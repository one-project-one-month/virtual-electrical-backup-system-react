import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import createInverterType from "@/services/inverterType/createInverterType";
import { InverterType } from "@/types/inverterType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  efficiency: z
    .number()
    .min(1, { message: "Efficiency is required" })
    .max(95, { message: "Efficiency must be less than 95" })
    .min(60, { message: "Efficiency must be greater than 60" }),
  redirect_to_list: z.boolean(),
});

const CreateInverterTypePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] =
    useState<z.ZodFormattedError<(typeof formSchema)["_output"]>>();
  const previousPage = () => {
    navigate(-1);
  };

  const { mutateAsync: createInverterTypeMutation } = useMutation({
    mutationFn: (payload: Partial<InverterType>) => createInverterType(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const parsedValues = {
      ...formValues,
      efficiency: Number(formValues.efficiency),
      redirect_to_list: formValues.redirect_to_list ? true : false,
    };
    const result = formSchema.safeParse(parsedValues);
    if (!result.success) {
      setErrors(result.error.format());
      return;
    }
    const payload: Partial<InverterType> = {
      name: result.data.name,
      efficiency: Number(result.data.efficiency),
    };
    console.log(payload);
    createInverterTypeMutation(payload);
    setErrors(undefined);
    e.currentTarget.reset();
    if (result.data.redirect_to_list) {
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
          <Input type="text" id="name" placeholder="name" name="name" />
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
          disabled={isLoading}
          className="row-start-4 col-span-2 py-2 bg-electric-400 text-white rounded-lg hover:bg-electric-500"
          type="submit"
        >
          Create
        </Button>
      </form>
    </>
  );
};

export default CreateInverterTypePage;
