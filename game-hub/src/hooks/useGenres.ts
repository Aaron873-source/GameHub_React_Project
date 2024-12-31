/**
 * This module provides a custom hook `useGenres` for fetching and managing genre data.
 *
 * @module useGenres
 */

import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

/**
 * Custom hook to fetch and manage genre data using React Query.
 *
 * @function useGenres
 * @returns {object} The data and state management utilities for genres.
 */
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 hours
  });

export default useGenres;
