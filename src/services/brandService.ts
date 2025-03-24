import API from "@/api/apiConfig";
import { Brands } from "@/types/brand";


export const getAllBrand = async(filter?: string) => {
    const response = await API.get(`/brand${filter? '?' + filter: ''}`, {
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGFhOGVkMmI0YjVjNjM5YTFhZDgiLCJpYXQiOjE3NDI1NzI0NDQsImV4cCI6MTc0MjgzMTY0NH0.NrpxPYa2eEny2yP5KB8XZmeZYmneUyEgeDY26QOMrvc",
        },
      });
      const result = response.data.data;
      return result;
}

export const getBrandById = async(id: string) => {
  const response = await API.get(`/brand/${id}`, {
    headers: {
      authorization: "something"
    }
  });
  const result = response.data.data;
  return result;
}

export const createBrand = async(data: Brands) => {

  const response = await API.post("/brand/create", data, {
    headers: {
      authorization: "something"
    }
  });
  const result = response.data.msg;
  return result;
}

export const deleteBrand = async(id: string) => {
  const response = await API.delete(`/brand/delete/${id}`, {
    headers: {
      authorization: "something"
    }
  });
  const result = response.data.msg;
  return result;
}