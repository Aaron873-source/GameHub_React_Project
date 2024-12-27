import useData from "./useData";

export interface Platform {
  id: number;
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
const useGames = () => useData<Game>("/games");

export default useGames;
