import { useEffect, useState } from "react";
import { Game } from "./useGames";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";


interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}




const useGenres = () => {
 const [genres, setGenres] = useState<Genre[]>([]);
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
      .get<FetchGenresResponse>("/genres", { signal: controller.signal }) // Using the instance of Abort controller to connect it to the request using the signal property
      .then((response) => {
        setGenres(response.data.results);
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
  return { genres, error, isLoading };


};

export default useGenres;