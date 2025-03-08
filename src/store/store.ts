import { create } from "zustand";
type Store =  {
  token: string;
};
export const useStore = create<Store>(() => ({
  token: "1|ZsP4Jf9ynyn10ILTSOoGepZ0FTqsFo46NHKFuJ6Lb64dbdf4",
}));
