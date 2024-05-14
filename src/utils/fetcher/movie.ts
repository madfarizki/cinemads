import { API_MOVIE_TRENDING, API_MOVIE_POPULARS, API_MOVIE_TOP_RATED } from "@/consts/api";
import request from "../request";

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResponse = {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
};

export const fetchAllMovieTranding = (timeWindow: string) =>
  request<MovieResponse>({
    url: API_MOVIE_TRENDING(timeWindow),
  });

export const fetchAllPopular = (type: string) =>
  request<MovieResponse>({
    url: API_MOVIE_POPULARS(type),
  });

export const fetchAllTopRated = (type: string) =>
  request<MovieResponse>({
    url: API_MOVIE_TOP_RATED(type),
  });
