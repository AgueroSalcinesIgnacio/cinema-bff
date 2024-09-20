import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const backendURL = process.env.BACKEND_URL;

export const http = axios.create({
  baseURL: backendURL,
  timeout: 10000,
});
