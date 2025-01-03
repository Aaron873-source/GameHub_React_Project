import usePlatforms from "./usePlatforms";

/**
 * Custom hook to find a specific platform by its ID.
 *
 * This hook utilizes the `usePlatforms` hook to fetch the list of platforms
 * and then searches for a platform with the specified ID.
 *
 * @param {number} [id] - The ID of the platform to find.
 * @returns {Platform | undefined} - The platform object if found, otherwise undefined.
 */

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
