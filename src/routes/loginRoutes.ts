import express from "express";
import {
  authenticateController,
  registerController,
} from "../controllers/loginController";

const loginRouter = express.Router();

loginRouter.get("/authenticate", authenticateController);
loginRouter.get("/register", registerController);

export default loginRouter;
