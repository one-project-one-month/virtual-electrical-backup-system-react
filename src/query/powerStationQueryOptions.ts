import { useQueryClient, queryOptions } from "@tanstack/react-query";
import {
  getPowerStationById,
  getPowerStations,
  editPowerStations,
  deletePowerStationById,
  createPowerStation,
} from "@/services/powerStationService";
import { PowerStations } from "@/types/powerstations";
import { MutationOptions } from "@tanstack/react-query";

export function getPowerStationOptions() {
  return queryOptions({
    queryKey: ["powerStation"],
    queryFn: getPowerStations,
    staleTime: 1000 * 60 * 5,
  });
}

export function getPowerStationByIdOption(id: string) {
  return queryOptions({
    queryKey: ["powerStation", id],
    queryFn: () => getPowerStationById(id),
    staleTime: 1000 * 60 * 5,
  });
}

export function deletePowerStationByIdOption(): MutationOptions<
  PowerStations,
  Error,
  { id: string },
  { previousData?: PowerStations }
> {
  const queryClient = useQueryClient();
  return {
    mutationFn: ({ id }) => deletePowerStationById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["powerStation"] });
    },
    onMutate: ({ id }) => {
      queryClient.cancelQueries({ queryKey: ["powerStation", id] });
      const previousData = queryClient.getQueryData<PowerStations>([
        "powerStation",
        id,
      ]);
      queryClient.setQueryData(["powerStation"], (old?: PowerStations[]) => {
        const updatedData = old ? old.filter((item) => item._id !== id) : [];
        return updatedData.length > 0 ? updatedData : undefined;
      });
      return { previousData };
    },
    onError: (error, { id }, context) => {
      console.error("Error deleting power station:", error);
      if (context?.previousData) {
        queryClient.setQueryData(["powerStation", id], context.previousData);
      }
    },
  };
}

export function createPowerStationOption(): MutationOptions<
  PowerStations,
  Error,
  { newData: PowerStations },
  { previousData?: PowerStations[] }
> {
  const queryClient = useQueryClient();
  return {
    mutationFn: ({ newData }) => createPowerStation(newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["powerStation"] });
    },
    onMutate: async ({ newData }) => {
      await queryClient.cancelQueries({ queryKey: ["powerStation"] });
      const previousData = queryClient.getQueryData<PowerStations[]>([
        "powerStation",
      ]);
      queryClient.setQueryData(["powerStation"], (old?: PowerStations[]) => [
        ...(old || []),
        newData,
      ]);
      return { previousData };
    },
    onError: (error, _, context) => {
      console.error("Error creating power station:", error);
      if (context?.previousData) {
        queryClient.setQueryData(["powerStation"], context.previousData);
      }
    },
  };
}

export function updatePowerStationByIdOption(): MutationOptions<
  PowerStations,
  Error,
  { id: string; data: PowerStations },
  { previousData?: PowerStations }
> {
  const queryClient = useQueryClient();
  return {
    mutationFn: ({ id, data }) => editPowerStations(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["powerStation"] });
      queryClient.invalidateQueries({ queryKey: ["powerStation", id] });
    },
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["powerStation", id] });
      const previousData = queryClient.getQueryData<PowerStations>([
        "powerStation",
        id,
      ]);

      queryClient.setQueryData(["powerStation", id], data);
      queryClient.setQueryData(["powerStation"], (oldData?: PowerStations[]) =>
        oldData ? oldData.map((item) => (item._id === id ? data : item)) : []
      );
      return { previousData };
    },
    onError: (error, { id }, context) => {
      console.error("Error updating power station:", error);
      if (context?.previousData) {
        queryClient.setQueryData(["powerStation", id], context.previousData);
      }
    },
  };
}
