import API from "@/api/apiConfig";
import { Inverters } from "@/types/inverters";

export const getAllInverters = async ()=>{
    const res = await API.get("/inverter",{
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
    });
    return res.data.data
}
export const getInverterById = async (id:string) => {
  const res = await API.get(`/inverter/${id}`,{
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  return res.data.data
}

export const updateInverter = async (payload:Partial<Inverters>) => {
  const res = await API.patch(`/inverter/update/${payload._id}`,payload,{
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  return res.data.data
}

export const createInverter = async (payload:Partial<Inverters>) => {
  const res = await API.post(`/inverter/create/`,payload,{
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  return res.data.data
}

export const deleteInverter = async (_id: string) => {
  const res = await API.delete(`/inverter/delete/${_id}`,{
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  return res.data.data
}