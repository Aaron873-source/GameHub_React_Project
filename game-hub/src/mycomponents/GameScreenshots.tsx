import useScreenShots from "@/hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

/**
 * This component fetches and displays screenshots for a specific game.
 *
 * @component
 * @param {number} gameId - The ID of the game for which screenshots are to be fetched.
 *
 * @returns {JSX.Element | null} A grid of images displaying the screenshots of the game, or null if the data is still loading.
 *
 * @throws Will throw an error if there is an issue fetching the screenshots.
 *
 * @example
 * <GameScreenshots gameId={12345} />
 */

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={4} rowGap={4}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
