import express from "express";
import {
  authenticateController,
  registerController,
} from "../controllers/loginController";

const loginRouter = express.Router();

loginRouter.post("/authenticate", authenticateController);
loginRouter.post("/register", registerController);

export default loginRouter;
