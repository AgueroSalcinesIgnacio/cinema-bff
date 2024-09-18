import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import { getAllMoviesService } from "../services/movieService";

export const getAllMoviesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getAllMoviesService()
    .then((result) => {
      res.status(HttpStatusCode.Ok).send(result.data);
    })
    .catch(next);
};
