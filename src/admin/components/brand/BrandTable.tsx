import { Brands } from "@/types/brand";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BrandRow from "./BrandRow";
import { deleteBrandOption, getAllBrandOption } from "@/query/brandQueryOption";

const BrandTable = () => {
  const {data: brands, isLoading} = useQuery(getAllBrandOption());
  const deleteMutation = useMutation(deleteBrandOption());


  if(isLoading) {
    return <p>loading...</p>
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.log("Error deleting brand");
    }
  }

  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brands?.map((brand: Brands, index: number) => (
            <BrandRow key={brand._id} brand={brand} id={index + 1} delete={handleDelete}  />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default BrandTable;
