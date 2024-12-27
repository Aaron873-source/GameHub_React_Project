import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  //Calling custom hook useGames to get games and error
  const { games, error } = useGames();
  //Use of a custom Hook makes this GameGrid much cleaner and makes it primarily focused on returning some Mark-Up.
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        columnGap={10}
        rowGap={10}
        padding={5}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
