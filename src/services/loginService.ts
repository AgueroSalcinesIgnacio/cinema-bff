import { HttpStatusCode } from "axios";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { http } from "../config/axios";
import { generateToken } from "../config/jwt";
import { BaseError } from "../middlewares/errors/BaseError";
import { IUser } from "../models/IUser";
import { USERS, USERS_EMAIL } from "../utils/ApiUrls";
import { formatString } from "../utils/StringUtils";

export const authenticateService = async (user: IUser) => {
  const foundUser = await http.get<IUser>(
    formatString(USERS_EMAIL, user.email)
  );

  if (foundUser.status !== HttpStatusCode.Ok) {
    return Promise.reject(
      new BaseError("Email not found", HttpStatusCode.BadRequest)
    );
  }

  const isMatch = bcrypt.compareSync(user.password, foundUser.data.password);

  if (!isMatch) {
    return Promise.reject(
      new BaseError("Password is not correct", HttpStatusCode.BadRequest)
    );
  }

  return { token: generateToken(foundUser.data.id) };
};

export const registerService = async (user: IUser) => {
  // TODO extract
  dotenv.config();

  return bcrypt
    .genSalt(Number(process.env.BCRYPT_SALT))
    .then((salt) => {
      return bcrypt.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
      return callRegister(user);
    });
};

const callRegister = async (user: IUser) => {
  const response = await http.post<IUser>(USERS, user);

  if (response.status !== HttpStatusCode.Ok) {
    return Promise.reject(
      new BaseError("User not registered", HttpStatusCode.BadRequest)
    );
  }

  return response.data;
};
