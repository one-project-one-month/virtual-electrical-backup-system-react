import { useState, FormEvent } from "react";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { powerstations } from "@/admin/data/powerstations";
import { Checkbox } from "@/components/ui/checkbox";
import { powerStationBrands } from "@/admin/data/powerstations";

const formSchema = z.object({
  model: z.string().nonempty("Model is required"),
  brandId: z
    .number()
    .nonnegative("Brand ID must be a positive number")
    .min(1, "Brand ID must be greater than 0"),
  watt: z
    .number()
    .nonnegative("Watt must be a positive number")
    .min(1, "Watt must be greater than 0"),
  waveType: z.string().nonempty("Wave Type is required"),
  usableWatt: z
    .number()
    .nonnegative("Usable Watt must be a positive number")
    .min(1, "Usable Watt must be greater than 0"),
  chargingTime: z
    .number()
    .nonnegative("Charging Time must be a positive number")
    .min(1, "Charging Time must be greater than 0"),
  chargingType: z.string().nonempty("Charging Type is required"),
  inputWatt: z
    .number()
    .nonnegative("Input Watt must be a positive number")
    .min(1, "Input Watt must be greater than 0"),
  inputAmp: z
    .number()
    .nonnegative("Input Amp must be a positive number")
    .min(1, "Input Amp must be greater than 0"),
  outputAmp: z
    .number()
    .nonnegative("Output Amp must be a positive number")
    .min(1, "Output Amp must be greater than 0"),
  powerStationPrice: z
    .number()
    .nonnegative("Price must be a positive number")
    .min(1, "Price must be greater than 0"),
  image: z.instanceof(File),
  description: z.string().nonempty("Description is required"),
  redirect: z.boolean(),
});

