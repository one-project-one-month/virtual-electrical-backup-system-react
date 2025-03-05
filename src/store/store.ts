import { create } from "zustand";
import { createInverterTypeSlice, InverterTypeSlice } from "./inverterTypeSlice";
type Store = InverterTypeSlice & {
  token: string;
};
export const useBoundStore = create<Store>((...a) => ({
  token: "1|93vWgIo9Z2elgTmySron7bgV7mEKt0RTCYKqWzQpca989e6d",
  ...createInverterTypeSlice(...a),
}));
