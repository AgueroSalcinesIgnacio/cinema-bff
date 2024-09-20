import express from "express";
import { getAllMoviesController } from "../controllers/movieController";

const moviesRouter = express.Router();

moviesRouter.get("", getAllMoviesController);

export default moviesRouter;
