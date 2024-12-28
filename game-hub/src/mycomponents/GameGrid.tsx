import useGames, { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  //Calling custom hook useGames to get games and error
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  //rendering the Skeletons
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //Use of a custom Hook makes this GameGrid much cleaner and makes it primarily focused on returning some Mark-Up.
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        columnGap={5}
        rowGap={10}
        padding={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
