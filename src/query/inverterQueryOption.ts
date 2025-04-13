import { queryOptions, useQueryClient } from "@tanstack/react-query"
import { createInverter, deleteInverter, getAllInverters, getInverterById, updateInverter } from "@/services/inverterService"
import { Inverters } from "@/types/inverters"
import { MutationOptions } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export const getAllInvertersOption = () => {
    return queryOptions({
        queryKey: ["inverter"],
        queryFn: () => getAllInverters(),
        staleTime: 1000 * 60 * 5,
    })
}
export const getInverterByIdOption = (id:string) => {
    return queryOptions({
        queryKey: ["inverter", id],
        queryFn: () => getInverterById(id),
        staleTime:1000 * 60 * 5,
    })
}

export const useUpdateInverterOption = (): MutationOptions<
  Inverters,
  Error,
  { payload:Partial<Inverters >},
  { previousData?: Inverters }
>  => {
    const queryClient = useQueryClient();
    return {
       mutationFn: ({payload} ) => updateInverter(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverter"] });
    },
    onMutate:async ({payload}) => {
        await queryClient.cancelQueries({ queryKey: ['inverter'] })
        const previousData = queryClient.getQueryData<Inverters>(['inverter',payload._id])
        queryClient.setQueryData(["inverter",  payload._id], payload);
      queryClient.setQueryData(['inverterType'], (old?: Inverters[]) => {
        if(!old) return [payload]
          return old?.map((item)=> item._id === payload._id? payload:item)
        })
        return { previousData };
      },
    onError: (error, { payload }, context) => {
      console.error("Error updating inverter", error);
      if (context?.previousData) {
        queryClient.setQueryData(["inverter", payload._id], context.previousData);
      }
    },
    }
}
export const useCreateInverterOption = (setIsLoading: Dispatch<SetStateAction<boolean>>): MutationOptions<
  Inverters,
  Error,
  { payload: Partial<Inverters> },
  { previousData?: Inverters[] }
> => {
    const queryClient = useQueryClient();
    return {
       mutationFn: ({payload} ) => createInverter(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["inverter"] });
      },
      onMutate: async ({ payload }) => {
        setIsLoading(true);
        await queryClient.cancelQueries({ queryKey: ["inverter"] });
        const previousData = queryClient.getQueryData<Inverters[]>([
          "inverter",
        ]);
        queryClient.setQueryData(["inverter"], (old?: Inverters[]) => {
          if(!old) return [payload]
         return[ ...(old || []),payload]
      });
          return { previousData };
      },
      onSettled: () => {
       setIsLoading(false)
      },
      onError: (error, _, context) => {
        console.error("Error creating inverter", error);
        if (context?.previousData) {
          queryClient.setQueryData(["inverter"], context.previousData);
        }
    },
    }
}

export const useDeleteInverterOption = (): MutationOptions<
  Inverters,
  Error,
  { id: string },
  { previousData?: Inverters }
> => {
    const queryClient = useQueryClient();
    return {
       mutationFn: ({id} ) => deleteInverter(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverter"] });
    },
     onMutate: async ({id}) => {
          await queryClient.cancelQueries({ queryKey: ["inverter"],id });
          const previousData = queryClient.getQueryData<Inverters>([
            "inverter",id
          ]);
         queryClient.setQueryData(["inverter"], (old?: Inverters[]) => {  
           return old?.filter((item) => item._id !== id)
          });
          return { previousData };
      },
      onError: (error, { id }, context) => {
        console.error("Error deleting inverter", error);
        if (context?.previousData) {
          queryClient.setQueryData(["inverter", id], context.previousData);
        }
      },
    }
}