
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

/**
 * GameHeading component displays a heading based on the selected game platform and genre.
 *
 * @component
 * @param {Props} props - The props for the GameHeading component.
 * @param {GameQuery} props.gameQuery - The query object containing the selected platform and genre.
 *
 * @returns {JSX.Element} A heading element displaying the platform and genre of the games.
 *
 * @example
 * // Example usage of GameHeading component
 * const gameQuery = {
 *   platform: { name: "PC" },
 *   genre: { name: "Action" }
 * };
 *
 * <GameHeading gameQuery={gameQuery} />
 * // Renders: "PC Action Games"
 */

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading size="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
