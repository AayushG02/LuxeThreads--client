import axios from "axios";

// Create a new Axios instance
export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add an interceptor to update the authorization header before each request
makeRequest.interceptors.request.use(
  (config) => {
    // Get the latest token from local storage
    const userToken = JSON.parse(localStorage.getItem("user"))?.user?.token;

    // Update the authorization header
    config.headers.Authorization = `Bearer ${userToken || ""}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
