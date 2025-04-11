import { queryOptions, useQueryClient } from "@tanstack/react-query";
import fetchInverterType from "@/services/inverterType/fetchInverterType";
import createInverterType from "@/services/inverterType/createInverterType";
import editInverterType from "@/services/inverterType/editInverterType";
import { InverterType } from "@/types/inverterType";
import { Dispatch, SetStateAction } from "react";
import deleteInverterType from "@/services/inverterType/deleteInverterType";

export function getAllInverterTypeOption() {
    return queryOptions({
        queryKey: ["inverterType"],
        queryFn: () => fetchInverterType(),
        staleTime: 1000 * 60 * 5,
    })
}
export function useCreateInverterTypeOption(setIsLoading: Dispatch<SetStateAction<boolean>>) {
    const queryClient = useQueryClient()
    return {
    mutationFn: (payload:Partial<InverterType> ) => createInverterType(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate:async (payload: Partial<InverterType>) => {
        setIsLoading(true);
        await queryClient.cancelQueries({ queryKey: ['todos'] })
        const previousData = queryClient.getQueryData<InverterType[]>(['todos'])
        queryClient.setQueryData(['todos'], (old?:InverterType[]) => [...old||[], payload])
        return { previousData };
    },
    onSettled: () => {
      setIsLoading(false);
    },
    }
}

export function useUpdateInverterTypeOption() {
    const queryClient = useQueryClient()
    return {
    mutationFn: (payload:InverterType ) => editInverterType(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate:async (payload: InverterType) => {
        await queryClient.cancelQueries({ queryKey: ['todos'] })
        const previousData = queryClient.getQueryData<InverterType[]>(['todos'])
        queryClient.setQueryData(['todos'], (old?:InverterType[]) => [...old||[], payload])
        return { previousData };
    },
  }
}

export function useDeleteInverterTypeOption() {
  const queryClient = useQueryClient()
    return {
    mutationFn: (id:string) => deleteInverterType(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inverterType"] });
    },
    onMutate:async (id:string) => {
        await queryClient.cancelQueries({ queryKey: ['todos'] })
        const previousData = queryClient.getQueryData<InverterType[]>(['todos'])
      queryClient.setQueryData(['todos'], (old?: InverterType[]) => {
        const updatedData = old?.filter((item) => item._id !== id) || []
        return updatedData?.length > 0 ?updatedData : undefined;
        })
        return { previousData };
    },
  }
}