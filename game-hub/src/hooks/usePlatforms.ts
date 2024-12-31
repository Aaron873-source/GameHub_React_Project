import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

/**
 * Custom hook to fetch platform data.
 *
 * This hook uses the `useQuery` hook from `@tanstack/react-query` to fetch a list of platform data from the specified endpoint.
 * The data fetched is of type `Platform`.
 *
 * @returns {ReturnType<typeof useQuery>} The platform data fetched from the API.
 */
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 hours
  });

export default usePlatforms;
