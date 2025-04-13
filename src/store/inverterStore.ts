import {create} from "zustand"
import { Inverters } from "@/types/inverters"

export interface InverterStore {
    inverters: Inverters[],
    addInverter: (inverter: Inverters) => void;
      setInverter: (inverter: Inverters[]) => void;
      editInverter: (inverter: Inverters) => void;
    }
    
export const useinverterStore=  create<InverterStore>((set) => ({
      inverters: [],
      addInverter: (inverter: Inverters) =>set((state: InverterStore) => ({ inverters: [...state.inverters, inverter] })),
      setInverter: (inverter: Inverters[]) => set(() => ({ inverters: inverter })),
      editInverter: (inverter: Inverters) =>set((state: InverterStore) => ({ inverters: state.inverters.map((item) => item._id === inverter._id ? inverter : item) })),
}));