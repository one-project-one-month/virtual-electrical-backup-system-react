import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { z, ZodFormattedError } from "zod";
import { FormEvent, useState } from "react";
import { Category } from "@/types/brand";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategoryOption } from "@/query/categoryQueryOption";
import { createBrandOption } from "@/query/brandQueryOption";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Brand name must be at least 3 characters" })
    .max(40, { message: "Brand name must be at most 40 characters" }),
  category: z.string().nonempty("This field shouldn't be empty"),

  redirect_to_list: z.boolean(),
});

const CreateBrandForm = () => {
  const navigate = useNavigate();
  const {data: category } = useQuery(getAllCategoryOption());
  const createMutation = useMutation(createBrandOption());


  const [error, setError] = useState<ZodFormattedError<typeof formSchema>["_output"]>();

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

    const newData = {
      _id: "",
      name: result.data.name,
      category: result.data.category,
    }

    createMutation.mutate({newData});
    if (result.data.redirect_to_list) navigate(-1);
    e.currentTarget.reset();
  };

  return (
    <section className="px-5 mt-5">
      <h1 className="text-2xl font-semibold mb-5">Create Brand</h1>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="name" className="mb-3">
                Brand Name
              </Label>
              <span className="text-red-500">*</span>
              <Input placeholder="Exide" name="name" />
              {error?.name?._errors && error?.name?._errors?.length > 0 && (
                <p className="text-red-500 text-sm">
                  {error?.name?._errors[0]}
                </p>
              )}
            </div>
            <div className="flex flex-col justify-start gap-4 col-span-2">
            <Label htmlFor="category">Category<span className="ms-2 text-red-500">*</span></Label>

              <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {category?.map((item: Category) => (
                  <SelectItem key={item._id} value={item._id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
              {error?.category?._errors && error?.category?._errors?.length > 0 && (
                <p className="text-red-500 text-sm">
                {error?.category?._errors[0]}
              </p>
              )}
            </div>
            <div className="flex items-center col-span-2 gap-x-2">
              <Checkbox id="redirect_to_brand" name="redirect_to_list" />
              <Label htmlFor="redirect_to_brand">Go to manage brand</Label>
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

export default CreateBrandForm;
