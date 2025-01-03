import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";

/**
 * @file useGames.ts
 * @description Custom hook to fetch games from the API using infinite scrolling.
 */

const apiClient = new APIClient<Game>("/games");

/**
 * Custom hook to fetch games from the API based on the provided game query.
 *
 * @function useGames
 * @returns {ReturnType<typeof useInfiniteQuery>} The data fetched from the API using infinite scrolling.
 */
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    //This function is used to get the next page number to take the user to the next page of games
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24 hours
  });
};

export default useGames;
