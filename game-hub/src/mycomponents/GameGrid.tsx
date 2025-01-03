import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

/**
 * GameGrid component is responsible for displaying a grid of game cards.
 * It uses a custom hook `useGames` to fetch the games.
 * It also handles loading and error states.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered GameGrid component.
 *
 * @example
 * <GameGrid />
 *
 * @remarks
 * - This component uses Chakra UI's `SimpleGrid` for layout.
 * - It displays skeletons while the games are loading.
 * - If there is an error, it displays the error message.
 * - It uses `react-infinite-scroll-component` for infinite scrolling.
 */

const GameGrid = () => {
  //Calling custom hook useGames to get games and error
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  //rendering the Skeletons
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //Use of a custom Hook makes this GameGrid much cleaner and makes it primarily focused on returning some Mark-Up.

  if (error) return <Text>{error.message}</Text>;

  //Below we have to count the number of games on each page and return it to the total
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
