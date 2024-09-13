import axios from "axios";

const backendURL = process.env.BACKEND_URL;

export const http = axios.create({
  baseURL: backendURL,
});
