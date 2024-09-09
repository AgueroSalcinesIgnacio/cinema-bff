import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios"

dotenv.config();

const app: Express = express();
const port = process.env.PORT ;
const backendURL = process.env.BACKEND_URL;

const http = axios.create({
    baseURL: backendURL,
  });

app.get("/",async (req: Request, res: Response) => {
    try {
        console.log("Axios base URL: "+backendURL)
        const response = await http.get("movies");
        res.send(response.data);
      } catch (error) {
        console.log(error)
        res.status(500).send('Error in getting user data');
      }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});