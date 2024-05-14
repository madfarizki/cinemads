import { useQuery } from "@tanstack/react-query";
import { fetchAllMovieTranding, fetchAllPopular, fetchAllTopRated } from "../fetcher/movie";

function useFetchAllMovieTranding(timeWindow: string) {
  return useQuery(["tranding", timeWindow], () => fetchAllMovieTranding(timeWindow));
}

function useFetchAllPopular(type: string) {
  return useQuery(["popular", type], () => fetchAllPopular(type));
}

function useFetchAllTopRated(type: string) {
  return useQuery(["popular", type], () => fetchAllTopRated(type));
}

export { useFetchAllMovieTranding, useFetchAllPopular, useFetchAllTopRated };
