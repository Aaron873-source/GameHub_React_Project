import { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch screenshots for a specific game.
 *
 * This hook uses the `useQuery` hook from `@tanstack/react-query` to fetch
 * screenshots for a game identified by its `gameId`. It leverages the `APIClient`
 * class to make the API request to the endpoint `/games/${gameId}/screenshots`.
 *
 * @param {number} gameId - The unique identifier of the game for which screenshots are to be fetched.
 * @returns {object} - The result of the `useQuery` hook, which includes the status, data, and error information.
 */

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
