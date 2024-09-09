import cors from "cors";

const allowedOrigins = ["http://localhost:9000"];

export const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
