import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
export function DialogCloseButton({ isBrand }: { isBrand: boolean }) {
  const [isBrandForm, setIsBrandForm] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  };
  useEffect(() => {
    setIsBrandForm(isBrand);
  }, [isBrand]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border w-fit p-3 text-gray-600 rounded-[50%]"
        >
          <LucidePlus strokeWidth={3} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isBrand ? "Create Brand" : "Create Inverter Type"}
          </DialogTitle>
          <DialogDescription>
            {isBrand
              ? "Create a new brand for your inverters"
              : "Create a new inverter type"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {isBrandForm ? (
            <div>
              <label
                htmlFor="name"
                className="my-1 text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
              >
                name
              </label>
              <Input type="text" name="name" />
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="my-1 text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  name
                </label>
                <Input type="text" name="name" />
              </div>
              <div>
                <label
                  htmlFor="efficiency"
                  className="my-1 text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Efficiency
                </label>
                <Input type="text" name="efficiency" />
              </div>
            </>
          )}
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="flex gap-2 mt-4">
                <Button
                  type="submit"
                  className="bg-electric-400 text-white rounded-lg hover:bg-electric-500"
                  variant="secondary"
                >
                  Create
                </Button>
                <Button
                  type="button"
                  className="bg-white text-black border border-black rounded-lg hover:bg-gray-100"
                  variant="secondary"
                >
                  Close
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
