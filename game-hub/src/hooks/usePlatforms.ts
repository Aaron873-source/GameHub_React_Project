/**
 * Custom hook to fetch and cache platform data using React Query.
 *
 * This hook utilizes the `useQuery` hook from `@tanstack/react-query` to fetch
 * platform data from the API endpoint `/platforms/lists/parents`. The data is
 * cached for 24 hours to minimize unnecessary network requests.
 *
 * @module usePlatforms
 */

import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 hours
  });

export default usePlatforms;
