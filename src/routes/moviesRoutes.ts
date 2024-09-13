import express from "express";
import { getAllMovies } from "../controllers/movieController";

const moviesRouter = express.Router();

moviesRouter.get("/", getAllMovies);

export default moviesRouter;
