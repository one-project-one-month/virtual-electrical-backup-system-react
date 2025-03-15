import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateTypeForm = () => {
  const navigate = useNavigate();

  type FormFeilds = {
    id: number;
    name: string;
    percentage: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFeilds>();

  //const [checked, setChecked] = useState(false);

  const onSubmit: SubmitHandler<FormFeilds> = (data) => {
    console.log("data", typeof data, data);
    navigate(-1);
  };

  return (
    <section className="px-5 mt-5">
      <h1 className="text-2xl font-semibold mb-5">Create Type</h1>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2">
            <div className="">
              <Label htmlFor="name" className="mb-3">
                Type Name
              </Label>
              <span className="text-red-500">*</span>
              <Input
                type="text"
                {...register("name", { required: "* Name required" })}
                placeholder=""
                name="name"
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
                name="percentage"
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
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTypeForm;
