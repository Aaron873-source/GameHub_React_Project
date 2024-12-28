import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

//Created this custom hook to fetch games from the API, HELPING IN SEPARATION OF CONCERNS
const useGames = (
gameQuery:GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id },
    },
    [gameQuery]
  );

export default useGames;
