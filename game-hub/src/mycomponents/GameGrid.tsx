import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

/**
 * GameGrid component is responsible for displaying a grid of game cards.
 * It uses a custom hook `useGames` to fetch the games based on the provided query.
 * It also handles loading and error states.
 *
 * @component
 * @param {Props} props - The props for the GameGrid component.
 * @param {GameQuery} props.gameQuery - The query object to fetch games.
 *
 * @returns {JSX.Element} The rendered GameGrid component.
 *
 * @example
 * <GameGrid gameQuery={gameQuery} />
 *
 * @remarks
 * - This component uses Chakra UI's `SimpleGrid` for layout.
 * - It displays skeletons while the games are loading.
 * - If there is an error, it displays the error message.
 */

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  //Calling custom hook useGames to get games and error
  const { data, error, isLoading } = useGames(gameQuery);
  //rendering the Skeletons
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //Use of a custom Hook makes this GameGrid much cleaner and makes it primarily focused on returning some Mark-Up.

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        columnGap={6}
        rowGap={10}
        padding={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
