import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { z, ZodFormattedError } from "zod";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  type: z
    .string({ message: "Type must be a string" })
    .min(3, { message: "Type must be at least 3 characters" }),
  controller: z
    .string({ message: "Controller must be a string" })
    .min(3, { message: "Controller must be at least 3 characters" }),

  outputWatt: z
    .string({ message: "Output Watt must be a number" })
    .min(1, { message: "Output Watt must be at least 1 watt" }),
  outputVolt: z
    .string({ message: "Output Volt must be a number" })
    .min(1, { message: "Output Volt must be at least 1 Volt" }),
  length: z
    .string({ message: "Length must be number" })
    .min(1, { message: "Length must be at least 1" }),

  width: z
    .string({ message: "Width must be number" })
    .min(1, { message: "Width must be number at least 1" }),

  redirect_to_list: z.boolean(),
});

const CreateSolarForm = () => {
  const navigate = useNavigate();
  const [error, setError] =
    useState<ZodFormattedError<typeof formSchema>["_output"]>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const parseValues = {
      ...formValues,
      redirect_to_list: formData.has("redirect_to_list"),
    };

    const result = formSchema.safeParse(parseValues);

    if (!result.success) {
      setError(result.error.format());
      return;
    }
    const data = {
      type: result.data?.type,
      controller: result.data?.controller,
      outputWatt: Number(result.data?.outputWatt),
      outputVolt: Number(result.data?.outputVolt),
      length: Number(result.data?.length),
      width: Number(result.data?.width),
    };
    console.log(result);
  };

  return (
    <section className="px-5">
      <h1 className="mt-5 text-2xl font-semibold"> Create Solar </h1>

      <div className="w-1/2 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="type" className="mb-3">
                Type
              </Label>
              <span className="text-red-500">*</span>
              <Input placeholder="Monocrystalline" name="type" />

              {error?.type?._errors && error?.type?._errors?.length > 0 && (
                <p className="text-red-500 text-sm">
                  {error?.type?._errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="controller" className="mb-3">
                Controller
              </Label>
              <span className="text-red-500">*</span>
              <Input placeholder="MPPT" name="controller" />
              {error?.controller?._errors &&
                error?.controller?._errors?.length > 0 && (
                  <p className="text-red-500 text-sm">
                    {error?.controller?._errors[0]}
                  </p>
                )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputWatt" className="mb-3">
                Output Watt
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="300" name="outputWatt" />
              {error?.outputWatt?._errors &&
                error?.outputWatt?._errors?.length > 0 && (
                  <p className="text-red-500 text-sm">
                    {error?.outputWatt?._errors[0]}
                  </p>
                )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputVolt" className="mb-3">
                Output Volt
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="12" name="outputVolt" />
              {error?.outputVolt?._errors &&
                error?.outputVolt?._errors?.length > 0 && (
                  <p className="text-red-500 text-sm">
                    {error?.outputVolt?._errors[0]}
                  </p>
                )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="length" className="mb-3">
                Length
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="1650" name="length" />

              {error?.length?._errors && error?.length?._errors?.length > 0 && (
                <p className="text-red-500 text-sm">
                  {error?.length?._errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="width" className="mb-3">
                Width
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="670" name="width" />
              {error?.width?._errors && error?.width?._errors?.length > 0 && (
                <p className="text-red-500 text-sm">
                  {error?.width?._errors[0]}
                </p>
              )}
            </div>

            <div className="flex items-center col-span-2 gap-x-2">
              <Checkbox id="redirect_to_solar" name="redirect_to_list" />
              <Label htmlFor="redirect_to_solar">Go to manage solar</Label>
              {error?.redirect_to_list?._errors &&
                error?.redirect_to_list?._errors?.length > 0 && (
                  <p className="text-red-500 text-sm">
                    {error?.redirect_to_list?._errors[0]}
                  </p>
                )}
            </div>

            <div className="flex items-center gap-x-5">
              <Button variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button className="bg-electric-500 hover:bg-electric-600">
                Create
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateSolarForm;
