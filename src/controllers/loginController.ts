import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/IUser";
import { authenticateService, registerService } from "../services/loginService";

export const authenticateController = (
  req: Request<IUser>,
  res: Response,
  next: NextFunction
) => {
  authenticateService(req.body)
    .then((result) => {
      res.status(HttpStatusCode.Ok).send(result);
    })
    .catch(next);
};

export const registerController = (
  req: Request<IUser>,
  res: Response,
  next: NextFunction
) => {
  registerService(req.body)
    .then(() => res.status(HttpStatusCode.Created).send())
    .catch(next);
};
