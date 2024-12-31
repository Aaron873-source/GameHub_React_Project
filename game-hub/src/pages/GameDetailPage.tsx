import ExpandableText from "@/mycomponents/ExpandableText";
import GameAttributes from "@/mycomponents/GameAttributes";
import GameScreenshots from "@/mycomponents/GameScreenshots";
import GameTrailer from "@/mycomponents/GameTrailer";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading fontSize={"4xl"}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id}></GameTrailer>
      <GameScreenshots gameId={game.id}></GameScreenshots>
    </>
  );
};

export default GameDetailPage;
