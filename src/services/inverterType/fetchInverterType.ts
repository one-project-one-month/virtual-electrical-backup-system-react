import axios from "axios";
import { useBoundStore } from "@/store/store";
const fetchInverterType = async () => {
  const { setInverterType, token } = useBoundStore.getState();
  try {
    const res = await axios.get("/v1/admin/inverter-types", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data.data;
    setInverterType(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchInverterType;
    