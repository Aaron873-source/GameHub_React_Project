import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

//Created this custom hook to fetch games from the API, HELPING IN SEPARATION OF CONCERNS
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  //State to help us with tracking the loading state of the request
  const [isLoading, setLoading] = useState(false);

  //using Effect Hook to send request to the server
  useEffect(() => {
    //Handling cancellations of the request
    //Creating an instance of AbortController
    const controller = new AbortController();

    //Setting the loading state to true
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) // Using the instance of Abort controller to connect it to the request using the signal property
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort(); //Calling the abort method to cancel the request
    };
  }, []); //Added empty array of dependecies to the useEffect Hook to avoid making infinite requests to the backend which is something we never want to open.
  return { games, error, isLoading };
};

export default useGames;
