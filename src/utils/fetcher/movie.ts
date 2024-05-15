import {
  API_MOVIE_TRENDING,
  API_MOVIE_POPULARS,
  API_MOVIE_TOP_RATED,
  API_MOVIE_DETAIL,
  API_MOVIE_CREDIT,
  API_SEARCH,
  API_EXPLORE,
  API_GENRE,
} from "@/consts/api";
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
  media_type: string;
};

export type MovieResponse = {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type CreditResponse = {
  name: string;
  character: string;
  profile_path: string;
};

export type SearchResponse = {
  page: number;
  results: MovieDetail[];
  total_pages: number;
  total_results: number;
};

export type GenreResponse = {
  genres: { id: number; name: string }[];
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

export const fetchMovieById = (type: string, id: number) =>
  request<MovieDetailResponse>({
    url: API_MOVIE_DETAIL(type, id),
  });

export const fetchMovieCredit = (type: string, id: number) =>
  request<CreditResponse[]>({
    url: API_MOVIE_CREDIT(type, id),
  });

export const searchMovie = (params: object) =>
  request<SearchResponse>({
    url: API_SEARCH,
    params,
  });

export const exploreMovie = (type: string, params: object) =>
  request<SearchResponse>({
    url: API_EXPLORE(type),
    params,
  });

export const fetchGenre = (type: string) =>
  request<GenreResponse>({
    url: API_GENRE(type),
  });
