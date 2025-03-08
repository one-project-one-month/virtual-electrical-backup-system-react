import { create } from "zustand";
import { InverterType } from "@/types/inverterType";

export interface InverterTypeStore {
  inverterType: InverterType[];
  addInverterType: (inverterType: InverterType) => void;
  setInverterType: (inverterType: InverterType[]) => void;
  editInverterType: (inverterType: InverterType) => void;
}

export const useInverterTypeStore=  create<InverterTypeStore>((set) => ({
  inverterType: [],
  addInverterType: (inverterType: InverterType) =>
    set((state: InverterTypeStore) => ({ inverterType: [...state.inverterType, inverterType] })),
  setInverterType: (inverterType: InverterType[]) =>
    set(() => ({ inverterType: inverterType })),
  editInverterType: (inverterType: InverterType) =>
    set((state: InverterTypeStore) => ({ inverterType: state.inverterType.map((item) => item.id === inverterType.id ? inverterType : item) })),
}));
