import { API_CONFIGURATION } from "@/consts/api";
import request from "../request";

export type ConfigResponse = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
};

export const fetchConfiguration = () =>
  request<ConfigResponse>({
    url: API_CONFIGURATION,
  });
