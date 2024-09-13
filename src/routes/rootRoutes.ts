import express from "express";
import { authenticate } from "../middlewares/authMiddleware";
import loginRouter from "./loginRoutes";
import moviesRouter from "./moviesRoutes";

const rootRouter = express.Router();

rootRouter.use("/api/login", loginRouter);
rootRouter.use("/api/movies", authenticate, moviesRouter);

rootRouter.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default rootRouter;
