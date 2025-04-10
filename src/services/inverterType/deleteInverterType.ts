import axios from "axios";

export default async function deleteInverterType(id:string){
    const res = await axios.delete(`/inverter-type/delete/${id}`);
    const result = res.data.data
    return result
}