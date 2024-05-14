import { useQuery } from "@tanstack/react-query";
import { fetchConfiguration } from "../fetcher/config";

function useFetchConfiguration() {
  return useQuery(["config"], () => fetchConfiguration());
}

export { useFetchConfiguration };
