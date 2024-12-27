import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[] )=> {
  const [data, setData] = useState<T[]>([]);
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
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }) // Using the instance of Abort controller to connect it to the request using the signal property
      .then((response) => {
        setData(response.data.results);
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
  }, deps?[...deps]:[]); //Added empty array of dependecies to the useEffect Hook to avoid making infinite requests to the backend which is something we never want to open.
  return { data, error, isLoading };
};

export default useData;
