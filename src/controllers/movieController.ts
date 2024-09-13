import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { http } from "../config/axios";

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const response = await http.get("movies");
    res.send(response.data);
  } catch (error) {
    res.status(HttpStatusCode.BadRequest).send(error);
  }
};
