import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "@/services/api-client";
import { Platform } from "./useGames";
/**
 * Custom hook to fetch platform data.
 *
 * This hook uses the `useQuery` hook from `@tanstack/react-query` to fetch a list of platform data from the specified endpoint.
 * The data fetched is of type `Platform`.
 *
 * @returns {ReturnType<typeof useQuery>} The platform data fetched from the API.
 */

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
  });

export default usePlatforms;
