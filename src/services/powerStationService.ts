import API from "@/api/apiConfig";
import { PowerStations } from "@/types/powerstations";

export const getPowerStations = async () => {
  const response = await API.get("/powerstation", {
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  const result = response.data.data;
  return result;
};


export const getPowerStationById = async (id: string) => {
  const response = await API.get(`/powerstation/${id}`, {
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    },
  });
  const result = response.data.data;
  return result;
}

export const editPowerStations = async (id: string, data: PowerStations) => {
  const response = await API.patch(`/powerstation/update/${id}`, data, {
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    }
  });
  const result = response.data.data;
  return result;
}

export const createPowerStation = async (data: PowerStations) => {
  const response = await API.post(`/powerstation/create`, data, {
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    }
  });
  const result = response.data.msg;
  return result;
}

export const deletePowerStationById = async (id:string) => {
  const response = await API.delete(`/powerstation/delete/${id}`, {
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
    }
  });
  const result = response.data.data; 
  return result;
}
