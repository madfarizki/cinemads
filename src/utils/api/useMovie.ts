import { useQuery } from "@tanstack/react-query";
import {
  fetchAllMovieTranding,
  fetchAllPopular,
  fetchAllTopRated,
  fetchMovieById,
  fetchMovieCredit,
} from "../fetcher/movie";

function useFetchAllMovieTranding(timeWindow: string) {
  return useQuery(["tranding", timeWindow], () => fetchAllMovieTranding(timeWindow));
}

function useFetchAllPopular(type: string) {
  return useQuery(["popular", type], () => fetchAllPopular(type));
}

function useFetchAllTopRated(type: string) {
  return useQuery(["popular", type], () => fetchAllTopRated(type));
}

function useMovieById(type: string, id: number) {
  return useQuery(["movieById", type, id], () => fetchMovieById(type, id));
}

function useMovieCredit(type: string, id: number) {
  return useQuery(["credit", type, id], () => fetchMovieCredit(type, id));
}

export {
  useFetchAllMovieTranding,
  useFetchAllPopular,
  useFetchAllTopRated,
  useMovieById,
  useMovieCredit,
};
