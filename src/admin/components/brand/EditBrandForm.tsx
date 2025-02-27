import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z, ZodFormattedError } from "zod";
import brands from "@/admin/data/brand";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Brand name must be at least 3 characters" })
    .max(40, { message: "Brand name must be at most 40 characters" }),

  redirect_to_list: z.boolean(),
});
const EditBrandForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] =
    useState<ZodFormattedError<typeof formSchema>["_output"]>();

  const currentBrand = brands.find((brand) => brand.id === Number(id));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const parseValues = {
      ...formValues,
      redirect_to_list: formData.has("redirect_to_list"),
    };

    const result = formSchema.safeParse(parseValues);
    if (!result.success) {
      setError(result.error.format());
      return;
    }

    console.log(result);
  };

  return (
    <section className="px-5 mt-5">
      <h1 className="font-semibold text-2xl mb-5"> Edit Brand </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="mb-3">
              Brand Name
            </Label>
            <span className="text-red-500">*</span>
            <Input
              placeholder="Exide"
              name="name"
              defaultValue={currentBrand?.name}
            />
            {error?.name?._errors && error?.name?._errors?.length > 0 && (
              <p className="text-red-500 text-sm">{error?.name?._errors[0]}</p>
            )}
          </div>

          <div className="flex items-center col-span-2 gap-x-2">
            <Checkbox id="redirect_to_brand" name="redirect_to_list" checked />
            <Label htmlFor="redirect_to_brand">Go to manage brand</Label>
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
    </section>
  );
};

export default EditBrandForm;
