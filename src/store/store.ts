import { create } from "zustand";
import { createInverterTypeSlice, InverterTypeSlice } from "./inverterTypeSlice";
type Store = InverterTypeSlice & {
  token: string;
};
export const useBoundStore = create<Store>((...a) => ({
  token: "1|hmsbODm48UdT6ALOpdpRKCOcZB8TAKZ5QLIlpxtA4a8f5946",
  ...createInverterTypeSlice(...a),
}));
