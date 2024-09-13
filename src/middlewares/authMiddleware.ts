import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const secret: string = process.env.JWT_SECRET!;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (decoded) {
      (req as CustomRequest).token = decoded;
      next();
    }
  });

  res.status(401).send("Authentication failed");
}
