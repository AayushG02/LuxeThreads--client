import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU0YjgzNGY4MGRmNjc0YTNiYjc0Y2IiLCJpYXQiOjE3MDA2MjcxNjEsImV4cCI6MTcwMDg4NjM2MX0.Qb_4Xmf-48IQF9xx86R7Bu9DREUWreXBmkU-_ZYcYNY",
  },
});
