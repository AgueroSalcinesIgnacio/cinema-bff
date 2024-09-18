import { http } from "../config/axios";
import { IMovie } from "../models/IMovie";
import { MOVIES } from "../utils/ApiUrls";

export const getAllMoviesService = async () => {
  return http.get<IMovie>(MOVIES);
};
