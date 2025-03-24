import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;



const API = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" }
});

export default API;