import axios from "axios";

export const api = axios.create({
  baseURL: "https://fake-api.tractian.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
