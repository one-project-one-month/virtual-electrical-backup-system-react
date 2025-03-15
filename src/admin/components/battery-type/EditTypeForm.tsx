import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { batteryTypes } from "@/admin/data/batteryType";
import { useForm, SubmitHandler } from "react-hook-form";

const EditTypeForm = () => {
  const { id } = useParams();
  const typeID = id;
  const navigate = useNavigate();

  interface FormData {
    id: number | null;
    name: string;
    percentage: number;
  }
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    name: "",
    percentage: 0,
  });

  type FormFeilds = {
    id: number;
    name: string;
    percentage: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFeilds>({
    defaultValues: {
      id: 0,
      name: "",
      percentage: 0,
    },
  });

  useEffect(() => {
    const currentType = batteryTypes.find((type) => type.id === Number(typeID));
    console.log(currentType);
    setFormData({
      id: Number(currentType?.id),
      name: currentType?.name,
      percentage: Number(currentType?.percentage),
    });
    reset({
      id: currentType?.id,
      name: currentType?.name,
      percentage: Number(currentType?.percentage),
    });
  }, [typeID, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log("update data", data);
    navigate(-1);
  };

  return (
    <>
      <section className="px-5 mt-5">
        <h1 className="font-semibold text-2xl mb-5"> Edit Type </h1>
        <div className="w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2">
              <Input
                type="hidden"
                {...register("id")}
                placeholder=""
                onChange={handleChange}
              />

              <div className="">
                <Label htmlFor="name" className="mb-3">
                  Type Name
                </Label>
                <span className="text-red-500">*</span>
                <Input
                  type="text"
                  {...register("name", { required: "* Name required" })}
                  placeholder=""
                  onChange={handleChange}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.name?.message || ""}
                </p>
              </div>
              <br />

              <div className="space-y-2">
                <Label htmlFor="name" className="mb-3">
                  Percentage
                </Label>
                <span className="text-red-500">*</span>
                <Input
                  type="number"
                  {...register("percentage", {
                    required: "*Percentage required.",
                  })}
                  placeholder=""
                  onChange={handleChange}
                />
                <p className="text-red-500 text-xs min-h-[30px]">
                  {errors.percentage?.message || ""}
                </p>
              </div>
              <br />

              <div className="flex items-center gap-x-5">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button className="bg-electric-500 hover:bg-electric-600">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditTypeForm;
