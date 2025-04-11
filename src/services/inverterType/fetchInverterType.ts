import { useInverterTypeStore } from '@/store/inverterTypeStore';
import { useStore } from '@/store/store';
import axios from "axios";
const fetchInverterType = async () => {
  const { setInverterType} = useInverterTypeStore.getState();
  const {token} = useStore.getState()
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const res = await axios.get("/inverter-type", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data;
    setInverterType(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchInverterType;
    