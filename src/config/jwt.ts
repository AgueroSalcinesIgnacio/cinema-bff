import jwt from "jsonwebtoken";

const generateToken = (userId: number) => {
  const jwtSecret = process.env.JWT_SECRET || "";
  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "1h",
  });
  return token;
};

export { generateToken };
