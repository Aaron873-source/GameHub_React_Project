/**
 * This module provides a custom hook `useGenres` for fetching and managing genre data.
 *
 * @module useGenres
 */

import useData from "./useData";

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
 * Custom hook to fetch and manage genre data.
 *
 * @function useGenres
 * @returns {ReturnType<typeof useData>} The data and state management utilities for genres.
 */
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
