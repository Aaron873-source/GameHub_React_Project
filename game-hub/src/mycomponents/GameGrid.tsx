import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
    //Calling custom hook useGames to get games and error
    const { games, error } = useGames();
    //Use of a custom Hook makes this GameGrid much cleaner and makes it primarily focused on returning some Mark-Up.
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
