import { HttpStatusCode } from "axios";
import bcrypt from "bcrypt";
import { http } from "../config/axios";
import { generateToken } from "../config/jwt";
import { IUser } from "../models/IUser";
import { USERS, USERS_EMAIL } from "../utils/ApiUrls";
import { formatString } from "../utils/StringUtils";

export const authenticateService = async (user: IUser) => {
  const foundUser = await http.get<IUser>(
    formatString(USERS_EMAIL, user.email)
  );

  const isMatch = bcrypt.compareSync(user.password, foundUser.data.password);

  if (!isMatch) {
    throw new Error("Password is not correct");
  }

  return generateToken(foundUser.data.id);
};

export const registerService = async (user: IUser) => {
  const response = await http.post(formatString(USERS, user));

  if (response.status !== HttpStatusCode.Created) {
    throw new Error("User not registered");
  }
};
