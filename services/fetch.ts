import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000/v1",
});
