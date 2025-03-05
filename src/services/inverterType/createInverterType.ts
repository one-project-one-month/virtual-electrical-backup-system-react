import axios from "axios";
import { useBoundStore } from "@/store/store";
import { InverterType } from "@/types/inverterType";

const createInverterType = async (data: Partial<InverterType>) => {
  const { token, addInverterType } = useBoundStore.getState();
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
