import { PowerStations } from "@/types/powerstations";
import { create } from "zustand";

type PowerStationStore = {
  powerStations: PowerStations[];
  addPowerStation: (powerStation: PowerStations) => void;
  setPowerStation: (powerstations: PowerStations[]) => void;
  updatePowerStation: (powerStation: PowerStations) => void;
};

const usePowerStationStore = create<PowerStationStore>((set) => ({
  powerStations: [],
  addPowerStation: (powerStation: PowerStations) =>
    set((state: PowerStationStore) => ({
      powerStations: [...state.powerStations, powerStation],
    })),
  setPowerStation: (powerStations: PowerStations[]) =>
    set(() => ({ powerStations: powerStations })),
  updatePowerStation: (powerStation: PowerStations) =>
    set((state: PowerStationStore) => ({
      powerStations: state.powerStations.map((item) =>
        item._id === powerStation._id ? powerStation : item
      ),
    })),
}));

export default usePowerStationStore;
