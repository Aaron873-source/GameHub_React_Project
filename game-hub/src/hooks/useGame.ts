import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";

/**
 * Custom hook to fetch game data based on the provided slug.
 * Utilizes the `useQuery` hook from `@tanstack/react-query` to manage the query state.
 *
 * @param {string} slug - The unique identifier for the game to be fetched.
 * @returns {object} - The query object returned by `useQuery`, containing the game data and query state.
 *
 * @example
 * const { data, error, isLoading } = useGame("game-slug");
 *
 * @file This file defines a custom hook `useGame` that fetches game data from the API.
 */

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
