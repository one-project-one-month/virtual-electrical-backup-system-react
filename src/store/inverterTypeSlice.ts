import { StateCreator } from "zustand";
import { InverterType } from "@/types/inverterType";

export interface InverterTypeSlice {
  inverterType: InverterType[];
  addInverterType: (inverterType: InverterType) => void;
  setInverterType: (inverterType: InverterType[]) => void;
  editInverterType: (inverterType: InverterType) => void;
}

export const createInverterTypeSlice: StateCreator<InverterTypeSlice> = (set) => ({
  inverterType: [],
  addInverterType: (inverterType: InverterType) =>
    set((state: InverterTypeSlice) => ({ inverterType: [...state.inverterType, inverterType] })),
  setInverterType: (inverterType: InverterType[]) =>
    set(() => ({ inverterType: inverterType })),
  editInverterType: (inverterType: InverterType) =>
    set((state: InverterTypeSlice) => ({ inverterType: state.inverterType.map((item) => item.id === inverterType.id ? inverterType : item) })),
});
