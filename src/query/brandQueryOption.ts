import { createBrand, deleteBrand, getAllBrand, getBrandById } from "@/services/brandService";
import { Brands } from "@/types/brand";
import {
  MutationOptions,
  queryOptions,
  useQueryClient,
} from "@tanstack/react-query";


export function getAllBrandOption(filter?: string) {
  return queryOptions({
    queryKey: ["brand", filter],
    queryFn: () => getAllBrand(filter),
  });
}

export function getBrandByIdOption(id: string) {
  return queryOptions({
    queryKey: ["brand", id],
    queryFn: () => getBrandById(id)
  })
}

export function createBrandOption(): MutationOptions<
  Brands,
  Error,
  { newData: Brands },
  { previousData?: Brands[] }
> {
    const queryClient = useQueryClient();
  
    return {
        mutationFn: ({ newData }) => createBrand({
            ...newData,
            category: typeof newData.category === "string" ? newData.category : newData.category.name,
        }),
        onMutate: async({newData}) => {
            await queryClient.cancelQueries({queryKey: ["brand"]});
            const previousData = queryClient.getQueryData<Brands[]>(["brand"]);
            queryClient.setQueryData(["brand"], (old?: Brands[]) => [...(old || []), newData]);
            return {previousData}
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["brand"]});
        },
        onError: (error, _, context) => {
            console.log("Error creating brand", error);
            if(context?.previousData) {
                queryClient.setQueryData(["brand"], context.previousData);
            }
        }
    }
}

export function deleteBrandOption(): MutationOptions<Brands, Error, string, {previousData?: Brands[]}> {
  const queryClient = useQueryClient();
  return {
    mutationFn: (id) => deleteBrand(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({queryKey: ["brand"]});
      const previousData = queryClient.getQueryData<Brands[]>(["brand"]);
      queryClient.setQueryData(["brand"], (old?: Brands[]) => old?.filter((brand) => brand._id !== id));
      return {previousData}
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["brand"]});
    },
    onError: (error, _, context) => {
      console.log("Error deleting brand", error);
      if(context?.previousData) {
        queryClient.setQueryData(["brand"], context.previousData)
      }
    }
  }
}
