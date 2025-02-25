import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { FormEvent } from "react"


const formSchema = z.object({name: z.string()})



export function AddBrandBox() {


    function handleAddBrand (e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let formValues = Object.fromEntries(formData);

        const result = formSchema.safeParse(formValues);


        console.log(result);

    }


  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="inline-flex rounded-full bg-gray-50 w-10 hover:bg-gray-200 border border-gray-500 text-black">
                <PlusIcon />
              </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Brand</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddBrand} className="flex gap-4">
        <Input type="text" name="name" />
        <Button type="submit">Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
