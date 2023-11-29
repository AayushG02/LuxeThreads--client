import axios from "axios";

const token = JSON.parse(localStorage.getItem("user"))?.user?.token;
export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token ? token : ""}`,
  },
});
