/**
 * This module provides a custom hook `useGenres` for fetching and managing genre data.
 *
 * @module useGenres
 */

import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

/**
 * Interface representing a Genre object.
 *
 * @interface Genre
 * @property {number} id - The unique identifier for the genre.
 * @property {string} name - The name of the genre.
 * @property {string} image_background - The URL of the background image associated with the genre.
 */
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/**
 * Custom hook to fetch and manage genre data using React Query.
 *
 * @function useGenres
 * @returns {object} The data and state management utilities for genres.
 */
const useGenres = () =>
  useQuery({
    queryKey: ["genres "],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, //24 hours
  });

export default useGenres;
