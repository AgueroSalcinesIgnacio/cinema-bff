import axios, { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";
import { BaseError } from "./BaseError";

export const errorHandler = (
  err: BaseError | AxiosError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (axios.isAxiosError(err)) {
    const axiosError = err as AxiosError;
    res.status(axiosError.status!).send(axiosError.response?.data);
  }
  const baseError = err as BaseError;
  res.status(baseError.status).send(err.message);
};