export default function EditPowerStationForm() {
  const { id } = useParams<{ id: string }>();
  const data = powerstations.find(
    (powerstation) => powerstation.id === Number(id)
  );
  const [error, setError] = useState<
    z.ZodFormattedError<typeof formSchema>["_output"] | undefined
  >(undefined);

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formValues = Object.fromEntries(formData);

    const parsedValues = {
      ...formValues,
      brandId: Number(formValues.brandId),
      watt: Number(formValues.watt),
      usableWatt: Number(formValues.usableWatt),
      chargingTime: Number(formValues.chargingTime),
      inputWatt: Number(formValues.inputWatt),
      inputAmp: Number(formValues.inputAmp),
      outputAmp: Number(formValues.outputAmp),
      powerStationPrice: Number(formValues.powerStationPrice),
      image: formValues.image as File,
      redirect: formValues.redirect ? true : false,
    };

    const result = formSchema.safeParse(parsedValues);

    
    if (!result.success) {
      setError(result.error.format());
      console.log(result.error.format());
      return;
    }

    setError(undefined);
    console.log(result);
    e.currentTarget.reset();

    if (result.data.redirect) {
      navigate("../powerStation");
    }
  }

  return (
    <>
      <section className="p-5 mt-5 w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
          <div className="grid grid-cols-12 col-span-6 gap-4">
          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="model">
              Model<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              id="model"
              name="model"
              defaultValue={data?.model}
              type="text"
              placeholder="Enter model"
            />
            {error?.model && error.model._errors.length > 0 && (
              <p className="text-red-500 text-sm">{error.model._errors[0]}</p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="brandId">
              Brand<span className="ms-2 text-red-500">*</span>
            </Label>
            <div className="flex gap-3">
              <Select defaultValue={String(data?.brandId)} name="brandId">
                <SelectTrigger>
                  <SelectValue placeholder="Select Charging Type" />
                </SelectTrigger>
                <SelectContent>
                  {powerStationBrands.map((brand) => {
                    return (
                      <SelectItem key={brand.id} value={String(brand.id)}>
                        {brand.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-4">
            <Label htmlFor="watt">
              Watt<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.watt}
              id="watt"
              name="watt"
              type="number"
              placeholder="Enter watt"
            />
            {error?.watt && error.watt._errors.length > 0 && (
              <p className="text-red-500 text-sm">{error.watt._errors[0]}</p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-4">
            <Label htmlFor="usableWatt">
              Usable Watt<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.usableWatt}
              id="usableWatt"
              name="usableWatt"
              type="number"
              placeholder="Enter usable watt"
            />
            {error?.usableWatt && error.usableWatt._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.usableWatt._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-4">
            <Label htmlFor="inputWatt">
              Input Watt<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.inputWatt}
              id="inputWatt"
              name="inputWatt"
              type="number"
              placeholder="Enter input watt"
            />
            {error?.inputWatt && error.inputWatt._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.inputWatt._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="chargingTime">
              Charging Time (hrs)<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.chargingTime}
              id="chargingTime"
              name="chargingTime"
              type="number"
              placeholder="Enter charging time"
            />
            {error?.chargingTime && error.chargingTime._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.chargingTime._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="chargingType">
              Charging Type<span className="ms-2 text-red-500">*</span>
            </Label>
            <Select defaultValue={data?.chargingType} name="chargingType">
              <SelectTrigger>
                <SelectValue placeholder="Select Charging Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Solar">Solar</SelectItem>
                <SelectItem value="AC">AC</SelectItem>
                <SelectItem value="Solar/AC">Solar/AC</SelectItem>
              </SelectContent>
            </Select>
            {error?.chargingType && error.chargingType._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.chargingType._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="inputAmp">
              Input Amp<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.inputAmp}
              id="inputAmp"
              name="inputAmp"
              type="number"
              placeholder="Enter input amp"
            />
            {error?.inputAmp && error.inputAmp._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.inputAmp._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="outputAmp">
              Output Amp<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.outputAmp}
              id="outputAmp"
              name="outputAmp"
              type="number"
              placeholder="Enter output amp"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="waveType">
              Wave Type<span className="ms-2 text-red-500">*</span>
            </Label>
            <Select defaultValue={data?.waveType} name="waveType">
              <SelectTrigger>
                <SelectValue placeholder="Select Wave Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pure Sine">Pure sine</SelectItem>
                <SelectItem value="Modified Sine">Modifined sine</SelectItem>
              </SelectContent>
            </Select>
            {error?.waveType && error.waveType._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.waveType._errors[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="powerStationPrice">
              Price<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              defaultValue={data?.powerStationPrice}
              id="powerStationPrice"
              name="powerStationPrice"
              type="number"
              placeholder="Enter price"
            />
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-12">
            <Label htmlFor="image">
              Image<span className="ms-2 text-red-500">*</span>
            </Label>
            <Input
              id="image"
              name="image"
              type="file"
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex flex-col justify-start gap-4 col-span-12">
            <div className="flex items-center space-x-2">
              <Checkbox id="redirect" name="redirect" checked />
              <label
                htmlFor="redirect"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Redirect to power station page
                <span className="ms-2 text-red-500">*</span>
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <Button
              type="submit"
              className="duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95 px-10"
            >
              Edit
            </Button>
            <Button className="duration-500 bg-gray-50 hover:bg-gray-200 border border-black text-black active:scale-95 px-10">
              <Link to="/admin/powerStation">Cancel</Link>
            </Button>
          </div>
          </div>

          <div className="flex flex-col justify-start gap-4 col-span-6">
            <Label htmlFor="description">
              Description<span className="ms-2 text-red-500">*</span>
            </Label>
            <textarea
              id="description"
              name="description"
              defaultValue={data?.description}
              rows={10}
              placeholder="Enter description"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
            {error?.description && error.description._errors.length > 0 && (
              <p className="text-red-500 text-sm">
                {error.description._errors[0]}
              </p>
            )}
          </div>

          
        </form>
      </section>
    </>
  );
}
