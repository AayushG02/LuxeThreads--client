import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0YjgzNGY4MGRmNjc0YTNiYjc0Y2IiLCJpYXQiOjE3MDAzMTUxODQsImV4cCI6MTcwMDU3NDM4NH0.SxYHs4QmTcUleTu81d6fDnW-zybn3zwJHDwqI6MQ8No",
  },
});
