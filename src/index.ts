import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { corsOptions } from "./config/cors";

dotenv.config();

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT;
const backendURL = process.env.BACKEND_URL;

const http = axios.create({
  baseURL: backendURL,
});

app.get("/api/movies", async (req: Request, res: Response) => {
  try {
    const response = await http.get("movies");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error in getting user data");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
