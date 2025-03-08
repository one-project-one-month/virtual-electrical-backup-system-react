import axios from "axios";
import { useStore } from "@/store/store";
import { useInverterTypeStore } from '@/store/inverterTypeStore';
import { InverterType } from "@/types/inverterType";

const createInverterType = async (data: Partial<InverterType>) => {
  const { token } = useStore.getState();
  const {  addInverterType } = useInverterTypeStore.getState();
  try {
    const res = await axios.post("/v1/admin/inverter-types", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data.data;
    addInverterType(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default createInverterType;
