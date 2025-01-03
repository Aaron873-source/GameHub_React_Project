import useGenres from "./useGenres";

/**
 * Custom hook to find a specific genre by its ID.
 *
 * This hook utilizes the `useGenres` hook to fetch a list of genres and then
 * searches for a genre with the specified ID within the fetched genres.
 *
 * @param {number} [id] - The ID of the genre to find. If not provided, the hook will return `undefined`.
 * @returns {object | undefined} The genre object with the specified ID, or `undefined` if not found.
 */

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
