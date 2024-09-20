import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import { corsOptions } from "./config/cors";
import { errorHandler } from "./middlewares/errors/error";
import rootRouter from "./routes/rootRoutes";

dotenv.config();

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT;

app.use("/api", rootRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
