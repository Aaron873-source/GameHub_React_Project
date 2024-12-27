import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

//Need to first pass a game object as a prop to GameCard component
//Using an interface to define the shape of the game object
interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          >
          </PlatformIconList>
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </>
  );
};

export default GameCard;
