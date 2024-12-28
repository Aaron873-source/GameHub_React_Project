import { GameQuery } from "@/App";
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
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading size="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
