import API from "@/api/apiConfig"


export const getAllCategory = async() => {
    const response = await API.get("/category", {
        headers: {
            authorization: "something"
        }
    });
    const result = response.data.data;
    return result;
}