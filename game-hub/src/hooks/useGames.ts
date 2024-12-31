import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "./usePlatforms";

/**
 * @file useGames.ts
 * @description Custom hook to fetch games from the API, helping in separation of concerns.
 */

const apiClient = new APIClient<Game>("/games");

/**
 * @interface Platform
 * @property {string} id - The unique identifier of the platform.
 * @property {string} name - The name of the platform.
 * @property {string} slug - The slug of the platform.
 */

/**
 * @interface Game
 * @property {number} id - The unique identifier of the game.
 * @property {string} name - The name of the game.
 * @property {string} background_image - The background image URL of the game.
 * @property {{ platform: Platform }[]} parent_platforms - The platforms the game is available on.
 * @property {number} metacritic - The Metacritic score of the game.
 */
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

/**
 * Custom hook to fetch games from the API based on the provided game query.
 *
 * @function useGames
 * @param {GameQuery} gameQuery - The query parameters for fetching games.
 * @returns {ReturnType<typeof useData>} The data fetched from the API.
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
