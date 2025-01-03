import { Trailer } from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
/**
 * Custom hook to fetch trailers for a specific game using React Query.
 *
 * @param {number} gameId - The ID of the game for which to fetch trailers.
 * @returns {object} - The result of the useQuery hook, which includes the trailers data, loading state, and error state.
 *
 * This hook uses the APIClient to send a GET request to the endpoint `/games/${gameId}/movies`
 * and retrieves the trailers associated with the specified game.
 *
 * The query is cached and managed by React Query, identified by the query key ["trailers", gameId].
 */

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
