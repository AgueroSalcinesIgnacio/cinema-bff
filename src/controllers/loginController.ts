import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import { authenticateService, registerService } from "../services/loginService";

export const authenticateController = (req: Request<IUser>, res: Response) => {
  try {
    res.status(HttpStatusCode.Ok).send(authenticateService(req.body));
  } catch (error) {
    res.status(HttpStatusCode.BadRequest).send(error);
  }
};

export const registerController = (req: Request, res: Response) => {
  try {
    registerService(req.body);
    res.status(HttpStatusCode.Created);
  } catch (error) {
    res.status(HttpStatusCode.BadRequest).send(error);
  }
};
