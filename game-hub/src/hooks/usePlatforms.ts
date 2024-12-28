import useData from "./useData";
import { Platform } from "./useGames";
/**
 * Custom hook to fetch platform data.
 *
 * This hook uses the `useData` hook to fetch a list of platform data from the specified endpoint.
 * The data fetched is of type `Platform`.
 *
 * @returns {ReturnType<typeof useData<Platform>>} The platform data fetched from the API.
 */

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
