import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
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

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();

  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading size="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
