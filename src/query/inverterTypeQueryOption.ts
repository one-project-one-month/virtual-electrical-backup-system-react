import { queryOptions, useQueryClient } from "@tanstack/react-query";
import fetchInverterType from "@/services/inverterType/fetchInverterType";
import createInverterType from "@/services/inverterType/createInverterType";
import editInverterType from "@/services/inverterType/editInverterType";
import { InverterType } from "@/types/inverterType";
import { Dispatch, SetStateAction } from "react";
import deleteInverterType from "@/services/inverterType/deleteInverterType";
import { MutationOptions } from "@tanstack/react-query";

export function getAllInverterTypeOption() {
    return queryOptions({
        queryKey: ["inverterType"],
        queryFn: () => fetchInverterType(),
        staleTime: 1000 * 60 * 5,
    })
}
export function useCreateInverterTypeOption(setIsLoading: Dispatch<SetStateAction<boolean>>): MutationOptions<
  InverterType,
  Error,
  { payload: Partial<InverterType> },
  { previousData?: InverterType[] }
> {
    const queryClient = useQueryClient()
    return {
    mutationFn: ({payload} ) => createInverterType(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate:async ({payload} ) => {
        setIsLoading(true);
        await queryClient.cancelQueries({ queryKey: ['inverterType'] })
        const previousData = queryClient.getQueryData<InverterType[]>(['inverterType'])
        queryClient.setQueryData(['inverterType'], (old?:InverterType[]) => [...old||[], payload])
        return { previousData };
    },
    onSettled: () => {
      setIsLoading(false);
      },
    onError: (error, _, context) => {
      console.error("Error creating inverter type", error);
      if (context?.previousData) {
        queryClient.setQueryData(["inverterType"], context.previousData);
      }
    },
    }
}

export function useUpdateInverterTypeOption(): MutationOptions<
  InverterType,
  Error,
  { payload: InverterType },
  { previousData?: InverterType }
>  {
    const queryClient = useQueryClient()
    return {
    mutationFn: ({payload} ) => editInverterType(payload),
    onSuccess: (payload) => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
      queryClient.invalidateQueries({ queryKey: ["powerStation", payload._id] });
    },
    onMutate:async ({payload}) => {
            queryClient.setQueryData(['inverterType'], (old?: InverterType[]) => {
        if (!old) return [payload]; 
        return old.map((item) => (item._id === payload._id ? payload : item));
      }); queryClient.cancelQueries({ queryKey: ['inverterType'] })
      const previousData = queryClient.getQueryData<InverterType>(['inverterType', payload._id])
      queryClient.setQueryData(["inverterType",  payload._id], payload);
      queryClient.setQueryData(['inverterType'], (old?: InverterType[]) => {
         return old?.map((item)=> item._id === payload._id? payload:item)
        })
        return { previousData };
      },
    onError: (error, _, context) => {
      console.error("Error updating inverter type:", error);
      if (context?.previousData) {
        queryClient.setQueryData(["inverterType"], context.previousData);
      }
    },
  }
}

export function useDeleteInverterTypeOption(): MutationOptions<
  InverterType,
  Error,
  { id: string },
  { previousData?: InverterType }
> {
  const queryClient = useQueryClient()
    return {
    mutationFn: ({id}) => deleteInverterType(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate:async ({id}) => {
        await queryClient.cancelQueries({ queryKey: ['inverterType']})
      const previousData = queryClient.getQueryData<InverterType>([
        "inverter",
        id,
      ]) ;
      queryClient.setQueryData(['inverterType'], (old?: InverterType[]) => {
        const updatedData = old?.filter((item) => item._id !== id) || []
        return updatedData?.length > 0 ?updatedData : undefined;
        })
        return { previousData };
      },
      onError: (error, _, context) => {
        console.error("Error deleting inverter type", error);
        if (context?.previousData) {
          queryClient.setQueryData(["inverterType"], context.previousData);
        }
      },
  }
}