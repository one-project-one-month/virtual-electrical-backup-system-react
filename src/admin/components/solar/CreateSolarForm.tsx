import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import { z } from "zod";
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="controller" className="mb-3">
                Controller
              </Label>
              <span className="text-red-500">*</span>
              <Input placeholder="MPPT" name="controller" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputWatt" className="mb-3">
                Output Watt
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="300" name="outputWatt" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputVolt" className="mb-3">
                Output Volt
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="12" name="outputVolt" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="length" className="mb-3">
                Length
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="1650" name="length" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="width" className="mb-3">
                Width
              </Label>
              <span className="text-red-500">*</span>
              <Input type="number" placeholder="670" name="width" />
            </div>

            <div className="flex items-center col-span-2 gap-x-2">
              <Checkbox id="redirect_to_solar" name="redirect_to_list" />
              <Label htmlFor="redirect_to_solar">Go to manage solar</Label>
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
