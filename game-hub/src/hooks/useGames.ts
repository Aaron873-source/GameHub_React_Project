import { GameQuery } from "@/App";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "@/services/api-client";

/**
 * @file useGames.ts
 * @description Custom hook to fetch games from the API, helping in separation of concerns.
 */

/**
 * @interface Platform
 * @property {string} id - The unique identifier of the platform.
 * @property {string} name - The name of the platform.
 * @property {string} slug - The slug of the platform.
 */

export interface Platform {
  id: string;
  name: string;
  slug: string;
}
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
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((response) => response.data),
  });

export default useGames;
