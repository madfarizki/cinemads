const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const API_MOVIE_TRENDING = (timeWindow: string) =>
  `${API_BASE_URL}/trending/all/${timeWindow}`;
export const API_MOVIE_POPULARS = (type: string) => `${API_BASE_URL}/${type}/popular`;
export const API_MOVIE_TOP_RATED = (type: string) => `${API_BASE_URL}/${type}/top_rated`;
export const API_MOVIE_DETAIL = (type: string, id: number) => `${API_BASE_URL}/${type}/${id}`;
export const API_MOVIE_CREDIT = (type: string, id: number) =>
  `${API_BASE_URL}/${type}/${id}/credits`;
export const API_MOVIE_SIMILAR = (id: number, type: string) =>
  `${API_BASE_URL}/${type}/${id}/similar`;
export const API_SEARCH = (query: string) => `${API_BASE_URL}/search/multi?query=${query}`;
export const API_CONFIGURATION = `${API_BASE_URL}/configuration`;
