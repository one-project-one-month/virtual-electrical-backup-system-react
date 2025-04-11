import axios from "axios";
import { useStore } from "@/store/store";
import { useInverterTypeStore } from '@/store/inverterTypeStore';
import { InverterType } from "@/types/inverterType";
const editInverterType = async (data: Partial<InverterType>) => {
  const {  token } = useStore.getState();
  const { editInverterType } = useInverterTypeStore.getState();
  try {
    const res = await axios.patch(
      `/inverter-type/update/${data._id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = res.data.data;
    console.log(result)
    editInverterType(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default editInverterType;
