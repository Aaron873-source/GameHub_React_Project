import ExpandableText from "@/mycomponents/ExpandableText";
import GameAttributes from "@/mycomponents/GameAttributes";
import GameScreenshots from "@/mycomponents/GameScreenshots";
import GameTrailer from "@/mycomponents/GameTrailer";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }}>
      <Box>
        <Heading fontSize={"4xl"}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </Box>
      <Box>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
