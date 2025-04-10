import { create } from "zustand";
type Store =  {
  token: string;
};
export const useStore = create<Store>(() => ({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y3ZWFiYjk0MjVkNzk0MWQxNzk1MDIiLCJpYXQiOjE3NDQzMDA3MzEsImV4cCI6MTc0NDU1OTkzMX0.QHZPx8T161cHFCv55QzPgMvoG-qPlpp6YZWQdLywcRI",
}));
